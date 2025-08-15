import { Repository } from "typeorm"
import { Favoritos } from "../Entities/Favoritos.entities"
import { AppDataSource } from "../data-source"
import { AppError } from "../error"

export const DeleteFilmeFavService = async(favoritoID:number)=>{

    const favotitosRopository:Repository<Favoritos> = AppDataSource.getRepository(Favoritos)

    const DeleteFilmeFav = await favotitosRopository.findOneBy({
        id:favoritoID
    })
    if(!DeleteFilmeFav){
        throw new AppError("Filme nao encontrado",404)
    }

    await favotitosRopository.remove(DeleteFilmeFav)
    

}