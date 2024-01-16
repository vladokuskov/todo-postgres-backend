import { AppDataSource } from '@src/data-source';
import { Todo } from '@src/entities/Todo';

export interface ITodoRepository {
  findAllAsync(): Promise<Todo[]>;
}

export class TodoRepository implements ITodoRepository {
  todosRepo = AppDataSource.getRepository(Todo);

  public async findAllAsync() {
    return await this.todosRepo.find();
  }
}
