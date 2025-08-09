import express, { Application } from "express"

import cors from "cors"
import 'express-async-errors'
import { FilmesRoutes } from "./Routes/apiroutes"
 const app:Application = express()

 app.use(cors())
 app.use(express.json())



app.use("/filmes",FilmesRoutes)



 export default app