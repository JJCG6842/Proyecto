import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reserva-delete-confirm',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './reserva-delete-confirm.component.html',
  styleUrl: './reserva-delete-confirm.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservaDeleteConfirmComponent {}