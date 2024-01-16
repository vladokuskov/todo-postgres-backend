import { MigrationInterface, QueryRunner } from 'typeorm';

export class Todos1705432426703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "todos" (
            "id" SERIAL NOT NULL,
            "title" varchar(500) NOT NULL,
            "description" text NOT NULL,
            "dueDate" TIMESTAMP WITH TIME ZONE,
            "isCompleted" boolean NOT NULL,
            "isDeleted" boolean NOT NULL,
            "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
           
            CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
        )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "todos";
    `);
  }
}
