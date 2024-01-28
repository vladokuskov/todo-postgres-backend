import 'reflect-metadata';

import dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: String(process.env.DB_HOST),
  port: Number(process.env.DB_PORT),
  username: String(process.env.DB_USER),
  password: String(process.env.DB_PASSWORD),
  database: String(process.env.DB_NAME),

  entities: [__dirname + '/entities/*{.js,.ts}'],
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  subscribers: [],

  logging: process.env.NODE_ENV === 'development',
  synchronize: process.env.NODE_ENV === 'development',
});
