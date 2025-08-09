import { Router } from "express";
import { getFilmesController } from "../Controller/filmescontroller";

export const FilmesRoutes:Router = Router()

FilmesRoutes.get("",getFilmesController)



