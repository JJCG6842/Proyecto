import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-edit-success',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './tour-edit-success.component.html',
  styleUrl: './tour-edit-success.component.scss'
})
export class TourEditSuccessComponent {
  
}
