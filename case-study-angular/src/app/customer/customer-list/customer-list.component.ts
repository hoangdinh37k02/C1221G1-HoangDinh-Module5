import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('searchByName') searchByName: ElementRef;
  @ViewChild('searchByPhone') searchByPhone: ElementRef;
  @ViewChild('searchByType') searchByType: ElementRef;
  constructor(private customerService: CustomerService, private route: Router) {

  }

  ngOnInit(): void {
    this.customerService.search('', '', '').subscribe(customer => this.customers = customer);
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

  search() {
    console.log(this.searchByName.nativeElement.value);
    console.log(this.searchByPhone.nativeElement.value);
    console.log(this.searchByType.nativeElement.value);
    this.customerService.search(this.searchByName.nativeElement.value,
      this.searchByPhone.nativeElement.value,
      this.searchByType.nativeElement.value).subscribe(customers => {
      this.customers = customers;
      console.log(customers);
    },  e => {
      console.log(e);
      });
  }
}
