import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Usuarios } from "../Entities/Usuarios.entities";
import { AppDataSource } from "../data-source";
import { returnalluserschemas, ReturnUserSchema } from "../Schemas/User.Schema";

export const getalluserservice = async():Promise<ReturnUserSchema[]>=>{

    const UserRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
    
    const FindUser  = await UserRepository.find()
    const User = returnalluserschemas.parse(FindUser)

    return User
}