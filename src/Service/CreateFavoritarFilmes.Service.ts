import { Request, Response } from "express";
import { iCreateFavoritar, iReturnFavoritar, ReturnFavoritarFilmeSchema } from "../Schemas/FavoritarFilmes.Schemas";
import { Repository } from "typeorm";
import { Favoritos } from "../Entities/Favoritos.entities";
import { AppDataSource } from "../data-source";

export const FavoritarFilmesService = async(favData:iCreateFavoritar):Promise<iReturnFavoritar>=>{
    const favoritosRepository:Repository<Favoritos> =AppDataSource.getRepository(Favoritos)
      const CreateFavorito = favoritosRepository.create(favData)
      await favoritosRepository.save(CreateFavorito)

    const favorito = ReturnFavoritarFilmeSchema.parse(CreateFavorito)

    return favorito

    
}