import dotenv from 'dotenv';
import { join } from 'path';
import { DataSource } from 'typeorm';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'secret',
  database: process.env.DB_NAME || 'api_db',
  logging: false,
  synchronize: process.env.NODE_ENV === 'development' || false,
  entities:
    process.env.NODE_ENV === 'production'
      ? ['build/src/entities/**/*.js']
      : [join(__dirname, './src/entities/**/*.ts')],
  subscribers:
    process.env.NODE_ENV === 'production'
      ? ['build/src/subscribers/**/*.js']
      : [join(__dirname, './src/subscribers/**/*.ts')],
  migrations:
    process.env.NODE_ENV === 'production'
      ? ['build/src/migrations/**/*.js']
      : [join(__dirname, './src/migrations/**/*.ts')],
});
