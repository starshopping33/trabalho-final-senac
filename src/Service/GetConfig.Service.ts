import { Repository } from "typeorm";
import { iGetConfig, ReturnConfigGetSchemas } from "../Schemas/AdminConfig.Schemas";
import { Config } from "../Entities/AdminConfig.entities";
import { AppDataSource } from "../data-source";

export const GetConfigService = async():Promise<iGetConfig>=>{

        const ConfigRepository:Repository<Config> = AppDataSource.getRepository(Config)

        const FindConfig = await ConfigRepository.find()

        const config = ReturnConfigGetSchemas.parse(FindConfig)

        return config

}