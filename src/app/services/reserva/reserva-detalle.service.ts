import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReservaDto } from 'src/app/models/reserva/reserva';
import { ReservaRequestDto } from 'src/app/models/reserva/reversarequest';

@Injectable({
  providedIn: 'root'
})
export class ReservaDetalleService {


  private baseUrl = 'http://localhost:8080/api/v1/reserva';

  constructor(private http: HttpClient) { }

  // Métodos para la tabla reserva
  getAllReservas(): Observable<ReservaDto[]> {
    return this.http.get<ReservaDto[]>(`${this.baseUrl}/obtener`);
  }

  getReservaById(id_reserva: number): Observable<ReservaDto> {
    return this.http.get<ReservaDto>(`${this.baseUrl}/obtener/${id_reserva}`);
  }

  getReservasByEstado(estado: string): Observable<ReservaDto[]> {
    return this.http.get<ReservaDto[]>(`${this.baseUrl}/obtener/estado/${estado}`);
  }

  editarReserva(id: number, reservaDto: ReservaDto): Observable<ReservaDto> {
    return this.http.put<ReservaDto>(`${this.baseUrl}/editar/${id}`, reservaDto);
  }

  desactivarReserva(id_reserva: number): Observable<ReservaDto> {
    return this.http.put<ReservaDto>(`${this.baseUrl}/desactivar/${id_reserva}`, null);
  }

  restaurarReserva(id_reserva: number): Observable<ReservaDto> {
    return this.http.put<ReservaDto>(`${this.baseUrl}/restaurar/${id_reserva}`, null);
  }



  // Métodos para reservas anidadas
  getAllReservasWithDetails(): Observable<ReservaDto[]> {
    return this.http.get<ReservaDto[]>(`${this.baseUrl}/transaccional-reserva/obtener`);
  }

  getReservaWithDetails(id_reserva: number): Observable<ReservaDto> {
    return this.http.get<ReservaDto>(`${this.baseUrl}/transaccional-reserva/obtener/${id_reserva}`);
  }

  getReservasWithDetailsByEstado(estado: string): Observable<ReservaDto[]> {
    return this.http.get<ReservaDto[]>(`${this.baseUrl}/transaccional-reserva/obtener/estado/${estado}`);
  }

  crearReserva(reservaRequestDto: ReservaRequestDto): Observable<ReservaDto> {
    return this.http.post<ReservaDto>(`${this.baseUrl}/transaccional-reserva/crear`, reservaRequestDto);
  }

  anularReserva(id_reserva: number): Observable<ReservaDto> {
    return this.http.post<ReservaDto>(`${this.baseUrl}/transaccional-reserva/anular/${id_reserva}`, null);
  }

  confirmarReserva(id_reserva: number): Observable<ReservaDto> {
    return this.http.post<ReservaDto>(`${this.baseUrl}/transaccional-reserva/confirmar/${id_reserva}`, null);
  }
}