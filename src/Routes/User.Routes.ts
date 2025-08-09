import { Router } from "express";
import { createUserSchema } from "../Schemas/User.Schema";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { createUserControler } from "Controllers/Usuario.Controller";

export const UserRoutes:Router = Router()

UserRoutes.post("",ValidateDataMiddleware(createUserSchema),createUserControler)