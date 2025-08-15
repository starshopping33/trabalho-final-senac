import { Router } from "express";

import { ValidateDataMiddleware } from "../Middleware/ValidateData.Middleware";
import { CreateFavoritarFIlmesSchema } from "../Schemas/FavoritarFilmes.Schemas";
import {  DeleteFilmeFavController, FavoritarFilmesController, getFilmesController, GetFilmesFavController } from "../Controllers/FilmesController";
import { validateTokenmiddleware } from "../Middleware/ValidateToken.Middleware";



export const FilmesRoutes:Router = Router()

FilmesRoutes.get("",getFilmesController)

FilmesRoutes.post("/favoritar",ValidateDataMiddleware(CreateFavoritarFIlmesSchema),FavoritarFilmesController)

FilmesRoutes.get("/favoritar",validateTokenmiddleware,GetFilmesFavController)

FilmesRoutes.delete("/favoritar/:id",DeleteFilmeFavController)

