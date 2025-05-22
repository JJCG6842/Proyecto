import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../interface/reserva.interface';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private apiUrl = 'http://localhost:3000/reserva';

  constructor(private http: HttpClient) {}

  crearReserva(data: Reserva): Observable<ApiResponse<Reserva>> {
    return this.http.post<ApiResponse<Reserva>>(`${this.apiUrl}/create`, data);
  }

  obtenerReservas(): Observable<ApiResponse<Reserva[]>> {
    return this.http.get<ApiResponse<Reserva[]>>(this.apiUrl);
  }

  editarReserva(id: string, data: Partial<Reserva>): Observable<ApiResponse<Reserva>> {
    return this.http.patch<ApiResponse<Reserva>>(`${this.apiUrl}/${id}`, data);
  }

  eliminarReservaPorId(id: string): Observable<ApiResponse<Reserva>> {
    return this.http.delete<ApiResponse<Reserva>>(`${this.apiUrl}/${id}`);
  }

  eliminarReservaPorDni(dni: string): Observable<ApiResponse<Reserva>> {
    return this.http.delete<ApiResponse<Reserva>>(`${this.apiUrl}/dni/${dni}`);
  }
}