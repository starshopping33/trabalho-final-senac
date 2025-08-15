
import { Repository } from "typeorm";
import { Usuarios } from "../Entities/Usuarios.entities";
import { AppDataSource } from "../data-source";
import { iReturnUserSchema, returnalluserschemas,  } from "../Schemas/User.Schema";

export const getalluserservice = async():Promise<iReturnUserSchema[]>=>{

    const UserRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
    
    const FindUser  = await UserRepository.find()
    const User = returnalluserschemas.parse(FindUser)

    return User
}