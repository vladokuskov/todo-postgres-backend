import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, unique: true, type: 'text' })
  title!: string;

  @Column({ nullable: false, unique: false, type: 'text' })
  description?: string;

  @Column({ nullable: true, type: 'date', default: null })
  dueDate?: Date | null;

  @Column({ nullable: false, type: 'boolean', default: false })
  isCompleted?: boolean;

  @Column({ nullable: false, type: 'boolean', default: false })
  isDeleted?: boolean;

  @CreateDateColumn({ nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt!: Date;
}
