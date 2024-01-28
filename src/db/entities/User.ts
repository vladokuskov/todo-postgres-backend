import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ nullable: false, unique: true, type: 'text' })
  email!: string;

  @Column({ nullable: false, unique: false, type: 'text' })
  password!: string;

  @Column({ nullable: false, unique: false, type: 'text', default: 'User' })
  username?: string;

  @CreateDateColumn({ nullable: false })
  createdAt!: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt!: Date;
}
