import { Request, Response } from 'express';

export function getHealth(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    message: 'API is running',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
  });
}
