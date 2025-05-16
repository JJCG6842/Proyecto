import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ToursService } from '../../service/tours.service';
import { RouterLink } from '@angular/router';

export type Tours = {
  id: number,
  name: string;
  imageUrl: string;
  duration: string;
  inicio: string;
  retorno: string;
  description: string;
  price: number
}

@Component({
  selector: 'app-paquete',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './paquete.component.html',
  styleUrl: './paquete.component.scss',
  providers: [ToursService]
})
export class PaqueteComponent implements OnInit {

  turismo?: Tours[];

  constructor(private readonly ToursService: ToursService) { }

  async ngOnInit() {
    console.log('...ngOnInit');
    this.turismo = await this.ToursService.getTours();
  }
}






