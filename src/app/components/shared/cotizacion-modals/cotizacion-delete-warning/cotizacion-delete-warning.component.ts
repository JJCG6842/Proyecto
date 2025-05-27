import { Component,inject,ChangeDetectionStrategy, } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cotizacion-delete-warning',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './cotizacion-delete-warning.component.html',
  styleUrl: './cotizacion-delete-warning.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CotizacionDeleteWarningComponent {

}
