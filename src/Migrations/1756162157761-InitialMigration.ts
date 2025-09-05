import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1756162157761 implements MigrationInterface {
    name = 'InitialMigration1756162157761'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comentario" ADD "usuariosId" integer`);
        await queryRunner.query(`ALTER TABLE "comentario" ADD CONSTRAINT "FK_d682346366e7be76ff1729626d3" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comentario" DROP CONSTRAINT "FK_d682346366e7be76ff1729626d3"`);
        await queryRunner.query(`ALTER TABLE "comentario" DROP COLUMN "usuariosId"`);
    }

}
