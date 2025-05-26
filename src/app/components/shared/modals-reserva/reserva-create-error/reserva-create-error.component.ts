import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-create-error',
  imports: [MatDialogModule,MatButtonModule],
  templateUrl: './reserva-create-error.component.html',
  styleUrl: './reserva-create-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservaCreateErrorComponent {

}
