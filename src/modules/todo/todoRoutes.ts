import express, { Router } from 'express';

import { TodoController } from '@modules/todo/todoController';
import { ITodoService, TodoService } from '@modules/todo/todoService';

const router: Router = express.Router();
const todoService: ITodoService = new TodoService();
const controller: TodoController = new TodoController(todoService);

router.get('/', controller.getAllTodos);

export const todosRouter: Router = router;
