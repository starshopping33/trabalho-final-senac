import { Request, Response } from "express";
import { createLoginService } from "../Service/CreateLogin.Service";
import { iCreateLogin } from "../Schemas/Login.Schema";



export const createLoginController=async(req:Request,res:Response):Promise<Response>=>{

    const loginData:iCreateLogin = req.body
    const token: string = await createLoginService(loginData)

    return res.status(200).json({token:token})

}