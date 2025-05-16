import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ToursService } from '../../../service/tours.service';
import { Tours } from '../paquete.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-paquete-detail',
  imports: [MatButtonModule],
  templateUrl: './paquete-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './paquete-detail.component.scss',
  providers: [ToursService],
})
export class PaqueteDetailComponent implements OnInit{
  tourId:number = 0;
  tour:Tours | undefined

  constructor(private readonly route: ActivatedRoute,
    private readonly router:Router,
    private readonly tourService:ToursService){}

    ngOnInit(): void {
      this.route.params.subscribe((params)=>{
        this.tourId = +params['id'];
        this.tour = this.tourService.getTourPorId(this.tourId);
        console.log(this.tour)
      })
    }

    goBack():void{
      this.router.navigate(['/paquete']);
    }

}
