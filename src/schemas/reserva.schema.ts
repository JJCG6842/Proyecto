import {Schema} from 'mongoose';

export const ReservaSchema = new Schema({
    nombre:String,
    email:String,
    destino:String,
    horainicio:String,
    fechallegada:String,
    fechasalida:String,
    createAt:{type:Date, default:Date.now}
})