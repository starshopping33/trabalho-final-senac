import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1756773937221 implements MigrationInterface {
    name = 'InitialMigration1756773937221'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Favoritos" ADD "poster_path" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Favoritos" DROP COLUMN "poster_path"`);
    }

}
