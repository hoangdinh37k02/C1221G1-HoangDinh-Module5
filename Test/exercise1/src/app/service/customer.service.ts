import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Customer} from "../model/customer";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {

  }
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }
}
