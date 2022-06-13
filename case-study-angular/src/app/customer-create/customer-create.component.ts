import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerComponent} from '../customer/customer.component';
import {CustomerService} from '../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  createStudentFrom: FormGroup;

  constructor(private customerService: CustomerService, private route: Router) {
    this.createStudentFrom = new FormGroup({
      customerId: new FormControl('', [Validators.required, Validators.pattern(/^[K]{1}[H]{1}[-]{1}[0-9]{4}$/)]),
      customerName: new FormControl('', Validators.required),
      gender: new FormControl(),
      dateOfBirth: new FormControl(),
      identify: new FormControl('', Validators.pattern(/^([0-9]{9})|([0-9]{12})$/)),
      address: new FormControl(),
      phone: new FormControl('', Validators.pattern(/^([0]{1}[9]{1}[0]{1}[0-9]{7})|([0]{1}[9]{1}[1]{1}[0-9]{7})$/)),
      email: new FormControl('', Validators.email),
      type: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createStudentFrom);
    if (this.createStudentFrom.valid) {
      console.log(this.createStudentFrom.value);
      this.customerService.addCustomer(this.createStudentFrom.value);
      this.route.navigate(['/customer']);
    }
  }
}
