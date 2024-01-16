export type Todo = {
  id: string;
  title: string;
  description?: string;
  dueDate?: Date;
  isCompleted?: boolean;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
};
