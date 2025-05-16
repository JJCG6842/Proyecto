import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cotizaciones',
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './lista-cotizaciones.component.html',
  styleUrl: './lista-cotizaciones.component.scss'
})
export class ListaCotizacionesComponent {
  constructor(private readonly router:Router){

  }

  goBack(){
    this.router.navigate(['cotizaciones']);
  }
}
