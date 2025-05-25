export interface Cotizacion {
  _id?: string;
  cliente: string;
  destino: string;
  fecha: string;
  personas: number;
  horainicio: string;
  horaretorno: string;
  costo: number;
  total?: number;
  emision: string;
  validez: string;
  createAt?: Date;
}