import express from 'express';
import dotenv from 'dotenv';
import apiRouter from './api/index.js';

dotenv.config();

const app = express();

// Routes
app.use('/settings', apiRouter);

// Export for Vercel serverless function
export default app;