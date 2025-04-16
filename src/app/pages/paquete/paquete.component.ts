import { Component, inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
//import { ToursService } from '../../service/tours.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-paquete',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './paquete.component.html',
  styleUrl: './paquete.component.scss',
  //providers:[ToursService]
})

/*
export type Tours ={
  id:number,
  name:string;
  duration:string;
  inicio:string;
  retorno:string;
  description:string;
  price:number
}*/


export class PaqueteComponent {

}
