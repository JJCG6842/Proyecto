import { Component,inject,ChangeDetectionStrategy, OnInit,ChangeDetectorRef} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ReservaService } from '../../service/reserva.service';
import { Reserva } from '../../interface/reserva.interface';
import { MatButtonModule } from '@angular/material/button';
import { ReservaEditComponent } from './reserva-edit/reserva-edit.component';
import { ReservaDeleteConfirmComponent } from '../../components/shared/modals-reserva/reserva-delete-confirm/reserva-delete-confirm.component';
import { ReservaDeleteSucessComponent } from '../../components/shared/modals-reserva/reserva-delete-sucess/reserva-delete-sucess.component';

@Component({
  selector: 'app-reserva',
  imports: [MatFormFieldModule,MatInputModule
  ,CommonModule,MatDialogModule,MatIconModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [provideNativeDateAdapter()]
})

export class ReservaComponent implements OnInit {
  readonly dialog = inject(MatDialog);
  reservas: Reserva[] = [];
  readonly cd = inject(ChangeDetectorRef);
  destinos: { [key: string]: string } = {
    one: 'Libertad Americana (Wari)',
    dos: 'City Tour Tradicional (Huamanga)',
    tres: 'Aguas Turquesas Millpu',
    cuatro: 'Laguna Azul (El Caribe Andino)',
    cinco: 'Ruta del Inca - Vilcashuamán',
    sies: 'Piscinas Termales - Colpa',
    siete: 'Aguas Termales - Pachapupum',
    ocho: 'Cañones de Qorihuillca - Grietas'
  };

  constructor(private reservaService: ReservaService) {}

  ngOnInit() {
    this.obtenerReservas();
  }

  loadReservas() {
    const reservasFromStorage = localStorage.getItem('reservas');
    if (reservasFromStorage) {
      this.reservas = JSON.parse(reservasFromStorage);
    } else {
      this.obtenerReservas();
    }
  }

  obtenerReservas() {
    this.reservaService.obtenerReservas().subscribe({
      next: (res) => {
        if (res.success) {
          
          this.reservas = res.data.map((r: any) => ({
            ...r,
            horainicio: new Date(r.horainicio),
            fechallegada: new Date(r.fechallegada),
            fechasalida: new Date(r.fechasalida)
          }));
          this.cd.markForCheck()
          localStorage.setItem('reservas', JSON.stringify(this.reservas));
        } else {
          console.warn('No se pudieron obtener las reservas:', res.message);
        }
      },
      error: (err) => {
        console.error('Error al hacer GET de reservas:', err);
      }
    });
  }

eliminarReserva(reserva: Reserva) {
  this.dialog.open(ReservaDeleteConfirmComponent, {
    width: '400px'
  }).afterClosed().subscribe((confirmacion: boolean) => {
    if (confirmacion) {
      this.reservaService.eliminarReservaPorDni(reserva.dni).subscribe({
        next: (res) => {
          if (res.success) {
            this.reservas = this.reservas.filter(r => r.dni !== reserva.dni);
            localStorage.setItem('reservas', JSON.stringify(this.reservas));

            // Mostrar diálogo de éxito
            this.dialog.open(ReservaDeleteSucessComponent, {
              width: '300px'
            });
          } else {
            alert('⚠️ ' + res.message); 
          }
        },
        error: (err) => {
          console.error('Error al eliminar reserva:', err);
          alert('❌ No se pudo eliminar la reserva.'); 
        }
      });
    }
  });
}
  

  openDialog() {
    const dialogRef = this.dialog.open(ReservaDetailComponent, {
      width: '40%',
      maxWidth: 'none',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
        this.reservas.push(result); 

        localStorage.setItem('reservas', JSON.stringify(this.reservas));
      }
    });
  }

  refresh(){
   localStorage.setItem('reservas', JSON.stringify(this.reservas)); 
  }

  openEdit(reserva: Reserva) {
  const dialogRef = this.dialog.open(ReservaEditComponent, {
    width: '40%',
    maxWidth: 'none',
    panelClass: 'custom-dialog-container',
    data: reserva 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.obtenerReservas(); 
    }
  });
}
}







  

