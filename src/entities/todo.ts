import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, unique: true, length: 200 })
  name!: string;

  @Column({ nullable: false, unique: false })
  description?: string;

  @CreateDateColumn({ nullable: false })
  dueDate?: Date;

  @Column({ nullable: false })
  isCompleted?: boolean;

  @CreateDateColumn({ nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt!: Date;
}
