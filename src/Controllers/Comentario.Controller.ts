import { Request, Response } from "express";
import { icreatecomentario } from "../Schemas/Comentario.Schemas";
import { ComentarioService } from "../Service/CreateComentario.Service";
import { GetComentarioService } from "../Service/GetComentario.Service";
import { AppError } from "../error";

export const CreateComentarioController = async(req:Request,res:Response):Promise<Response>=>{
       if(!req.User.isadmin){
              throw new AppError("Permissão insuficiente",403)
       }
       const ComentarioData:icreatecomentario = req.body
       const  Comentario = await   ComentarioService(ComentarioData)
       return res.status(201).json(Comentario)

}

export const GetComentarioController = async (req:Request,res:Response):Promise<Response>=>{
        
       const Getcomentario = await GetComentarioService()
        return res.status(200).json(Getcomentario)
}

// export const PutComentarioController = async (req: Request, res:Response):Promise<Response>=>{

//        const userId = parseInt(req.User.id)
//        const ComentarioData = req.body

//        const ComentarioUpdate = await
// }