import {Schema} from 'mongoose';

export const CotizacionSchema = new Schema({
    cliente:String,
    destino:String,
    fecha:String,
    personas: Number,
    horainicio:String,
    horaretorno:String,
    costo:Number,
    total:Number,
    emision:String,
    createAt:{type:Date, default:Date.now}
})