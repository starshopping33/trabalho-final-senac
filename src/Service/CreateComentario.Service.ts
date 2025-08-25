import { Repository } from "typeorm";
import { icreatecomentario, ReturnComentarioSchemas } from "../Schemas/Comentario.Schemas";
import { Comentario } from "../Entities/Comentario.entities";
import { AppDataSource } from "../data-source";

export const ComentarioService = async(ComentarioData:icreatecomentario):Promise<icreatecomentario>=>{

    const ComentarioRepository:Repository<Comentario> = AppDataSource.getRepository(Comentario)

    const CreateComentario = ComentarioRepository.create(ComentarioData)
    await ComentarioRepository.save(CreateComentario)

    const comentario = ReturnComentarioSchemas.parse(CreateComentario)

    return comentario
}