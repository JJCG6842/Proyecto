import { Component,ChangeDetectionStrategy, Inject} from '@angular/core';
import { MatDialogModule , MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { Cotizacion } from '../../../interface/cotizacion.interface';

@Component({
  selector: 'app-cotizacion-detail',
  standalone: true, 
  imports: [MatDialogModule, MatButtonModule, OverlayModule, CommonModule],
  templateUrl: './cotizacion-detail.component.html',
  styleUrl: './cotizacion-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CotizacionDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<CotizacionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cotizacion
  ) {}

  cerrar(): void {
    this.dialogRef.close();
  }
}

