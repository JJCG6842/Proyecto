import { Body, Controller, Post, Get, Delete, Param, Patch} from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ReservaService } from './reserva.service';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Controller('reserva')
export class ReservaController {
  constructor(private readonly reservaService: ReservaService) {}

  @Post('create')
    async createReserva(@Body() data: CreateReservaDto) {
    return await this.reservaService.createReserva(data);
    }
  @Get()
  async getAllReservas() {
    return await this.reservaService.findAllReservas();
  }

  @Patch(':id')
    async updateReserva(@Param('id') id: string, @Body() data: UpdateReservaDto) {
    return await this.reservaService.updateReserva(id, data);
  }

  @Delete(':id')
  async deleteReserva(@Param('id') id: string) {
    return await this.reservaService.deleteReserva(id);
  }

  @Delete('dni/:dni')
    async deleteByDni(@Param('dni') dni: string) {
    return await this.reservaService.deleteReservaByDni(dni);
  }
}