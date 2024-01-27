import { Todo } from '@entities/Todo';

import { ServiceResponse } from '@common/models/serviceResponse';
import { logger } from '@src/app';
import { queryRunner } from '@src/shared/queryRunner';

export interface ITodoService {
  findAll(): Promise<ServiceResponse<Todo[] | null>>;
}

export class TodoService implements ITodoService {
  public async findAll() {
    try {
      const todos = await queryRunner.todos.find();

      return new ServiceResponse<Todo[]>(true, 'Todos found.', todos);
    } catch (err) {
      logger.error(err);
      return new ServiceResponse<Todo[]>(false, 'Error finding all todos.', [], err);
    }
  }
}
