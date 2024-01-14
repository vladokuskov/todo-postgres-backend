import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import helmet from 'helmet';
import path from 'path';
import { pino } from 'pino';

import { compressFilter, errorHandler, rateLimiter, requestLogger } from '@common/middleware';
import { getCorsOrigin } from '@common/utils/envConfig';
import { router } from '@src/api';
import { AppDataSource } from '@src/data-source';

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

const logger = pino({
  name: 'server start',
});

const app: Express = express();
const corsOrigin: string = getCorsOrigin();

AppDataSource.initialize()
  .then(() => {
    logger.info(`Data Source has been initialized!`);
  })
  .catch((err) => {
    logger.error('Error during Data Source initialization:', err);
  });

// Middlewares
app.use(cors({ origin: [corsOrigin], credentials: true }));
app.use(helmet());
app.use(compression({ filter: compressFilter }));
app.use(rateLimiter);

// Request logging
app.use(requestLogger());

// Routes
app.use(router);

// Error handlers
app.use(errorHandler());

export { app, logger };
