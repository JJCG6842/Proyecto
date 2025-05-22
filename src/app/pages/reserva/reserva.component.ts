import { Component,inject,ChangeDetectionStrategy, OnInit} from '@angular/core';
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
    // Cargar reservas desde LocalStorage al cargar el componente
    this.loadReservas();
  }

  loadReservas() {
    const reservasFromStorage = localStorage.getItem('reservas');
    if (reservasFromStorage) {
      // Si hay reservas guardadas en LocalStorage, las cargamos
      this.reservas = JSON.parse(reservasFromStorage);
    } else {
      // Si no hay reservas en LocalStorage, las obtenemos desde el servidor
      this.obtenerReservas();
    }
  }

  obtenerReservas() {
    this.reservaService.obtenerReservas().subscribe({
      next: (res) => {
        if (res.success) {
          // Convertir las fechas en objetos Date para que funcionen correctamente con el pipe
          this.reservas = res.data.map((r: any) => ({
            ...r,
            horainicio: new Date(r.horainicio),
            fechallegada: new Date(r.fechallegada),
            fechasalida: new Date(r.fechasalida)
          }));

          // Guardar las reservas obtenidas en LocalStorage
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
  
  // Método para abrir el dialog y añadir una nueva reserva
  openDialog() {
    const dialogRef = this.dialog.open(ReservaDetailComponent, {
      width: '40%',
      maxWidth: 'none',
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Se ha cerrado el dialog con éxito y se ha agregado la reserva
        this.reservas.push(result); // Agregar la nueva reserva a la lista

        // Actualizar LocalStorage
        localStorage.setItem('reservas', JSON.stringify(this.reservas));
      }
    });
  }
}







  

