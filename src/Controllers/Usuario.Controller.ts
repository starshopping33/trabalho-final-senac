import { Request, Response } from "express";
import { createUserService } from "../../src/Service/CreateUserService";
import { createUser } from "../Schemas/User.Schema";

export const createUserControler =  async(req:Request,res:Response)=>{
                const userData=req.body
                const user:any = await createUserService(userData)
    return  res.status(201).json(user)
}