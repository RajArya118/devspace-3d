import { Request, Response } from 'express';
import { sampleProjects } from '../data/projects.data.js';

export function getProjects(req: Request, res: Response) {
  res.status(200).json({
    success: true,
    count: sampleProjects.length,
    data: sampleProjects,
  });
}
