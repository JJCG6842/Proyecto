import { Module } from '@nestjs/common';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaSchema } from 'src/schemas/reserva.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
        {name:'reserva',schema: ReservaSchema}
    ])
  ],
  controllers: [ReservaController],
  providers: [ReservaService]
})
export class ReservaModule {}
