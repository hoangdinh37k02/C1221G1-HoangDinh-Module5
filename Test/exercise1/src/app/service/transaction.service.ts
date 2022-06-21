import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaction} from "../model/transaction";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(API_URL + '/transaction');
  }
  delete(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${API_URL}/transaction/${id}`)
  }
  addTransaction(transaction): Observable<Transaction> {
    return this.http.post<Transaction>(API_URL + '/transaction', transaction);
  }
  search(value1: any, value2: any): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${API_URL}/transaction?transactionCode_like=${value1}&customer.customerCode_like=${value2}`);
  }
  findById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${API_URL}/transaction/${id}`);

  }
  updateTransaction(id: number, transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${API_URL}/transaction/${id}`, transaction);
  }

}
