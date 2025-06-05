import { Component, OnInit, inject, ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ToursService } from '../../service/tours.service';
import { Tour } from '../../interface/tour.interface'; 
import { PaqueteDetailComponent } from './paquete-detail/paquete-detail.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { PaqueteEditComponent } from './paquete-edit/paquete-edit.component';
import { TourDeleteWarningComponent } from '../../components/shared/tours-modals/tour-delete-warning/tour-delete-warning.component';
import { TourDeleteSuccessComponent } from '../../components/shared/tours-modals/tour-delete-success/tour-delete-success.component';

@Component({
  selector: 'app-paquete',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatDialogModule],
  templateUrl: './paquete.component.html',
  styleUrl: './paquete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaqueteComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  readonly toursService = inject(ToursService);

  tours: Tour[] = [];
  readonly cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.toursService.getTours().subscribe((res) => {
      if (res.success) {
        this.tours = res.data;
        this.cd.markForCheck()
      } else {
        console.error('Error al obtener tours', res.message);
      }
    });
  }
  
  

  openAdd() {
    const dialogRef = this.dialog.open(PaqueteDetailComponent,{
      width: '32%',
      maxWidth: 'none',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {
      this.toursService.getTours().subscribe((res) => {
        if (res.success) {
          this.tours = res.data;
          this.cd.markForCheck();
          }
        });
      }
    });
  }

  openEdit(tour: Tour) {
  const dialogRef = this.dialog.open(PaqueteEditComponent, {
    data: { tour },
    width: '32%',
    maxWidth: 'none',
    panelClass: 'custom-dialog-container'
  });

  dialogRef.afterClosed().subscribe((result) => {
    if (result === true) {
      this.toursService.getTours().subscribe((res) => {
        if (res.success) {
          this.tours = res.data;
          this.cd.markForCheck();
        }
      });
    }
  });
}

  eliminarTour(id: string): void {
  const dialogRef = this.dialog.open(TourDeleteWarningComponent, {
    width: '400px', // puedes ajustar este tamaño
    panelClass: 'custom-dialog-container'
  });

  dialogRef.afterClosed().subscribe((confirmacion: boolean) => {
    if (confirmacion) {
      this.toursService.deleteTour(id).subscribe({
        next: (res) => {
          if (res.success) {
            // Elimina el tour localmente
            this.tours = this.tours.filter(tour => tour._id !== id);
            this.cd.markForCheck();

            // Muestra modal de éxito
            this.dialog.open(TourDeleteSuccessComponent, {
              width: '400px',
              panelClass: 'custom-dialog-container'
            });
          } else {
            alert('No se pudo eliminar el tour: ' + (res.message || 'Error desconocido'));
          }
        },
        error: (err) => {
          console.error('Error al eliminar el tour:', err);
          alert('Ocurrió un error al eliminar el tour. Inténtalo más tarde.');
        }
      });
    }
  });
}

refresh(){
  
}
}