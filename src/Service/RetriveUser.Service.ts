import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { Usuarios } from "../Entities/Usuarios.entities"
import { returnUserSchema } from "../Schemas/User.Schema"

export const RetriveUserService=async(userId:number)=>{
    const userRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)

    const findUser:Usuarios|null = await userRepository.findOne({
        where:{
            id:userId
        }
    })

    const user = returnUserSchema.parse(findUser)
    return user
}