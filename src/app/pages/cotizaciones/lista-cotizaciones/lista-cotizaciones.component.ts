import { Component, inject,ChangeDetectionStrategy, OnInit, ChangeDetectorRef} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CotizacionDetailComponent } from '../cotizacion-detail/cotizacion-detail.component';
import { CotizacionService } from '../../../service/cotizacion.service';
import { Cotizacion } from '../../../interface/cotizacion.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-cotizaciones',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatDialogModule,CommonModule],
  templateUrl: './lista-cotizaciones.component.html',
  styleUrl: './lista-cotizaciones.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ListaCotizacionesComponent implements OnInit{
  readonly dialog = inject(MatDialog);

  openDialog(cotizacion: Cotizacion) {
  const dialogRef = this.dialog.open(CotizacionDetailComponent, {
    data: cotizacion
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  cotizaciones: Cotizacion[] = [];

  constructor(private readonly router: Router, private cotizacionService: CotizacionService,
  private cdr: ChangeDetectorRef) {
  this.cotizacionService.getCotizaciones().subscribe({
    next: (res) => {
      this.cotizaciones = res.data;
    },
    error: () => {
      console.error('Error al obtener cotizaciones');
    }
  });
}

ngOnInit(){
this.cargarCotizaciones();
}

cargarCotizaciones() {
    this.cotizacionService.getCotizaciones().subscribe({
      next: (res) => {
        this.cotizaciones = res.data;
        this.cdr.markForCheck(); // <-- asegura que Angular detecte cambios
      },
      error: () => {
        console.error('Error al obtener cotizaciones');
      }
    });
  }

eliminarCotizacion(id: string) {
  if (confirm('¿Estás seguro de eliminar esta cotización?')) {
    this.cotizacionService.deleteCotizacion(id).subscribe({
      next: () => {
        this.cotizaciones = this.cotizaciones.filter(c => c._id !== id);
        alert('Cotización eliminada');
      },
      error: () => {
        alert('Error al eliminar la cotización');
      }
    });
  }
}

  goBack(){
    this.router.navigate(['cotizaciones']);
  }
}
