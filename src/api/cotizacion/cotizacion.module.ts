import { Module } from '@nestjs/common';
import { CotizacionController } from './cotizacion.controller';
import { CotizacionService } from './cotizacion.service';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { CotizacionSchema } from 'src/schemas/cotizacion.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'cotizacion', schema: CotizacionSchema}
    ])
  ],
  controllers: [CotizacionController],
  providers: [CotizacionService]
})
export class CotizacionModule {}
