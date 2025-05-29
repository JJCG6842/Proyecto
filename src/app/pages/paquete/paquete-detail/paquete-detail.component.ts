import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToursService } from '../../../service/tours.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paquete-detail',
  imports: [MatButtonModule],
  templateUrl: './paquete-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './paquete-detail.component.scss',
})
export class PaqueteDetailComponent{
  
}
