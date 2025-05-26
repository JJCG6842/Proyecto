import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-reserva-edit-error',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './reserva-edit-error.component.html',
  styleUrl: './reserva-edit-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservaEditErrorComponent {

}
