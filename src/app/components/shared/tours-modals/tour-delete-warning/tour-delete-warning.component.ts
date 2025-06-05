import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-delete-warning',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './tour-delete-warning.component.html',
  styleUrl: './tour-delete-warning.component.scss'
})
export class TourDeleteWarningComponent {

}
