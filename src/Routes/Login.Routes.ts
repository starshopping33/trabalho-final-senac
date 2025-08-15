import { Router } from "express";
import { createLoginSchema } from "../Schemas/Login.Schema";
import { createLoginController } from "../Controllers/Login.Controller";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";

export const Loginroutes:Router = Router()

Loginroutes.post("", ValidateDataMiddleware(createLoginSchema),createLoginController,ValidateDataMiddleware)
