import { Component,inject,ChangeDetectionStrategy, } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cotizacion-create-success',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './cotizacion-create-success.component.html',
  styleUrl: './cotizacion-create-success.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CotizacionCreateSuccessComponent {

}
