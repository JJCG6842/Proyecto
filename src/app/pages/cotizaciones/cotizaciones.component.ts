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
import { CotizacionService } from '../../service/cotizacion.service';
import { MatDialog } from '@angular/material/dialog';
import { CotizacionCreateSuccessComponent } from '../../components/shared/cotizacion-modals/cotizacion-create-success/cotizacion-create-success.component';
import { CotizacionCreateErrorComponent } from '../../components/shared/cotizacion-modals/cotizacion-create-error/cotizacion-create-error.component';
import { ToursService } from '../../service/tours.service'; 
import { Tour } from '../../interface/tour.interface';


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
  tours: Tour[] = [];

  constructor(private router: Router, private fb: FormBuilder, 
    private cotizacionService:CotizacionService, private dialog: MatDialog,private toursService: ToursService) {
    this.formCotizacion = this.fb.group({
      cliente:['', Validators.required],
      destino: ['', Validators.required],
      fecha: ['', Validators.required],
      personas: ['', [Validators.required, Validators.min(1)]],
      horainicio: ['', Validators.required],
      horaretorno: ['', Validators.required],
      costo: ['', [Validators.required, Validators.min(1)]],
      emision: ['', Validators.required],
      validez: ['',Validators.required],
    });
  }

  ngOnInit(): void {
  this.toursService.getTours().subscribe((res) => {
    if (res.success) {
      this.tours = res.data;

      this.formCotizacion.get('destino')?.valueChanges.subscribe((selectedName: string) => {
        const selectedTour = this.tours.find(t => t.name === selectedName);
        if (selectedTour) {
          this.formCotizacion.patchValue({
            horainicio: selectedTour.inicio,
            horaretorno: selectedTour.retorno,
            costo: selectedTour.price
          });
        }
      });

    } else {
      alert('❌ Error al cargar los tours.');
    }
  });
}

  verRegistro() {
    this.router.navigate(['/lista-cotizaciones']);
  }
  
  get cliente(){
    return this.formCotizacion.get('cliente') as FormControl;
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

  get emision(){
    return this.formCotizacion.get('emision') as FormControl;
  }

  get validez(){
    return this.formCotizacion.get('validez') as FormControl;
  }

  procesar() {
  if (this.formCotizacion.invalid) {
    this.formCotizacion.markAllAsTouched();
    return;
  }

  const formData = this.formCotizacion.value;

  this.cotizacionService.createCotizacion(formData).subscribe({
    next: (response) => {
      console.log('Cotización creada:', response);

      this.dialog.open(CotizacionCreateSuccessComponent);
    },
    error: (error) => {
      console.error('Error al crear cotización:', error);
      this.dialog.open(CotizacionCreateErrorComponent);
    }
  });
}

}