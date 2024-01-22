import { ServiceResponse } from '@common/models/serviceResponse';
import { Todo } from '@modules/todo/todoModel';
import { todosRepo } from '@modules/todo/todoRepository';
import { logger } from '@src/app';

export interface ITodoService {
  findAll(): Promise<ServiceResponse<Todo[] | null>>;
}

export class TodoService implements ITodoService {
  public async findAll() {
    try {
      const todos = await todosRepo.find();
      return new ServiceResponse<Todo[]>(true, 'Todos found.', todos);
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<Todo[]>(false, 'Error finding all todos.', [], err);
    }
  }
}
