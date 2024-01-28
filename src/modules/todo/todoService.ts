import { Todo } from '@db/entities/Todo';
import { queryRunner } from '@db/queryRunner';

import { ServiceResponse } from '@common/models/serviceResponse';
import { logger } from '@src/app';

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
