import { Component, OnInit } from '@angular/core';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  customerIdToDelete: string;
  p: string | number = 0;
  constructor(private customerService: CustomerService, private route: Router) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
  }
  sendCustomerToDelete(customerId: string) {
    this.customerIdToDelete = customerId;
  }
  delete(customerIdToDelete: string) {
    this.customerService.deleteCustomer(customerIdToDelete).subscribe(() => {
      alert('Successful');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['/customer/list']);
    });
  }
}
