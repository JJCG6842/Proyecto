import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  
  private apiUrl = 'http://localhost:3000/reserva';

  constructor(private http: HttpClient) {}

  crearReserva(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  obtenerReservas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  eliminarReservaPorId(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  eliminarReservaPorDni(dni: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/dni/${dni}`);
  }
}
