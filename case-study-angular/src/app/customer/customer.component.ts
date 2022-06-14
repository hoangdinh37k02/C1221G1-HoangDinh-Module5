import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerService} from '../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  customerName: string;
  constructor(private customerService: CustomerService) {
    this.customers = customerService.getList();
  }

  ngOnInit(): void {
  }

  sendCustomerToDelete(customerName: string) {
    this.customerName = customerName;
  }
}
