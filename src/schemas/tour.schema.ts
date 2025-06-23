import {Schema} from 'mongoose';

export const TourSchema = new Schema({
    name: String,
    imagenUrl:String,
    duration:String,
    inicio:String,
    retorno:String,
    description:String,
    price:Number,
});
