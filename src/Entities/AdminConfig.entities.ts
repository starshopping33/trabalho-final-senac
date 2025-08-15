import { Column, Entity, IsNull, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./Usuarios.entities";

@Entity("config")

        export class Config{

    @PrimaryGeneratedColumn("increment")
           id: number
    
        @Column()
        cor:string
        
    
        @Column()
        titulo:string
        
    
        @Column()
        logo:string

        @ManyToOne(()=>Usuarios)
        usuarios:Usuarios
        
}