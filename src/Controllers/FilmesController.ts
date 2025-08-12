import { Request, Response } from "express";

import { FavoritarFilmesService } from "../Service/CreateFavoritarFilmes.Service";
import { iCreateFavoritar } from "../Schemas/FavoritarFilmes.Schemas";
import { getFilmesService } from "../Service/getfilmes.service";

export const getFilmesController= async(req:Request,res:Response):Promise<Response>=>{

        const filmes = await getFilmesService()
        return res.status(200).json(filmes)
}

export const FavoritarFilmesController = async(req:Request,res:Response)=>{

        const favData:iCreateFavoritar = req.body
      
        const filme = await FavoritarFilmesService(favData)
        return res.status(200).json(filme)
        
}