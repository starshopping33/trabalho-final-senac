import { NextFunction, Request, Response } from "express";
import { Schema, ZodType, ZodTypeAny } from "zod";

export const ValidateDataMiddleware = 
(Schema:ZodTypeAny)=>(req:Request,res:Response, next:NextFunction)=>{
    const ValidateData = Schema.parse(req.body);

    req.body = ValidateData;

    return next()
}