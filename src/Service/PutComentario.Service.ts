import { Repository } from "typeorm"
import { Comentario } from "../Entities/Comentario.entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"


// export const UpdateComentarioService = async(userId:number,ComentarioData:any)=>{

//     const UpdateComentarioRepository:Repository<Comentario> = AppDataSource.getRepository(Comentario)

//     const Comentario = await UpdateComentarioRepository.findOne({

//         where:{
//         usuarios:{
//             id:userId
//         }
//     },
//         relations:{
//             usuarios:true
//         }
        
//     })
//     if(!Comentario){
//         throw new AppError("Comentario nao encontrado",404)
//     }

//     const ComentarioUpdate = UpdateComentarioRepository.merge(Comentario,ComentarioData)

//     if(ComentarioUpdate.usuarios){
//          delete (ComentarioUpdate.usuarios as any).password
//     }

//     await Comentario
// }
