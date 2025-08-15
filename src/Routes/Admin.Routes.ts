import { Router } from "express";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { CreateAdminConfigSchemas, ReturnConfigAdminSchemas } from "../Schemas/AdminConfig.Schemas";
import { ConfigAdmController, PutAdmConfig } from "../Controllers/Admin.Controller";

export const AdminRoutes:Router = Router()

AdminRoutes.post("",ValidateDataMiddleware(CreateAdminConfigSchemas),ConfigAdmController)
AdminRoutes.put("",ValidateDataMiddleware(ReturnConfigAdminSchemas),PutAdmConfig)