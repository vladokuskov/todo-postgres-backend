import { AppDataSource } from '@src/data-source';
import { Todo } from '@src/entities/Todo';

export class TodoRepository {
  static todosRepo = AppDataSource.getRepository(Todo);
}

export const todosRepo = TodoRepository.todosRepo;
