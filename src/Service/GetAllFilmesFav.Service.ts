import { Repository } from "typeorm"
import { ireturnfilmesfav, ReturnAllFavoritosSchemas } from "../Schemas/FavoritarFilmes.Schemas"
import { Favoritos } from "../Entities/Favoritos.entities"
import { AppDataSource } from "../data-source"

export const GetAllFilmesFavService = async(userId:number):Promise<ireturnfilmesfav>=>{
        const FilmesRepository:Repository<Favoritos> = AppDataSource.getRepository(Favoritos)

        const FindFavoritos = await FilmesRepository.find({
            where:{
                usuario_id:userId
            }
        })
        const Filmes = ReturnAllFavoritosSchemas.parse(FindFavoritos)

        return Filmes
}