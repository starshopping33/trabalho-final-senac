import { Request, Response } from "express";
import { getFilmesService } from "../Service/getfilmes.service";

export const getFilmesController= async(req:Request,res:Response):Promise<Response>=>{


        const filmes = await getFilmesService()
        //return res.status(500).json({message:"erro ao buscar filme"})

        return res.status(200).json(filmes)

}