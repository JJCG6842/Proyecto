import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateReservaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 8, { message: 'El DNI debe tener exactamente 8 dígitos' })
  @Matches(/^[0-9]+$/, { message: 'El DNI solo puede contener números' })
  dni: string; 

  @IsNotEmpty()
  @IsString()
  destino: string;

  @IsNotEmpty()
  horainicio: string;

  @IsNotEmpty()
  fechallegada: string;

  @IsNotEmpty()
  fechasalida: string;
}