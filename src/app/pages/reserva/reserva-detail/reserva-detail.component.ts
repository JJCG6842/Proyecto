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
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Reserva } from '../../../interface/reserva.interface';
import { ReservaService } from '../../../service/reserva.service';
import { ReservaComponent } from '../reserva.component';
import { ReservaCreateSuccessComponent } from '../../../components/shared/modals-reserva/reserva-create-success/reserva-create-success.component';
import { ReservaCreateErrorComponent } from '../../../components/shared/modals-reserva/reserva-create-error/reserva-create-error.component';


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

  constructor(
  private router: Router,
  private fb: FormBuilder,
  private reservaService: ReservaService,
  private dialogRef: MatDialogRef<ReservaDetailComponent>,
  private dialog: MatDialog
) {
  this.formReserva = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', Validators.required],
    destino: ['', Validators.required],
    horainicio: ['', Validators.required],
    fechallegada: ['', Validators.required],
    fechasalida: ['', Validators.required],
  });
}

  get name(){
    return this.formReserva.get('name') as FormControl;
  }

  get email(){
    return this.formReserva.get('email') as FormControl;
  }

  get dni(){
    return this.formReserva.get('dni') as FormControl;
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
  if (this.formReserva.invalid) {
    this.formReserva.markAllAsTouched();
    return;
  }

  const reservaData: Reserva = {
    nombre: this.formReserva.value.name,
    email: this.formReserva.value.email,
    dni: this.formReserva.value.dni,
    destino: this.formReserva.value.destino,
    horainicio: this.formReserva.value.horainicio,
    fechallegada: this.formReserva.value.fechallegada,
    fechasalida: this.formReserva.value.fechasalida,
  };

  this.reservaService.crearReserva(reservaData).subscribe({
  next: (res) => {
    if (res.success) {
      this.dialogRef.close(res.data); 

      this.dialog.open(ReservaCreateSuccessComponent, {
        width: '30%',
        panelClass: 'custom-dialog-container'
      });
    } else {
      alert('⚠️ ' + res.message);
    }
  },
  error: (err) => {
  console.error('Error al registrar reserva:', err);
  
  this.dialog.open(ReservaCreateErrorComponent, {
    width: '30%',
    panelClass: 'custom-dialog-container'
  });
}
});
}

}
