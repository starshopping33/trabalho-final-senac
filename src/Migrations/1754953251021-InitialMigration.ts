import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1754953251021 implements MigrationInterface {
    name = 'InitialMigration1754953251021'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "isadmin" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "isadmin"`);
    }

}
