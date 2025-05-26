import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-edit-sucess',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './reserva-edit-sucess.component.html',
  styleUrl: './reserva-edit-sucess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservaEditSucessComponent {}
