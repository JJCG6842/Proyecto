import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tour-edit-error',
  imports: [MatButtonModule,MatDialogModule],
  templateUrl: './tour-edit-error.component.html',
  styleUrl: './tour-edit-error.component.scss'
})
export class TourEditErrorComponent {

}
