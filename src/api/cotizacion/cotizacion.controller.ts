import { Controller, Post, Req, Res } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service';

@Controller('cotizacion')
export class CotizacionController {
    constructor(
        private readonly cotizacionService:CotizacionService
    ){}

    @Post('create')

    async createCotizacion(@Res() res, @Req() req){
        const data = req.body;
        const cotizacion = await this.cotizacionService.createCotizacion(data);
        res.status(200).send(cotizacion)
    }
}
