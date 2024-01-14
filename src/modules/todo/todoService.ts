import { ServiceResponse } from '@common/models/serviceResponse';
import { Todo } from '@modules/todo/todoModel';
import { ITodoRepository } from '@modules/todo/todoRepository';
import { logger } from '@src/app';

export interface ITodoService {
  findAll(): Promise<ServiceResponse<Todo[] | null>>;
}

export class TodoService implements ITodoService {
  private readonly _repository: ITodoRepository;

  constructor(repository: ITodoRepository) {
    this._repository = repository;
  }

  public async findAll() {
    try {
      const todos = await this._repository.findAllAsync();
      return new ServiceResponse<Todo[]>(true, 'Todos found.', todos);
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<Todo[]>(false, 'Error finding all todos.', [], err);
    }
  }
}
