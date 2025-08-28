import { Repository } from "typeorm";
import { Usuarios } from "../Entities/Usuarios.entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import jwt from "jsonwebtoken"
import {compare} from "bcryptjs"
import { iCreateLogin, iRetunrLogin, returnLoginSchema } from "../Schemas/Login.Schema";
export const createLoginService=async(loginData:iCreateLogin):Promise<iRetunrLogin>=>{

    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            email: loginData.email
        }
    })
    if(!findUser){
        throw new AppError("Credenciais inválidas",401)
    }
    const descrypt = await compare(loginData.password,findUser.password)
   
   if(!descrypt){
    throw new AppError("Credenciais inválidas",401)
   }
   
        const token = jwt.sign({
            id:findUser.id,
            email:findUser.email,
            isadmin:findUser.isadmin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn:"24h",
            subject:String(findUser.id)
        }
    )

    const user = returnLoginSchema.parse({
         token,
         usuario:findUser
    })
        return user
    
}