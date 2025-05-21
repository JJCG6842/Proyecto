import {Schema} from 'mongoose';

export const ReservaSchema = new Schema({
    nombre:String,
    email:{ type: String, unique: true },
    dni: { type: String, required: true, unique: true },
    destino:String,
    horainicio:String,
    fechallegada:String,
    fechasalida:String,
    createAt:{type:Date, default:Date.now}
});

ReservaSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (_doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
  },
});