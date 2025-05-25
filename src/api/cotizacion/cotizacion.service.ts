import { Injectable , InternalServerErrorException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCotizacionDto } from './dto/create-cotizacion.dto';
import { UpdateCotizacionDto } from './dto/update-cotizacion.dto';

@Injectable()
export class CotizacionService {
    constructor(
        @InjectModel('cotizacion')private cotizacionModel
    ){}

    async createCotizacion(data:CreateCotizacionDto){
        try {
      
      data.total = data.costo * data.personas;

      const cotizacion = await this.cotizacionModel.create(data);
      return {
        data: cotizacion,
        message: 'Cotización creada con éxito',
        success: true,
      };
    } catch (error) {
      
      console.error('Error al crear cotización:', error);

      throw new InternalServerErrorException('No se pudo generar la cotización');
    }
    }


    async findAllCotizaciones(){
      try{
        const cotizaciones = await this.cotizacionModel.find();
        return{
          success:true,
          message:'Lista de reserva obtenida correctamente',
          data: cotizaciones,
        };
      } catch(error){
        return{
          success:false,
          message:'no se pudieron obtener las cotizaciones',
          data:null,
        };
      }
    }

    async UpdateCotizacion(id: string, data: UpdateCotizacionDto){
      try{
        const updated = await this.cotizacionModel.findByIdAndUpdate(id, data, {
          new:true,
          runValidators:true
        });

        if(!updated){
          return{
            success: false,
            message: 'Cotizacion no encontrada',
            data: null,
          };
        }
        return {
        success: true,
        message: 'Cotizacion actualizada correctamente',
        data: updated,
    };
      }catch(error){
        return {
          success: false,
          message: 'Error al actualizar la cotizacion',
          data: null,
        };
      }
    }


    async DeleteCotizacion(id: string){
      try{
        const result = await this.cotizacionModel.findByIdAndDelete(id);

        if (!result) {
        return {
          success: false,
          message: 'No se encontró ninguna cotizacion con ese ID',
          data: null,
          };
        }

        return {
          success: true,
          message: 'Cotizacion eliminada exitosamente',
          data: result,
        };
      }catch(error){
        return{
          success: false,
          message: 'No se pudo eliminar la cotizacion',
          data: null,
        }
      }
    }
}
