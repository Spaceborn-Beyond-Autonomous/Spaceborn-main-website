import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { uploadResumeSubmission } from '../../../backend/resumeService';
import { isRateLimited } from '../../../lib/rateLimit';
import { isValidLength, hasNewline, validateEmailFormat } from '../../../lib/validation';

export const runtime = 'nodejs';

function getSafeUploadErrorMessage(error: unknown) {
  if (!(error instanceof Error)) {
    return 'An internal server error occurred while processing your upload.';
  }

  if (
    error.message.includes('Google Drive service account env vars') ||
    error.message.includes('GOOGLE_DRIVE_SERVICE_ACCOUNT_EMAIL') ||
    error.message.includes('invalid_grant') ||
    error.message.includes('invalid_request') ||
    error.message.includes('File not found') ||
    error.message.includes('insufficient') ||
    error.message.includes('storage quota') ||
    error.message.includes('storageQuotaExceeded')
  ) {
    return error.message;
  }

  return process.env.NODE_ENV === 'production'
    ? 'An internal server error occurred while processing your upload.'
    : error.message;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const rateLimitResult = isRateLimited(request, 'resume-upload', {
      limit: 5,
      windowMs: 15 * 60 * 1000, // 15 minutes
    });

    if (rateLimitResult.limited) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimitResult.resetTime - Date.now()) / 1000).toString(),
          }
        }
      );
    }

    // 2. CSRF / Origin Hardening
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    if (origin) {
      try {
        const originUrl = new URL(origin);
        const hostHeader = host || '';
        if (originUrl.host !== hostHeader && process.env.NODE_ENV === 'production') {
          return NextResponse.json({ error: 'Forbidden origin.' }, { status: 403 });
        }
      } catch {
        return NextResponse.json({ error: 'Invalid origin header.' }, { status: 400 });
      }
    }

    // 3. Parse Form Data
    let formData: FormData;
    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { error: 'Invalid request payload. Must be multipart/form-data.' },
        { status: 400 }
      );
    }

    const name = formData.get('name') as string | null;
    const email = formData.get('email') as string | null;
    const phone = formData.get('phone') as string | null;
    const message = formData.get('message') as string | null;
    const resume = formData.get('resume') as File | null;

    // 4. Strict Validation
    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }
    if (!isValidLength(name, 100) || hasNewline(name)) {
      return NextResponse.json({ error: 'Invalid name format or length.' }, { status: 400 });
    }

    if (!email || !email.trim()) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
    }
    if (!isValidLength(email, 254) || hasNewline(email) || !validateEmailFormat(email)) {
      return NextResponse.json({ error: 'Invalid email address format or length.' }, { status: 400 });
    }

    if (phone && (!isValidLength(phone, 30) || hasNewline(phone))) {
      return NextResponse.json({ error: 'Invalid phone number format or length.' }, { status: 400 });
    }

    if (message && !isValidLength(message, 5000)) {
      return NextResponse.json({ error: 'Message exceeds maximum allowed length.' }, { status: 400 });
    }

    if (!resume || !(resume instanceof File)) {
      return NextResponse.json({ error: 'Resume file is required.' }, { status: 400 });
    }

    // File validation: extension
    const allowedExtensions = ['.pdf', '.docx', '.doc'];
    const fileExtension = path.extname(resume.name).toLowerCase();
    if (!allowedExtensions.includes(fileExtension)) {
      return NextResponse.json({ 
        error: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed.' 
      }, { status: 400 });
    }

    // File validation: size (max 10MB)
    const maxSize = 10 * 1024 * 1024;
    if (resume.size > maxSize) {
      return NextResponse.json({ 
        error: 'File is too large. Maximum allowed size is 10MB.' 
      }, { status: 400 });
    }

    const arrayBuffer = await resume.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const uploadedResume = await uploadResumeSubmission({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : '',
      message: message ? message.trim() : '',
      originalFileName: resume.name,
      mimeType: resume.type,
      fileBuffer: buffer,
    });

    return NextResponse.json({
      success: true,
      message: 'Submission successfully uploaded to Google Drive!',
      data: {
        id: uploadedResume.submissionId,
        name: name.trim(),
        email: email.trim(),
        fileName: resume.name,
        savedFileName: uploadedResume.savedFileName,
        driveFileId: uploadedResume.driveFileId,
        driveFolderName: uploadedResume.driveFolderName,
      }
    });

  } catch (error: any) {
    console.error('Error handling resume upload API request:', error);

    return NextResponse.json({ 
      error: getSafeUploadErrorMessage(error),
    }, { status: 500 });
  }
}
