import { Component,ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ToursService } from '../../../service/tours.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TourEditSuccessComponent } from '../../../components/shared/tours-modals/tour-edit-success/tour-edit-success.component';
import { TourEditErrorComponent } from '../../../components/shared/tours-modals/tour-edit-error/tour-edit-error.component';

@Component({
  selector: 'app-paquete-edit',
  imports: [MatButtonModule,MatDialogModule,MatFormFieldModule,MatInputModule,MatSelectModule,FormsModule, ReactiveFormsModule, MatButtonModule,MatTimepickerModule,MatDatepickerModule,MatNativeDateModule
    ,CommonModule,MatDialogModule],
  templateUrl: './paquete-edit.component.html',
  styleUrl: './paquete-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaqueteEditComponent {
formTour!: FormGroup;

  constructor(
  private router: Router,
  private fb: FormBuilder,
  private tourService: ToursService,
  private dialogRef: MatDialogRef<PaqueteEditComponent>,
  private dialog: MatDialog,
  @Inject(MAT_DIALOG_DATA) public data: { tour: any }  // 👈 Recibe el tour a editar
) {
  this.formTour = this.fb.group({
    name: [data.tour.name, Validators.required],
    imagenUrl: [data.tour.imagenUrl, Validators.required],
    duration: [data.tour.duration, Validators.required],
    inicio: [data.tour.inicio, Validators.required],
    retorno: [data.tour.retorno, Validators.required],
    description: [data.tour.description],
    price: [data.tour.price, [Validators.required, Validators.min(1)]],
  });
}


  get name(){
    return this.formTour.get('name') as FormControl;
  };

  get imagenUrl(){
    return this.formTour.get('imagenUrl') as FormControl;
  };

  get duration(){
    return this.formTour.get('duration') as FormControl;
  };

  get inicio(){
    return this.formTour.get('inicio') as FormControl;
  };

  get retorno(){
    return this.formTour.get('retorno') as FormControl;
  };

  get description(){
    return this.formTour.get('description') as FormControl;
  };

  get price(){
    return this.formTour.get('price') as FormControl;
  };


  editar(){
    if (this.formTour.invalid) {
    this.formTour.markAllAsTouched();
    return;
  }

  const updatedTour = this.formTour.value;

  this.tourService.updateTour(this.data.tour._id, updatedTour).subscribe({
    next: (res) => {
      if (res.success) {
        this.dialog.open(TourEditSuccessComponent, {
                width: '30%',
                panelClass: 'custom-dialog-container'
              });
        this.dialogRef.close(true); // Devuelve true para indicar éxito
      } else {
        alert('No se pudo actualizar el tour: ' + res.message);
      }
    },
    error: (err) => {
      console.error('Error al actualizar el tour:', err);
      this.dialog.open(TourEditErrorComponent, {
          width: '30%',
          panelClass: 'custom-dialog-container'
        });
    }
  });
  }
}
