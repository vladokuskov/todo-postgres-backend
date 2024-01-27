import { Todo } from '@entities/Todo';
import { User } from '@entities/User';

import { AppDataSource } from '@src/db/data-source';

class QueryRunner {
  public users = AppDataSource.getRepository(User);
  public todos = AppDataSource.getRepository(Todo);
}

const queryRunner = new QueryRunner();

export { queryRunner };
