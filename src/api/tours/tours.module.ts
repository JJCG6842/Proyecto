import { Module } from '@nestjs/common';
import { ToursService } from './tours.service';
import mongoose from 'mongoose';
import { ToursController } from './tours.controller';
import { TourSchema } from 'src/schemas/tour.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
    {name:'tours', schema:TourSchema}
  ])
],
  providers: [ToursService],
  controllers: [ToursController]
})
export class ToursModule {}
