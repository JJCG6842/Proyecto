import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaModule } from './api/reserva/reserva.module';
import { CotizacionModule } from './api/cotizacion/cotizacion.module';
import { ToursModule } from './api/tours/tours.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gestorcotizacion'),
    ReservaModule,
    CotizacionModule,
    ToursModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
