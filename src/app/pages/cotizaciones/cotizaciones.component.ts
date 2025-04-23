import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, FormControl, Validators} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-cotizaciones',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTimepickerModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss'] 
})
export class CotizacionesComponent {
  constructor(private router: Router) {}

  verRegistro() {
    this.router.navigate(['/lista-cotizaciones']);
  }

  destino = new FormControl('');
  fecha = new FormControl('');
  personas = new FormControl('');
  horainicio = new FormControl('');
  horaretorno = new FormControl('');
  costo = new FormControl('');
  total = new FormControl('');
  emision = new FormControl('');

  
}