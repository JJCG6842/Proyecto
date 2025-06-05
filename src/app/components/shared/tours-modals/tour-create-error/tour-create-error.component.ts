import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-create-error',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './tour-create-error.component.html',
  styleUrl: './tour-create-error.component.scss'
})
export class TourCreateErrorComponent {

}
