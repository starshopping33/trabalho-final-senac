import 'express-async-errors'
import express, { Application } from "express"

import cors from "cors"
import { FilmesRoutes } from "./Routes/Api.Routes"
import { UserRoutes } from "./Routes/User.Routes"
import { handleErrors } from "./error"
import { Loginroutes } from "./Routes/Login.Routes"
import { AdminRoutes } from './Routes/Admin.Routes'
import { ComentarioRoutes } from './Routes/Comentario.Routes'
 const app:Application = express()

 app.use(cors())
 app.use(express.json())
app.use("/cadastro",UserRoutes)
app.use("/login",Loginroutes)
app.use("/comentario",ComentarioRoutes)
app.use("/admin",AdminRoutes)
app.use("/filmes",FilmesRoutes)

app.use(handleErrors)
 export default app


 //api link imagens    https://image.tmdb.org/t/p/w500/