import { Repository } from "typeorm"
import { Comentario } from "../Entities/Comentario.entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"


 export const UpdateComentarioService = async(userId:number,ComentarioData:any,id:number)=>{

    const UpdateComentarioRepository:Repository<Comentario> = AppDataSource.getRepository(Comentario)
    console.log( userId,"userID",id)
    const ComentarioPut = await UpdateComentarioRepository.findOne({

        where:{
            usuarios:{
                id:userId
            },
            id:id
    },
        relations:{
           usuarios:true
        }
        
    })
    console.log(ComentarioPut,"comentario?")
    if(!ComentarioPut){
        throw new AppError("Comentario nao encontrado",404)
    }

    const ComentarioUpdate = UpdateComentarioRepository.merge(ComentarioPut,ComentarioData)

    if(ComentarioUpdate.usuarios){
         delete (ComentarioUpdate.usuarios as any).password
    }

    await UpdateComentarioRepository.save(ComentarioUpdate)

    return ComentarioUpdate
}
