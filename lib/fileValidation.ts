import path from 'path';

export interface FileValidationResult {
  isValid: boolean;
  detectedMime: string;
  detectedExtension: string;
}

export function validateFileBuffer(buffer: Buffer): FileValidationResult {
  if (!buffer || buffer.length === 0) {
    return { isValid: false, detectedMime: '', detectedExtension: '' };
  }

  // 1. PDF Check (%PDF signature: 25 50 44 46)
  if (
    buffer.length >= 4 &&
    buffer[0] === 0x25 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x44 &&
    buffer[3] === 0x46
  ) {
    return { isValid: true, detectedMime: 'application/pdf', detectedExtension: '.pdf' };
  }

  // 2. DOCX Check (PK\x03\x04 signature: 50 4B 03 04)
  if (
    buffer.length >= 4 &&
    buffer[0] === 0x50 &&
    buffer[1] === 0x4B &&
    buffer[2] === 0x03 &&
    buffer[3] === 0x04
  ) {
    return {
      isValid: true,
      detectedMime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      detectedExtension: '.docx',
    };
  }

  // 3. DOC Check (Composite Document File V2: D0 CF 11 E0 A1 B1 1A E1)
  if (
    buffer.length >= 8 &&
    buffer[0] === 0xD0 &&
    buffer[1] === 0xCF &&
    buffer[2] === 0x11 &&
    buffer[3] === 0xE0 &&
    buffer[4] === 0xA1 &&
    buffer[5] === 0xB1 &&
    buffer[6] === 0x1A &&
    buffer[7] === 0xE1
  ) {
    return { isValid: true, detectedMime: 'application/msword', detectedExtension: '.doc' };
  }

  return { isValid: false, detectedMime: '', detectedExtension: '' };
}

export function sanitizeFilename(filename: string): string {
  // Remove null bytes
  let cleanName = filename.replace(/\x00/g, '');

  // Remove directory traversal sequences (../ or ..\)
  cleanName = cleanName.replace(/\.\.+\//g, '').replace(/\.\.+\\/g, '');

  // Keep only safe characters: alphanumeric, spaces, dots, dashes, underscores
  cleanName = cleanName.replace(/[^a-zA-Z0-9.\-_ ]/g, '_');

  // Collapse multiple spaces or dots
  cleanName = cleanName.replace(/\s+/g, ' ').replace(/\.+/g, '.');

  // Strip leading/trailing whitespaces or dots
  cleanName = cleanName.trim();

  // Extract base extension and basename
  const ext = path.extname(cleanName).toLowerCase();
  const base = path.basename(cleanName, ext);

  // Re-assemble and ensure it's not empty, defaulting to "resume" if it is
  const finalBase = base.trim() || 'resume';
  return `${finalBase}${ext}`;
}
