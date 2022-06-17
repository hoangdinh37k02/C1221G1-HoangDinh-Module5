import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customers: Customer[] = [];
  constructor(private http: HttpClient) {
    // this.customers.push({customerId: 'KH-1001', customerName: 'Nguyen Van A',
    //   gender: 'Nam', dateOfBirth: '2000/03/23', identify: '191795002', address: '33 Dinh Tien Hoang', phone: '0905007888',
    //   email: 'a@gmail.com', type: 'Diamond'});
    //
    // this.customers.push({customerId: 'KH-1002', customerName: 'Tran Nhat Thuy',
    //   gender: 'Nu', dateOfBirth: '2000/03/23', identify: '201799088', address: '12 Nguyen Xuan', phone: '0973667712',
    //   email: 'thuy@gmail.com', type: 'Gold'});
    //
    // this.customers.push({customerId: 'KH-1003', customerName: 'Nguyen Van A',
    //   gender: 'Nam', dateOfBirth: '2000/03/23', identify: '191795002', address: '12 Nguyen Hoang', phone: '0905007888',
    //   email: 'a@gmail.com', type: 'Diamond'});
    //
    // this.customers.push({customerId: 'KH-1004', customerName: 'Hoang Nhat Minh',
    //   gender: 'Nam', dateOfBirth: '1998/04/23', identify: '191795002', address: '324 Nguyen Hoang', phone: '0976772881',
    //   email: 'minh@gmail.com', type: 'Member'});
    //
    // this.customers.push({customerId: 'KH-1005', customerName: 'Dang Ngoc Ngan',
    //   gender: 'Nu', dateOfBirth: '1990/12/23', identify: '191795002', address: '425 Le Son', phone: '0905007888',
    //   email: 'ngan@gmail.com', type: 'Platinum'});
    // this.customers.push({customerId: 'KH-1006', customerName: 'Tran Thanh Nhan',
    //   gender: 'Nu', dateOfBirth: '2002/03/08', identify: '191795002', address: '1023 Ton Duc Thang', phone: '0935666728',
    //   email: 'nhan@gmail.com', type: 'Silver'});

  }
  // getList() {
  //   return this.customers;
  // }
  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(API_URL + '/customers');
  }
  // addCustomer(customer: Customer) {
  //   this.customers.push(customer);
  // }
  addCustomer(customer): Observable<Customer> {
    return this.http.post<Customer>(API_URL + '/customers', customer);
  }
  // deleteContract(id: string) {
  //   for (let i = 0; i < this.customers.length ; i++) {
  //     if (id === this.customers[i].id) {
  //       this.customers.splice(i, 1);
  //     }
  //   }
  // }
  deleteCustomer(id: string): Observable<Customer> {
    return this.http.delete<Customer>(`${API_URL}/customers/${id}`);
  }
  // findById(id: string): Customer {
  //   for (let i = 0; i < this.customers.length ; i++) {
  //     if (id === this.customers[i].id) {
  //       return this.customers[i];
  //     }
  //   }
  // }
  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/customers/${id}`);
  }

  // updateCustomer(customer) {
  //   for (let i = 0; i < this.customers.length ; i++) {
  //     if (customer.id === this.customers[i].id) {
  //       this.customers[i] = customer;
  //     }
  //   }
  // }
  updateCustomer(id: string, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${API_URL}/customers/${id}`, customer);
  }

  search(value1: any, value2: any, value3: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/customers?customerName_like=${value1}&phone_like=${value2}&type_like=${value3}`);
  }
}
