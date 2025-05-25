import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cotizacion } from '../interface/cotizacion.interface';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  private baseUrl = 'http://localhost:3000/cotizacion'; 

  constructor(private http: HttpClient) {}

  createCotizacion(data: Cotizacion): Observable<any> {
  return this.http.post(`${this.baseUrl}/create`, data);
  }

  getCotizaciones(): Observable<{ success: boolean; message: string; data: Cotizacion[] }> {
  return this.http.get<{ success: boolean; message: string; data: Cotizacion[] }>(this.baseUrl);
  }

  updateCotizacion(id: string, data: Partial<Cotizacion>): Observable<any> {
  return this.http.patch(`${this.baseUrl}/${id}`, data);
  }

  deleteCotizacion(id: string): Observable<any> {
  return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
