import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaModule } from './api/reserva/reserva.module';
import { CotizacionModule } from './api/cotizacion/cotizacion.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gestorcotizacion'),
    ReservaModule,
    CotizacionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
