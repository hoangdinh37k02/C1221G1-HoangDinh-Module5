import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Vehicle} from "../model/vehicle";
import {Company} from "../model/company";
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(API_URL + '/vehicle/company-list');
  }
}
