import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import healthRoutes from './routes/health.routes.js';
import projectsRoutes from './routes/projects.routes.js';
import contactRoutes from './routes/contact.routes.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || 'http://localhost:5173';

// 1. CORS Configuration
app.use(
  cors({
    origin: FRONTEND_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// 2. Body Parser Middleware
app.use(express.json());

// 3. API Routes
app.use('/api/health', healthRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/contact', contactRoutes);

// 4. Fallback 404 & Centralized Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// 5. Server Listener
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`🚀 DevSpace 3D Backend running at http://localhost:${PORT}`);
    console.log(`📡 Allowed Frontend Origin: ${FRONTEND_ORIGIN}`);
    console.log(`🩺 Health check endpoint: http://localhost:${PORT}/api/health`);
  });
}

export default app;
