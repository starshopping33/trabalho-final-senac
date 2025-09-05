import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuarios } from "./Usuarios.entities";

@Entity("comentario")

        export class Comentario{

    @PrimaryGeneratedColumn("increment")
           id: number
    @Column()
        conteudo:string
    @Column()
    nome_filme:string
    @Column()
    imagem:string
       
     @ManyToOne(()=>Usuarios)
            usuarios:Usuarios
            
    
    }
        