import { Repository } from "typeorm"
import { Config } from "../Entities/AdminConfig.entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

export const UpdateAdminConfigService = async(userId:number,configdata:any)=>{

    const updateRepository:Repository<Config> = AppDataSource.getRepository(Config)

    const config = await updateRepository.findOneBy({

    id:userId
    })
    if(!config){
        throw new AppError("Configuraçao não encontrada",404)

    }
    const updatedConfig = updateRepository.merge(config,configdata)
    
    await updateRepository.save(updatedConfig)

}