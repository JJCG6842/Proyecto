import { Controller, Post,Get,Body,Patch,Delete,Param } from '@nestjs/common';
import { ToursService } from './tours.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';


@Controller('tours')
export class ToursController {
    constructor(private readonly tourService: ToursService) {}

    @Post('create')
    async createTour(@Body() data: CreateTourDto) {
    return await this.tourService.createTour(data);
    }

    @Get()
    async getAllTours(){
        return await this.tourService.findAllTours();
    }

    @Get('name/:name')
    async getTourByName(@Param('name') name: string) {
    return await this.tourService.findTourByName(name);
}

    @Patch(':id')
    async updateTour(@Param('id') id:string, @Body() data:UpdateTourDto ){
        return await this.tourService.UpdateTour(id, data);
    }

    @Delete(':id')
    async deleteTour(@Param('id') id:string){
        return await this.tourService.DeleteTour(id);
    }
    
}
