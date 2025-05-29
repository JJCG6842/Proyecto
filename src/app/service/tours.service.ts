import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../interface/tour.interface';

@Injectable({
    providedIn: 'root'
})
export class ToursService {
    private apiUrl = 'http://localhost:3000/tours';

    constructor(private http: HttpClient) {}

  getTours(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createTour(tour: Tour): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, tour);
  }

  updateTour(id: string, tour: Partial<Tour>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, tour);
  }

  deleteTour(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}