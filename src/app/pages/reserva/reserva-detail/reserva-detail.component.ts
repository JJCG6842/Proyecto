import { Component,signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTimepickerModule} from '@angular/material/timepicker';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-reserva-detail',
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule, MatButtonModule,MatTimepickerModule,MatDatepickerModule,MatNativeDateModule
    ,CommonModule,MatDialogModule],
  templateUrl: './reserva-detail.component.html',
  styleUrl: './reserva-detail.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class ReservaDetailComponent {
  formReserva!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formReserva = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      destino: ['', Validators.required],
      horainicio: ['', Validators.required],
      fechallegada: ['', Validators.required],
      fechasalida: ['',Validators.required],
    });
  }

  get name(){
    return this.formReserva.get('name') as FormControl;
  }

  get email(){
    return this.formReserva.get('email') as FormControl;
  }

  get destino(){
    return this.formReserva.get('destino') as FormControl;
  }

  get horainicio(){
    return this.formReserva.get('horainicio') as FormControl;
  }

  get fechallegada(){
    return this.formReserva.get('fechallegada') as FormControl;
  }

  get fechasalida(){
    return this.formReserva.get('fechasalida') as FormControl;
  }

  procesar() {
    console.log(this.formReserva.value); 

  // Limpiar el formulario
  this.formReserva.reset({
    name: '',
    email: '',
    destino: '',
    horainicio: '',
    fechallegada: '',
    fechasalida: '',
  });
  }





  
}
