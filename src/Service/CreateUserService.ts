import { Repository } from "typeorm"
import { createUser, returnUserSchema } from "../Schemas/User.Schema"
import { AppDataSource } from "../data-source"
import { Usuarios } from "../Entities/Usuarios.entities"

export const createUserService=async(userData:createUser)=>{
    const userRepository: Repository<Usuarios> = AppDataSource .getRepository(Usuarios)
    
    const findUser: Usuarios | null = await userRepository.findOne({
        where:{
            email:userData.email
        },
        
    })
    
    const createUser = userRepository.create(userData)
    await userRepository.save(createUser)
    const user = returnUserSchema.parse(createUser)
    return user

}