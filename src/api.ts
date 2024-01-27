import express, { Router } from 'express';

import { authRouter } from '@modules/auth/authRoutes';
import { healthCheckRouter } from '@modules/healthCheck/healthCheckRoutes';
import { todosRouter } from '@modules/todo/todoRoutes';

const router: Router = express.Router();

// public
router.use('/health-check', healthCheckRouter);
router.use('/auth', authRouter);

// protected
router.use('/todos', todosRouter);

export { router };
