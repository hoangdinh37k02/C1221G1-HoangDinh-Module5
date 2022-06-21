import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Product} from '../model/product';
import {map} from 'rxjs/operators';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/product');
  }
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }
  search(value1: any, value2: any): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/product?productName_like=${value1}&type.name_like=${value2}`);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(API_URL + '/product', product);
  }
  findById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/product/${id}`);

  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/product/${id}`, product);
  }
}
