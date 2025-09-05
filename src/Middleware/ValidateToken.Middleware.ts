import { NextFunction, Request, Response } from "express";
import  Jwt  from "jsonwebtoken";
import { AppError } from "../error";



export const validateTokenmiddleware = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
    let token = req.headers.authorization
    
    if(!token){
        throw new AppError("token invalido",401)
}
token = token.split(" ")[1]

Jwt.verify(token,process.env.SECRET_KEY!,async(error,decoded:any)=>{
    if(error){
        // throw new AppError(error.message,401)
        
        return res.status(401).json(error?.message)
    }

     req.User = {
            id: decoded.id,
           email: decoded.email,
           isadmin:decoded.isadmin
        }
        console.log(decoded,"decoded")
        
        return next()
})


}