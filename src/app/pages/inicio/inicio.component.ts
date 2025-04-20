import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [MatButtonModule,MatCardModule,MatSidenavModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(private router:Router){}

  irCotizacion(){
    this.router.navigate(['/cotizaciones']);
  }

  irTours(){
    this.router.navigate(['/paquete']);
  }

  irReservas(){
    this.router.navigate(['/reserva']);
  }
}
