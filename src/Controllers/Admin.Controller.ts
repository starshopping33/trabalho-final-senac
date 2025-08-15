import { Request, Response } from "express";
import { CreateAdminConfigSchemas, icreateconfig } from "../Schemas/AdminConfig.Schemas";
import { ConfigAdminService } from "../Service/CreateConfigAdmin.Service";
import { UpdateAdminConfigService } from "../Service/PutConfigAdmin.Service";

export const ConfigAdmController =async (req:Request,res:Response):Promise<Response>=>{

    const admData:icreateconfig = req.body

    const config = await ConfigAdminService (admData)

    return res.status(200).json(config)
}

export const PutAdmConfig = async(req:Request,res:Response):Promise<Response>=>{

    const userId = parseInt(req.User.id)
    const configdata = req.body

    const updatedConfig = await UpdateAdminConfigService(userId,configdata)

    return res.status(200).json(updatedConfig)

}