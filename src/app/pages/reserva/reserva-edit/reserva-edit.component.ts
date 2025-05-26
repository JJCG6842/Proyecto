import { Component,signal,Inject} from '@angular/core';
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
import {MatDialog, MatDialogModule, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Reserva } from '../../../interface/reserva.interface';
import { ReservaService } from '../../../service/reserva.service';
import { ReservaComponent } from '../reserva.component';
import { ReservaEditSucessComponent } from '../../../components/shared/modals-reserva/reserva-edit-sucess/reserva-edit-sucess.component';
import { ReservaEditErrorComponent } from '../../../components/shared/modals-reserva/reserva-edit-error/reserva-edit-error.component';

@Component({
  selector: 'app-reserva-edit',
  imports: [MatDialogModule, MatButtonModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule, MatButtonModule,MatTimepickerModule,MatDatepickerModule,MatNativeDateModule
    ,CommonModule,MatDialogModule],
  templateUrl: './reserva-edit.component.html',
  styleUrl: './reserva-edit.component.scss'
})
export class ReservaEditComponent {
formReserva!: FormGroup;

  constructor(
  private fb: FormBuilder,
  private reservaService: ReservaService,
  private dialogRef: MatDialogRef<ReservaEditComponent>,
  private dialog:MatDialog,
  @Inject(MAT_DIALOG_DATA) public data: Reserva  
) {
  this.formReserva = this.fb.group({
    name: [data.nombre, Validators.required],
    email: [data.email, [Validators.required, Validators.email]],
    dni: [data.dni, Validators.required],
    destino: [data.destino, Validators.required],
    horainicio: [new Date(data.horainicio), Validators.required],
    fechallegada: [new Date(data.fechallegada), Validators.required],
    fechasalida: [new Date(data.fechasalida), Validators.required],
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

  editar() {
  if (this.formReserva.invalid) {
    this.formReserva.markAllAsTouched();
    return;
  }

  const updatedReserva: Partial<Reserva> = {
    nombre: this.formReserva.value.name,
    email: this.formReserva.value.email,
    dni: this.formReserva.value.dni,
    destino: this.formReserva.value.destino,
    horainicio: this.formReserva.value.horainicio,
    fechallegada: this.formReserva.value.fechallegada,
    fechasalida: this.formReserva.value.fechasalida,
  };

  this.reservaService.editarReserva(this.data.id!, updatedReserva).subscribe({
    next: (res) => {
      if (res.success) {
        this.dialogRef.close(res.data);  

        this.dialog.open(ReservaEditSucessComponent, {
        width: '30%',
        panelClass: 'custom-dialog-container'
      });
} else {
        alert('⚠️ ' + res.message);
      }
    },
    error: (err) => {
    console.error('Error al editar reserva:', err);
    this.dialog.open(ReservaEditErrorComponent, {
    width: '30%',
    panelClass: 'custom-dialog-container'
    });
    }
  });
}
}
