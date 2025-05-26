import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-delete-sucess',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './reserva-delete-sucess.component.html',
  styleUrl: './reserva-delete-sucess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservaDeleteSucessComponent {
  
}
