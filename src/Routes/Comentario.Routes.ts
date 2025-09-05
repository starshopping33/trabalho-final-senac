import { Router } from "express";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { CreateComentarioSchemas, UpdateCOmentarioSchemas } from "../Schemas/Comentario.Schemas";
import { validateTokenmiddleware } from "../Middleware/ValidateToken.Middleware";
import { CreateComentarioController, DeleteComentarioController, GetComentarioController, PutComentarioController } from "../Controllers/Comentario.Controller";

export const ComentarioRoutes:Router = Router()

ComentarioRoutes.post("",ValidateDataMiddleware(CreateComentarioSchemas),validateTokenmiddleware,CreateComentarioController)
ComentarioRoutes.get("",GetComentarioController)
ComentarioRoutes.put("/:id",ValidateDataMiddleware(UpdateCOmentarioSchemas),validateTokenmiddleware,PutComentarioController)
ComentarioRoutes.delete("/:id",DeleteComentarioController)