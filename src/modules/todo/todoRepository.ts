import { Todo } from '@modules/todo/todoModel';

export interface ITodoRepository {
  findAllAsync(): Promise<Todo[]>;
}

const todos: Todo[] = [
  {
    id: '1',
    name: 'Complete Assignment',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '2',
    name: 'Read Book',
    description: "Finish the last chapter of 'The Great Gatsby.'",
    dueDate: new Date('2024-01-31'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    name: 'Exercise',
    isCompleted: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class TodoRepository implements ITodoRepository {
  public async findAllAsync() {
    return todos || [];
  }
}
