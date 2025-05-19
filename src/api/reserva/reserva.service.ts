import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReservaService {
    constructor(
        @InjectModel('reserva')private reservaModel
    ){}

    async createReserva(data:any){
       try{
        const _reservas = await this.reservaModel.find({
            email:data.email
        }
    );

        if (_reservas.length >= 1) {
            return{data:undefined, message:"El correo esta duplicado"}
        }else{
            const reserva = await this.reservaModel.create(data);
            return reserva;
        }

       }
       catch(error){
        return{data:undefined, message:"No se pudo registrar la reserva"}
       }
    }
}
