import { Repository } from "typeorm"
import { Comentario } from "../Entities/Comentario.entities"
import app from "../app"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

export const DeleteComentarioService = async (ComentarioId:number)=>{

    const DeleteRepository:Repository<Comentario> = AppDataSource.getRepository(Comentario)
    const DeleteComentario = await DeleteRepository.findOneBy({
        id:ComentarioId

    })
    if(!DeleteComentario){
        throw new AppError("Comentario não encontrado",404)
    }
    await DeleteRepository.remove(DeleteComentario)

}
