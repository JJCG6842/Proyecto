import { Controller, Post, Req, Res } from '@nestjs/common';
import { ReservaService } from './reserva.service';

@Controller('reserva')
export class ReservaController {
    constructor(
        private readonly reservaService:ReservaService
    ){}

    @Post('create')

    async createReserva (@Res() res, @Req() req){
        const data = req.body;
        const reserva = await this.reservaService.createReserva(data);
        res.status(200).send(reserva)
    }
}
