import { IsEmail, IsNotEmpty, IsString, Length, Matches } from 'class-validator';

export class CreateTourDto {

    @IsNotEmpty()
    name: string;

    @IsString()
    imagenUrl: string;

    @IsNotEmpty()
    duration: string;

    @IsNotEmpty()
    inicio: string;

    @IsNotEmpty()
    retorno: string;

    @IsString()
    description: string;

    @IsNotEmpty()
    price: number;
}