import { Router } from "express";
import { createUserSchema,  } from "../Schemas/User.Schema";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { createUserControler, GetAllUserController, RetriveUserController } from "../Controllers/Usuario.Controller";
import { userInfo } from "os";
import { validateTokenmiddleware } from "../Middleware/ValidateToken.Middleware";


export const UserRoutes:Router = Router()

UserRoutes.post("",ValidateDataMiddleware(createUserSchema),createUserControler)
UserRoutes.get("",GetAllUserController)
UserRoutes.get("/retrive",validateTokenmiddleware,RetriveUserController)