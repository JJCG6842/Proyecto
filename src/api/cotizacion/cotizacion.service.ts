import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CotizacionService {
    constructor(
        @InjectModel('cotizacion')private cotizacionModel
    ){}

    async createCotizacion(data:any){
        try {
            const cotizacion = await this.cotizacionModel.create(data);
            return { data: cotizacion, message: "Cotización creada con éxito" };
        } catch (error) {
            return { data: undefined, message: "No se pudo generar la cotización"};
        }
    }
}
