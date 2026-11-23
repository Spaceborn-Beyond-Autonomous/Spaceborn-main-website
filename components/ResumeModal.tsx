'use client';

import Icon from './Icon';

import { useState, useEffect, useRef, DragEvent, ChangeEvent } from 'react';

type ResumeModalProps = {
  onClose: () => void;
};

export default function ResumeModal({ onClose }: ResumeModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalRef = useRef<HTMLDialogElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const dialog = modalRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const closeDialog = () => {
    modalRef.current?.close();
    onClose();
  };

  const validateFile = (selectedFile: File): boolean => {
    const allowedExtensions = ['.pdf', '.docx', '.doc'];
    const fileName = selectedFile.name.toLowerCase();
    const isAllowed = allowedExtensions.some(ext => fileName.endsWith(ext));

    if (!isAllowed) {
      setError('Only PDF, DOC, or DOCX files are allowed.');
      return false;
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (selectedFile.size > maxSize) {
      setError('File size exceeds the 10MB limit.');
      return false;
    }

    setError(null);
    return true;
  };

  const handleDragOver = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      }
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!file) {
      setError('Please upload your resume.');
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('message', message);
      formData.append('resume', file);

      const response = await fetch('/api/resume', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
      } else {
        setError(result.error || 'Failed to submit resume. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setError('An error occurred during submission. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog
      ref={modalRef}
      data-theme="spaceborn"
      className="du-modal resume-dialog"
      aria-labelledby="resume-modal-title"
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
    >
      <div className="du-modal-box modal-container">
        <button 
          className="du-btn du-btn-square du-btn-sm du-btn-outline modal-close-btn"
          onClick={closeDialog}
          aria-label="Close modal"
          type="button"
        >
          <Icon name="xmark" size={16} />
        </button>

        <div className="modal-body">
          {!isSuccess ? (
            <>
              <h2 id="resume-modal-title" className="modal-title font-ethno">Share Your Resume</h2>
              <p className="modal-subtitle font-mono">Join the Spaceborn crew. Send us your background information and resume to start the conversation.</p>

              {error && (
                <div role="alert" className="du-alert du-alert-error form-error-banner">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    className="du-input form-input"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="du-input form-input"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="du-input form-input"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Cover Note / Message</label>
                  <textarea
                    id="message"
                    className="du-textarea form-input form-textarea"
                    placeholder="Tell us briefly why you want to build the future of autonomy with Spaceborn..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                  <span className="form-label">Resume / CV *</span>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.docx,.doc"
                    style={{ display: 'none' }}
                    disabled={isSubmitting}
                  />
                  
                  {!file ? (
                    <button
                      type="button"
                      className={`file-dropzone ${isDragging ? 'dragover' : ''}`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      disabled={isSubmitting}
                    >
                      <Icon name="arrow-up-from-bracket" size={24} className="file-dropzone-icon" />
                      <span className="file-dropzone-text font-mono">DRAG & DROP YOUR FILE OR CLICK TO BROWSE</span>
                      <span className="file-dropzone-subtext font-mono">SUPPORTED TYPES: PDF, DOCX, DOC (MAX 10MB)</span>
                    </button>
                  ) : (
                    <div className="selected-file-container">
                      <div className="selected-file-info font-mono">
                        <Icon name="file-lines" size={16} />
                        <span>{file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
                      </div>
                      <button 
                        type="button" 
                      className="du-btn du-btn-ghost du-btn-square du-btn-sm selected-file-remove"
                        onClick={handleRemoveFile}
                        disabled={isSubmitting}
                        aria-label="Remove uploaded resume"
                      >
                        <Icon name="trash-can" size={16} />
                      </button>
                    </div>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="du-btn du-btn-primary font-mono"
                  style={{ width: '100%', height: '48px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'TRANSMITTING SUBMISSION...' : 'SUBMIT RESUME'}
                </button>
              </form>
            </>
          ) : (
            <div className="success-state">
              <div className="success-icon-wrapper">
                <Icon name="circle-check" size={64} />
              </div>
              <h2 id="resume-modal-title" className="success-title font-ethno">Transmission Verified</h2>
              <p className="success-message font-mono">
                Thank you, {name}. Your application was successfully processed and saved. Our recruiting team will review your credentials and be in touch soon.
              </p>
              <button 
                type="button" 
                className="du-btn du-btn-primary font-mono"
                style={{ minWidth: '160px' }}
                onClick={closeDialog}
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
