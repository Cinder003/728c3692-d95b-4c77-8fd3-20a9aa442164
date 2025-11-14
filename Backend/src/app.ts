import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.routes';
import logger from './utils/logger';

dotenv.config();

const app: Express = express();

// Middleware
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'),
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

app.use('/api/todos', todoRoutes);

// Error handling middleware (optional, for more robust error handling)
app.use((err: Error, req: Request, res: Response, next: Function) => {
  logger.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;