import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755124194226 implements MigrationInterface {
    name = 'InitialMigration1755124194226'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "config" ("id" SERIAL NOT NULL, "cor" character varying NOT NULL, "titulo" character varying NOT NULL, "logo" character varying NOT NULL, CONSTRAINT "PK_d0ee79a681413d50b0a4f98cf7b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "config"`);
    }

}
