import { Controller, Post, Body, Get, Patch, Delete, Param } from '@nestjs/common';
import { CotizacionService } from './cotizacion.service';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';


@Controller('cotizacion')
export class CotizacionController {
    constructor(private readonly cotizacionService: CotizacionService) {}

    @Post('create')
    async createCotizacion(@Body() data: any) {
        return await this.cotizacionService.createCotizacion(data);
    }

    @Get()
    async getAllCotizaciones(){
        return await this.cotizacionService.findAllCotizaciones();
    }
    
    @Patch(':id')
    async updateCotizacion(@Param('id') id:string, @Body() data:UpdateCotizacionDto ){
        return await this.cotizacionService.UpdateCotizacion(id, data)
    }

    @Delete(':id')
    async deleteCotizacion(@Param('id') id:string){
        return await this.cotizacionService.DeleteCotizacion(id);
    }

}
