import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "../model/vehicle";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) {

  }
  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(API_URL + '/vehicle/list');
  }
  delete(id: number): Observable<Vehicle> {
    return this.http.delete<Vehicle>(`${API_URL}/vehicle/delete/${id}`);
  }
  findById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${API_URL}/vehicle/list/${id}`);

  }
  updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${API_URL}/vehicle/update/${id}`, vehicle);
  }
  addVehicle(vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(API_URL + '/vehicle/create', vehicle);
  }
  search(value1: any, value2: any): Observable<Vehicle[]> {
      return this.http.get<Vehicle[]>(`${API_URL}/vehicle/list?loaiXe=${value1}&soDienThoai=${value2}`);
    }
}
