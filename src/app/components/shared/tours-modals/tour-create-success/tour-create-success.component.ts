import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-create-success',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './tour-create-success.component.html',
  styleUrl: './tour-create-success.component.scss'
})
export class TourCreateSuccessComponent {

}
