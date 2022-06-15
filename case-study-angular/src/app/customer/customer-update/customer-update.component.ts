import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {
  detailCustomer: Customer;
  customerForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.detailCustomer = this.customerService.findById(id);
      }
    });
  }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      customerId: new FormControl(this.detailCustomer.customerId),
      customerName: new FormControl(this.detailCustomer.customerName, Validators.required),
      gender: new FormControl(this.detailCustomer.gender, Validators.required),
      dateOfBirth: new FormControl(this.detailCustomer.dateOfBirth),
      identify: new FormControl(this.detailCustomer.identify, Validators.pattern(/^([0-9]{9})|([0-9]{12})$/)),
      address: new FormControl(this.detailCustomer.address),
      phone: new FormControl(this.detailCustomer.phone, Validators.pattern(/^([0]{1}[9]{1}[0]{1}[0-9]{7})|([0]{1}[9]{1}[1]{1}[0-9]{7})$/)),
      email: new FormControl(this.detailCustomer.email, Validators.email),
      type: new FormControl(this.detailCustomer.type)
    });
  }

  onSubmit() {
    const customer: Customer = this.customerForm.value;
    if (this.customerForm.valid) {
      this.customerService.updateCustomer(customer);
      this.route.navigateByUrl('/list');
    }
  }
}
