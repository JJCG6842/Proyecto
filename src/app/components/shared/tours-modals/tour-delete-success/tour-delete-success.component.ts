import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-delete-success',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './tour-delete-success.component.html',
  styleUrl: './tour-delete-success.component.scss'
})
export class TourDeleteSuccessComponent {

}
