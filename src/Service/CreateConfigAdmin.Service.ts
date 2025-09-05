import { Repository } from "typeorm";
import { icreateconfig, ireturnconfig, ReturnConfigAdminSchemas } from "../Schemas/AdminConfig.Schemas";
import { Config } from "../Entities/AdminConfig.entities";
import { AppDataSource } from "../data-source";

export const ConfigAdminService = async (admData:icreateconfig,userId:number):Promise<ireturnconfig>=>{

    const configRepository:Repository<Config> =  AppDataSource.getRepository(Config)
    const createconfig = configRepository.create({...admData,usuarios:{
        id:userId
    }})
    await configRepository.save(createconfig)

    const config = ReturnConfigAdminSchemas.parse(createconfig)

    return config
}