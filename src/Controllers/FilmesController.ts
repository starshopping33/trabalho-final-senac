import e, { Request, Response } from "express";

import { FavoritarFilmesService } from "../Service/CreateFavoritarFilmes.Service";
import { iCreateFavoritar } from "../Schemas/FavoritarFilmes.Schemas";
import { getFilmesService } from "../Service/GetFilmes.service";
import { GetAllFilmesFavService } from "../Service/GetAllFilmesFav.Service";
import { DeleteFilmeFavService } from "../Service/DeleteFilmeFav.Service";


export const getFilmesController= async(req:Request,res:Response):Promise<Response>=>{
        const page = req.query.page as string
        const filmes = await getFilmesService(page)
        return res.status(200).json(filmes)
}

export const FavoritarFilmesController = async(req:Request,res:Response)=>{

        const favData:iCreateFavoritar = req.body
      
        const filme = await FavoritarFilmesService(favData)
        return res.status(200).json(filme)
        
}

export const GetFilmesFavController = async (req:Request,res:Response):Promise<Response>=>{
        const userId= req.User?.id
        const id = Number(userId)
        const FavFilmes = await GetAllFilmesFavService(id)
        return res.status(200).json(FavFilmes)
}

export const DeleteFilmeFavController = async (req:Request,res:Response):Promise<Response>=>{
        const favoritoID = parseInt(req.params.id)
        
        await DeleteFilmeFavService(favoritoID)
        return res.status(204).send()
}