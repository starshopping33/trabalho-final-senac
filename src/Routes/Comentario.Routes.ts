import { Router } from "express";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { CreateComentarioSchemas } from "../Schemas/Comentario.Schemas";
import { validateTokenmiddleware } from "../Middleware/ValidateToken.Middleware";
import { CreateComentarioController, GetComentarioController } from "../Controllers/Comentario.Controller";

export const ComentarioRoutes:Router = Router()

ComentarioRoutes.post("",ValidateDataMiddleware(CreateComentarioSchemas),validateTokenmiddleware,CreateComentarioController)
ComentarioRoutes.get("",GetComentarioController)