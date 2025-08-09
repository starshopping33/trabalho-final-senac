import { Router } from "express";
import { getFilmesController } from "../Controller/apicontroller";

export const FilmesRoutes:Router = Router()

FilmesRoutes.get("",getFilmesController)



