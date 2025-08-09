import z from "zod";

export const createUserSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export const returnUserSchema = createUserSchema.extend({
    id:z.number()
}).omit({password:true})

export type createUser = z.infer<typeof createUserSchema>