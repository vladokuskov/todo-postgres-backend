import express, { Router } from 'express';

import { TodoController } from '@modules/todo/todoController';
import { ITodoRepository, TodoRepository } from '@modules/todo/todoRepository';
import { ITodoService, TodoService } from '@modules/todo/todoService';

const router: Router = express.Router();
const todoRepository: ITodoRepository = new TodoRepository();
const todoService: ITodoService = new TodoService(todoRepository);
const controller: TodoController = new TodoController(todoService);

router.get('/', controller.getAllTodos);

export const todosRouter: Router = router;
