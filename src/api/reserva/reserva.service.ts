import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
    constructor(
        @InjectModel('reserva')private reservaModel
    ){}

async createReserva(data: CreateReservaDto) {
  try {
    const existingReserva = await this.reservaModel.findOne({
      $or: [{ email: data.email }, { dni: data.dni }],
    });

    if (existingReserva) {
      return {
        success: false,
        message: 'El correo o el DNI ya están registrados',
        data: null,
      };
    }

    const reserva = await this.reservaModel.create(data);

    return {
      success: true,
      message: 'Reserva creada exitosamente',
      data: reserva,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Ocurrió un error al registrar la reserva',
      data: null,
    };
  }
}

async findAllReservas() {
  try {
    const reservas = await this.reservaModel.find();
    return {
      success: true,
      message: 'Lista de reservas obtenida correctamente',
      data: reservas,
    };
  } catch (error) {
    return {
      success: false,
      message: 'No se pudieron obtener las reservas',
      data: null,
    };
  }
}

async updateReserva(id: string, data: UpdateReservaDto) {
  try {
    const updated = await this.reservaModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return {
        success: false,
        message: 'Reserva no encontrada',
        data: null,
      };
    }
    return {
      success: true,
      message: 'Reserva actualizada correctamente',
      data: updated,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Error al actualizar la reserva',
      data: null,
    };
  }
}

async deleteReserva(id: string) {
  try {
    const result = await this.reservaModel.findByIdAndDelete(id);

    if (!result) {
      return {
        success: false,
        message: 'No se encontró ninguna reserva con ese ID',
        data: null,
      };
    }

    return {
      success: true,
      message: 'Reserva eliminada exitosamente',
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: 'No se pudo eliminar la reserva',
      data: null,
    };
  }
}

async deleteReservaByDni(dni: string) {
  try {
    const result = await this.reservaModel.findOneAndDelete({ dni });

    if (!result) {
      return {
        success: false,
        message: 'No se encontró ninguna reserva con ese DNI',
        data: null,
      };
    }

    return {
      success: true,
      message: 'Reserva eliminada exitosamente',
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: 'No se pudo eliminar la reserva',
      data: null,
    };
  }
}
}
