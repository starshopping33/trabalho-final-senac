import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Favoritos")

export class Favoritos{

    @PrimaryGeneratedColumn("increment")
       id: number

    @Column()
    usuario_id:number

    @Column()
    filme_id:number

    @Column()
    titulo:string

    @Column()
    poster_path:string
}