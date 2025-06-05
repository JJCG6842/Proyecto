import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../interface/tour.interface';

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  error?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ToursService {
    private apiUrl = 'http://localhost:3000/tours';

    constructor(private http: HttpClient) {}

  getTours(): Observable<ApiResponse<Tour[]>> {
  return this.http.get<ApiResponse<Tour[]>>(this.apiUrl);
}

createTour(tour: Tour): Observable<ApiResponse<Tour>> {
  return this.http.post<ApiResponse<Tour>>(`${this.apiUrl}/create`, tour);
}

updateTour(id: string, tour: Partial<Tour>): Observable<ApiResponse<Tour>> {
  return this.http.patch<ApiResponse<Tour>>(`${this.apiUrl}/${id}`, tour);
}

deleteTour(id: string): Observable<ApiResponse<Tour>> {
  return this.http.delete<ApiResponse<Tour>>(`${this.apiUrl}/${id}`);
}
}