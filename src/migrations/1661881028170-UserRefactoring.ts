import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserRefactoring1661881028170 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "name" TO "username"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "username" TO "name"`,
    );
  }
}
