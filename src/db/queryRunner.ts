import { AppDataSource } from '@db/dataSource';
import { Todo } from '@db/entities/Todo';
import { User } from '@db/entities/User';

class QueryRunner {
  public users = AppDataSource.getRepository(User);
  public todos = AppDataSource.getRepository(Todo);
}

const queryRunner = new QueryRunner();

export { queryRunner };
