import { Component,inject,ChangeDetectionStrategy} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-reserva',
  imports: [MatFormFieldModule,MatInputModule
  ,CommonModule,MatDialogModule,MatIconModule],
  templateUrl: './reserva.component.html',
  styleUrl: './reserva.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //providers: [provideNativeDateAdapter()]
})

export class ReservaComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(ReservaDetailComponent, {
      width: '40%',
      maxWidth: 'none',
      panelClass: 'custom-dialog-container'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}







  

