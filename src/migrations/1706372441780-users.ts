import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1706372441780 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE "users" (
            "id" SERIAL NOT NULL,
            "name" varchar(500) NOT NULL,
            "email" text NOT NULL,
            "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
            "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
           
            CONSTRAINT "PK_cace4a159ff9f2512dd42373761" PRIMARY KEY ("id")
        )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE "todos";
    `);
  }
}
