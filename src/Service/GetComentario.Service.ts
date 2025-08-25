import { Repository } from "typeorm"
import { Comentario } from "../Entities/Comentario.entities"
import { AppDataSource } from "../data-source"
import { GetComentariosSchemas, igetcomentario } from "../Schemas/Comentario.Schemas"

export const GetComentarioService = async ():Promise<igetcomentario>=>{

    const ComentarioRepository:Repository<Comentario> = AppDataSource.getRepository(Comentario)  
    const FindComentario = await ComentarioRepository.find()
    const GetComentario = GetComentariosSchemas.parse(FindComentario)

    return GetComentario
    

}