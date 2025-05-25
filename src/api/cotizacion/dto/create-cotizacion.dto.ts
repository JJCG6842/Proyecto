import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateCotizacionDto {
  @IsNotEmpty()
  @IsString()
  cliente: string;

  @IsNotEmpty()
  @IsString()
  destino: string;

  @IsNotEmpty()
  @IsString()
  fecha: string; 

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  personas: number;

  @IsNotEmpty()
  @IsString()
  horainicio: string;

  @IsNotEmpty()
  @IsString()
  horaretorno: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  costo: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  total: number;

  @IsNotEmpty()
  @IsString()
  emision: string;

  @IsNotEmpty()
  @IsString()
  validez: string;
}