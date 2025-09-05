import { Repository } from "typeorm"
import { Config } from "../Entities/AdminConfig.entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

export const UpdateAdminConfigService = async(userId:number,configdata:any)=>{

    const updateRepository:Repository<Config> = AppDataSource.getRepository(Config)

    const config = await updateRepository.findOne({
        where:{
            usuarios:{
                id:userId
            }
        }, relations:{
            usuarios:true
        }
    })
    if(!config){
        throw new AppError("Configuraçao não encontrada",404)

    }
    const updatedConfig = updateRepository.merge(config,configdata)

    if(updatedConfig.usuarios){
        delete (updatedConfig.usuarios as any).password
    }
    
    await updateRepository.save(updatedConfig)
   
    return updatedConfig
}