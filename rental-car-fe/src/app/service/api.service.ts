import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  register(user: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    address: string;
    phone_number: string;
    driver_license_number: string;
  }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiUrl}/logout`, {});
  }

  getCars(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cars`);
  }

  addCar(car: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/cars`, car);
  }

  getRentals(): Observable<any> {
    return this.http.get(`${this.apiUrl}/rentals`);
  }

  addRental(rental: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/rentals`, rental);
  }

  returnCar(carId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/rentals/${carId}`);
  }
}
