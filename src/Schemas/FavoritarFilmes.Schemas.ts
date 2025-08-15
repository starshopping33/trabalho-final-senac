import z, { number, string } from "zod";

export const CreateFavoritarFIlmesSchema = z.object({
usuario_id:number(),
titulo:string(),
filme_id:number()

})

export const ReturnFavoritarFilmeSchema = CreateFavoritarFIlmesSchema.extend({
    id:z.number()
})

export type iCreateFavoritar = z.infer<typeof CreateFavoritarFIlmesSchema>
export type iReturnFavoritar = z.infer<typeof ReturnFavoritarFilmeSchema>