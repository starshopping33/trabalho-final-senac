import { Request, Response } from "express";
import { icreatecomentario } from "../Schemas/Comentario.Schemas";
import { ComentarioService } from "../Service/CreateComentario.Service";
import { GetComentarioService } from "../Service/GetComentario.Service";
import { AppError } from "../error";
import { UpdateComentarioService } from "../Service/PutComentario.Service";
import { DeleteComentarioService } from "../Service/DeleteComentario.Service";

export const CreateComentarioController = async(req:Request,res:Response):Promise<Response>=>{
       if(!req.User.isadmin){
              throw new AppError("Permissão insuficiente",403)
       }
       const userId:number = parseInt(req.User.id)
       const ComentarioData:icreatecomentario = req.body
       const  Comentario = await   ComentarioService(ComentarioData,userId)
       return res.status(201).json(Comentario)

}

export const GetComentarioController = async (req:Request,res:Response):Promise<Response>=>{
        
       const Getcomentario = await GetComentarioService()
        return res.status(200).json(Getcomentario)
}

export const PutComentarioController = async (req: Request, res:Response):Promise<Response>=>{

       const userId = parseInt(req.User.id)
       const ComentarioData = req.body
       const id = parseInt(req.params.id)

       const ComentarioUpdate = await UpdateComentarioService(userId,ComentarioData, id)

              return res.status(200).json(ComentarioUpdate)

}

export const DeleteComentarioController = async (req:Request, res:Response):Promise<Response>=>{

              const ComentarioId = parseInt(req.params.id)

              await DeleteComentarioService(ComentarioId)
             
              return res.status(204).send()
}
