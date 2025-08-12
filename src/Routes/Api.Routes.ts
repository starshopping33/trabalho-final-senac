import { Router } from "express";

import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { CreateFavoritarFIlmesSchema } from "../Schemas/FavoritarFilmes.Schemas";
import { FavoritarFilmesController, getFilmesController } from "../Controllers/filmescontroller";

export const FilmesRoutes:Router = Router()

FilmesRoutes.get("",getFilmesController)

FilmesRoutes.post("/favoritar",ValidateDataMiddleware(CreateFavoritarFIlmesSchema),FavoritarFilmesController)