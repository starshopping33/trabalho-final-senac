import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1755131746056 implements MigrationInterface {
    name = 'InitialMigration1755131746056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "config" ADD "usuariosId" integer`);
        await queryRunner.query(`ALTER TABLE "config" ADD CONSTRAINT "FK_9de58d8e802e9a975322cbc15ee" FOREIGN KEY ("usuariosId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "config" DROP CONSTRAINT "FK_9de58d8e802e9a975322cbc15ee"`);
        await queryRunner.query(`ALTER TABLE "config" DROP COLUMN "usuariosId"`);
    }

}
