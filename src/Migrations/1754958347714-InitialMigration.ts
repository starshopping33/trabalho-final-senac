import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754958347714 implements MigrationInterface {
    name = 'InitialMigration1754958347714'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Favoritos" ("id" SERIAL NOT NULL, "usuario_id" integer NOT NULL, "filme_id" integer NOT NULL, "titulo" character varying NOT NULL, CONSTRAINT "PK_0c992653ba3a4ea10d29c81a17a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Favoritos"`);
    }

}
