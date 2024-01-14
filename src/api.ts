import express, { Router } from 'express';

import { healthCheckRouter } from '@modules/healthCheck/healthCheckRoutes';
import { todosRouter } from '@modules/todo/todoRoutes';

const router: Router = express.Router();

router.use('/health-check', healthCheckRouter);
router.use('/todos', todosRouter);

export { router };
