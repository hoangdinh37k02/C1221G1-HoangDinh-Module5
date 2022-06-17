import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';
import {element} from 'protractor';
import {Customer} from '../model/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contracts: Contract [] = [];
  constructor(private http: HttpClient) {
    // this.contracts.push({contractId: 'HD-1001', customerName: 'Nguyen Thanh Son', serviceName: 'Ocean Suite', startDay: '2022-03-14',
    //   endDay: '2022-04-22', deposit: '5000000', total: '10000000'});
    // this.contracts.push({contractId: 'HD-1002', customerName: 'Nguyen Thi Thuy', serviceName: 'Ocean Suite', startDay: '2022-04-14',
    //   endDay: '2022-04-22', deposit: '3000000', total: '17000000'});
    // this.contracts.push({contractId: 'HD-1003', customerName: 'Tran Văn Hung', serviceName: 'Ocean Suite', startDay: '2022-06-24',
    //   endDay: '2022-07-22', deposit: '7000000', total: '14000000'});
    // this.contracts.push({contractId: 'HD-1004', customerName: 'Nguyen Thuy Hien', serviceName: 'Ocean Suite', startDay: '2022-03-14',
    //   endDay: '2022-03-16', deposit: '1000000', total: '12000000'});
    // this.contracts.push({contractId: 'HD-1005', customerName: 'Pham Ngoc Ha', serviceName: 'Ocean Suite', startDay: '2022-07-14',
    //   endDay: '2022-07-22', deposit: '10000000', total: '12000000'});
  }
  // getList() {
  //   return this.contracts;
  // }
  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(API_URL + '/contracts');
  }
  // addContract(contract: Contract) {
  //   this.contracts.push(contract);
  // }
  addContract(contract): Observable<Contract> {
    return this.http.post<Contract>(API_URL + '/contracts', contract);
  }
  // deleteContract(id: string) {
  //   for (let i = 0; i < this.contracts.length ; i++) {
  //     if (id === this.contracts[i].id) {
  //       this.contracts.splice(i, 1);
  //     }
  //   }
  // }
  deleteContract(id: string): Observable<Contract> {
    return this.http.delete<Contract>(`${API_URL}/contracts/${  id}`);
  }
  // findById(id: string): Contract {
  //   for (let i = 0; i < this.contracts.length ; i++) {
  //     if (id === this.contracts[i].id) {
  //       return this.contracts[i];
  //     }
  //   }
  // }
  findById(id: string): Observable<Contract> {
    return this.http.get<Contract>(`${API_URL}/contracts/${id}`);
  }

  // updateContract(contract) {
  //   for (let i = 0; i < this.contracts.length ; i++) {
  //     if (contract.contractId === this.contracts[i].id) {
  //       this.contracts[i] = contract;
  //     }
  //   }
  // }
  updateContract(id: string, contract: Contract): Observable<Contract> {
    return this.http.put<Contract>(`${API_URL}/contracts/${id}`, contract);
  }

  search(value1: any, value2: any): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${API_URL}/contracts?facility.facilityName_like=${value1}&customer.customerName_like=${value2}`);
  }
}
