import { Component,inject,ChangeDetectionStrategy, } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-cotizacion-create-error',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './cotizacion-create-error.component.html',
  styleUrl: './cotizacion-create-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CotizacionCreateErrorComponent {

}
