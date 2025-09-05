import { Request, Response } from "express";
import { createUserService } from "../../src/Service/CreateUserService";

import { getalluserservice } from "../Service/GetAllUser.Service";
import { RetriveUserService } from "../Service/RetriveUser.Service";



export const createUserControler =  async(req:Request,res:Response)=>{
                const userData=req.body
                const user:any = await createUserService(userData)
    return  res.status(201).json(user)

  }

    export const GetAllUserController = async(req:Request,res:Response)=>{

        const User = await getalluserservice()

        return res.status(200).json(User)
    }

    export const RetriveUserController =async(req:Request, res:Response):Promise<Response>=>{
        const userId= parseInt(req.User.id)
        const User = await RetriveUserService(userId)

        return res.status(200).json(User)
    }