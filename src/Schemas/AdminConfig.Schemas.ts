import z, { number, string } from "zod";

export const  CreateAdminConfigSchemas = z.object({
    cor:string(),
    logo:string(),
    titulo:string()
})

export const ReturnConfigAdminSchemas = CreateAdminConfigSchemas.extend({
    id:number()
})



export type icreateconfig = z.infer <typeof CreateAdminConfigSchemas >
export type ireturnconfig = z.infer <typeof ReturnConfigAdminSchemas>

