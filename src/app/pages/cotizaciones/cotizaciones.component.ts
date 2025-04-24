import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
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
import { CommonModule } from '@angular/common';



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
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.scss'] 
})
export class CotizacionesComponent {

  formCotizacion!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formCotizacion = this.fb.group({
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      personas: ['', [Validators.required, Validators.min(1)]],
      horainicio: ['', Validators.required],
      horaretorno: ['', Validators.required],
      costo: ['', [Validators.required, Validators.min(1)]],
      total: ['', [Validators.required, Validators.min(1)]],
      emision: ['', Validators.required],
    });
  }

  verRegistro() {
    this.router.navigate(['/lista-cotizaciones']);
  }

  get destino(){
    return this.formCotizacion.get('destino') as FormControl;
  }

  get personas(){
    return this.formCotizacion.get('personas') as FormControl;
  }

  get fecha(){
    return this.formCotizacion.get('fecha') as FormControl;
  }

  get horainicio(){
    return this.formCotizacion.get('horainicio') as FormControl;
  }

  get horaretorno(){
    return this.formCotizacion.get('horaretorno') as FormControl;
  }

  get costo(){
    return this.formCotizacion.get('costo') as FormControl;
  }

  get total(){
    return this.formCotizacion.get('total') as FormControl;
  }

  get emision(){
    return this.formCotizacion.get('emision') as FormControl;
  };

  procesar() {
    console.log(this.formCotizacion.value); 

  // Limpiar el formulario
  this.formCotizacion.reset({
    destino: '',
    fecha: '',
    personas: '',
    horainicio: '',
    horaretorno: '',
    costo: '',
    total: '',
    emision: ''
  });
  }

  

/*
  formCotizacion = new FormGroup({
    'destino': new FormControl('',Validators.required),
    'fecha' : new FormControl('',[Validators.required]),
    'personas': new FormControl('',[Validators.required, Validators.min(1)]),
    'horainicio': new FormControl('',Validators.required),
    'horaretorno': new FormControl('',Validators.required),
    'costo': new FormControl('',[Validators.required, Validators.min(1)]),
    'total': new FormControl('',[Validators.required, Validators.min(1)]),
    'emision': new FormControl('',Validators.required)
  });*/

  



  /*destino = new FormControl('',Validators.required);
  fecha = new FormControl('',[Validators.required]);
  personas = new FormControl('',[Validators.required, Validators.min(1)]);
  horainicio = new FormControl('',Validators.required);
  horaretorno = new FormControl('',Validators.required);
  costo = new FormControl('',[Validators.required, Validators.min(1)]);
  total = new FormControl('',[Validators.required, Validators.min(1)]);
  emision = new FormControl('',Validators.required);*/


}