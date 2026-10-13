import { Request, Response } from 'express';

interface ContactRequestBody {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function handleContactSubmit(req: Request<{}, {}, ContactRequestBody>, res: Response) {
  const { name, email, message } = req.body;
  const errors: string[] = [];

  // Validation
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters.');
  }

  if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
    errors.push('A valid email address is required.');
  }

  if (!message || typeof message !== 'string' || message.trim().length < 5) {
    errors.push('Message is required and must be at least 5 characters.');
  }

  if (errors.length > 0) {
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
    return;
  }

  // Return validated response without claiming false persistence
  res.status(200).json({
    success: true,
    message: 'Message validated successfully. (Note: Database persistence will be connected in Phase 2/3).',
    data: {
      name: name!.trim(),
      email: email!.trim(),
      receivedAt: new Date().toISOString(),
    },
  });
}
