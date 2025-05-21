import { Controller, Post, Body } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service';

@Controller('cotizacion')
export class CotizacionController {
    constructor(private readonly cotizacionService: CotizacionService) {}

    @Post('create')
    async createCotizacion(@Body() data: any) {
        return await this.cotizacionService.createCotizacion(data);
    }
}
