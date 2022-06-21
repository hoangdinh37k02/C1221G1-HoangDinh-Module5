import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {Type} from '../model/type';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Type[]> {
    return this.http.get<Type[]>(API_URL + '/type');
  }
}
