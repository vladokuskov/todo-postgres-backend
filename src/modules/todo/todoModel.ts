export type Todo = {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  isCompleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
};
