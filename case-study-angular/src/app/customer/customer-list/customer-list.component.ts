import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerIdToDelete: string;
  p: string | number = 0;
  constructor(private customerService: CustomerService) {
    this.customers = customerService.getList();
  }

  ngOnInit(): void {
  }

  sendCustomerToDelete(customerId: string) {
    this.customerIdToDelete = customerId;
  }
}
