import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @Column({ type: 'integer', primary: true, generated: 'uuid' })
  id!: string;

  @Column({ nullable: false, unique: true, type: 'text' })
  title!: string;

  @Column({ nullable: false, unique: false, type: 'text' })
  description?: string;

  @Column({ nullable: false, type: 'date' })
  dueDate?: Date;

  @Column({ nullable: false, type: 'boolean', default: false })
  isCompleted?: boolean;

  @Column({ nullable: false, type: 'boolean', default: false })
  isDeleted?: boolean;

  @CreateDateColumn({ nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt!: Date;
}
