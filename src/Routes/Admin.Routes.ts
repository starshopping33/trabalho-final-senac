import { Router } from "express";
import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { CreateAdminConfigSchemas, ReturnConfigAdminSchemas, UpdateAdminConfigSchema } from "../Schemas/AdminConfig.Schemas";
import { ConfigAdmController, GetConfigController, PutAdmConfig } from "../Controllers/Admin.Controller";
import { validateTokenmiddleware } from "../Middleware/ValidateToken.Middleware";

export const AdminRoutes:Router = Router()

AdminRoutes.post("",ValidateDataMiddleware(CreateAdminConfigSchemas),validateTokenmiddleware,ConfigAdmController)
AdminRoutes.put("",ValidateDataMiddleware(UpdateAdminConfigSchema),validateTokenmiddleware,PutAdmConfig)
AdminRoutes.get("",GetConfigController)