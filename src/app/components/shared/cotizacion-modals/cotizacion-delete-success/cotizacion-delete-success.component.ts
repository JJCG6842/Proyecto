import { Component,inject,ChangeDetectionStrategy, } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
@Component({
  selector: 'app-cotizacion-delete-success',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './cotizacion-delete-success.component.html',
  styleUrl: './cotizacion-delete-success.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CotizacionDeleteSuccessComponent {

}
