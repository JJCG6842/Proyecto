import { Schema } from 'mongoose';

export const CotizacionSchema = new Schema({
  cliente: { type: String, required: true },
  destino: { type: String, required: true },
  fecha: { type: String, required: true },
  personas: { type: Number, required: true, min: 1 },
  horainicio: { type: String, required: true },
  horaretorno: { type: String, required: true },
  costo: { type: Number, required: true, min: 1 },
  total: { type: Number, required: true, min: 1 },
  emision: { type: String, required: true },
  validez: { type: String, required: true },
}, {
  timestamps: { createdAt: 'createAt', updatedAt: 'updatedAt' }
});