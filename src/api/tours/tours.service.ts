import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class ToursService {
    constructor(
        @InjectModel('tours')private TourModel
    ){}

    async createTour(data: CreateTourDto){
        try{
            const tour = await this.TourModel.create(data);
            return{
                data:tour,
                message:'Tour creado con exito',
                success:true,
            };
        } catch(error){
            console.error('Error al crear el tour:', error);
            return {
            message: 'Error al crear el tour',
            success: false,
            error: error.message,
            };
        }
    }

    async findAllTours(){
        try{
            const tour = await this.TourModel.find();
            return{
                success:true,
                message: 'Lista de tours obtenida correctamente',
                data:tour,
            };
        } catch(error){
            return{
                success:false,
                message: 'No se pudieron obtener los tours',
                data:null,
            };
        }
    }

    async UpdateTour(id: string, data:UpdateTourDto){
        try{
            const updated = await this.TourModel.findByIdAndUpdate(id, data, {
                new:true,
                runValidators:true,
            });

            if(!updated){
                return{
                    success: false,
                    message: 'Tour no encontrado',
                    data: null,
                };
            }
            return {
                success: true,
                message: 'Tour actualizado correctamente',
                data: updated,
            };
        } catch(error){
            return {
                success: false,
                message: 'Error al actualizar el tour',
                data: null,
            };
        }
    }


    async DeleteTour(id: string){
        try{
            const result = await this.TourModel.findByIdAndDelete(id);

            if (!result){
                return{
                    success: false,
                    message: 'No se encontró ningun tour con ese ID',
                    data: null,
                };
            }
            return{
                success: true,
                message: 'Tour eliminado correctamente',
                data: result,
            };
        } catch(error){
            return{
                success: false,
                message: 'No se pudo eliminar el tour',
                data: null,
            };
        }
    }

    

}
