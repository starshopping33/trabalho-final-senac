import 'dotenv/config'

export const getFilmesService = async(page:string)=>{

const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=${page??1}`,{
    headers:{
        "Authorization": `Bearer ${process.env.TMDB_KEY}`,
        "Content-Type": "application/json;charset=utf-8"
    }
})


const response = await res.json()
return response
}
