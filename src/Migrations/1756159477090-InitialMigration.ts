import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1756159477090 implements MigrationInterface {
    name = 'InitialMigration1756159477090'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comentario" ("id" SERIAL NOT NULL, "conteudo" character varying NOT NULL, "nome_filme" character varying NOT NULL, "imagem" character varying NOT NULL, CONSTRAINT "PK_c9014211e5fbf491b9e3543bb19" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "comentario"`);
    }

}
