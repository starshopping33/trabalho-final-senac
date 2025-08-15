import z from "zod";

export const createUserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    isadmin:z.boolean().default(false)
})

export const returnUserSchema = createUserSchema.extend({
    id:z.number()
}).omit({password:true})

export const returnalluserschemas = returnUserSchema.array()

export type icreateUser = z.infer<typeof createUserSchema>
export type iReturnUserSchema = z.infer<typeof returnUserSchema>