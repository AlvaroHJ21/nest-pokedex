import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Declaramos mediante un decorador que este es una clase para un schema de mongo
@Schema()
export class Pokemon extends Document {
  //Extiende de Document
  //id: string //Mongo me lo da

  //Definimos propiedades de los atributos
  @Prop({
    unique: true,
    index: true, //saber especificamente donde esta el recurso
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

//Creamos el esquema
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
