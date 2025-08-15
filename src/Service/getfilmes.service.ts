import 'dotenv/config'

export const getFilmesService = async()=>{

const res = await fetch("https://api.themoviedb.org/3/movie/popular?language=pt-BR",{
    headers:{
        "Authorization": `Bearer ${process.env.TMDB_KEY}`,
        "Content-Type": "application/json;charset=utf-8"
    }
})


const response = await res.json()
return response
}
