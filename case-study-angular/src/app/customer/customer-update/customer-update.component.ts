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
  id: string;
  customerForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getCategory(this.id);
    });
  }

  ngOnInit(): void {
    // this.customerForm = new FormGroup({
    //   customerId: new FormControl(this.detailCustomer.id),
    //   customerName: new FormControl(this.detailCustomer.customerName, Validators.required),
    //   gender: new FormControl(this.detailCustomer.gender, Validators.required),
    //   dateOfBirth: new FormControl(this.detailCustomer.dateOfBirth),
    //   identify: new FormControl(this.detailCustomer.identify, Validators.pattern(/^([0-9]{9})|([0-9]{12})$/)),
    //   address: new FormControl(this.detailCustomer.address),
    //   phone: new FormControl(this.detailCustomer.phone, Validators.pattern(/^([0]{1}[9]{1}[0]{1}[0-9]{7})|([0]{1}[9]{1}[1]{1}[0-9]{7})$/)),
    //   email: new FormControl(this.detailCustomer.email, Validators.email),
    //   type: new FormControl(this.detailCustomer.type)
    // });
  }

  getCategory(id: string) {
    return this.customerService.findById(id).subscribe(detailCustomer => {
      this.customerForm = new FormGroup({
        id: new FormControl(detailCustomer.id),
        customerName: new FormControl(detailCustomer.customerName, Validators.required),
        gender: new FormControl(detailCustomer.gender, Validators.required),
        dateOfBirth: new FormControl(detailCustomer.dateOfBirth),
        identify: new FormControl(detailCustomer.identify, Validators.pattern(/^([0-9]{9})|([0-9]{12})$/)),
        address: new FormControl(detailCustomer.address),
        phone: new FormControl(detailCustomer.phone, Validators.pattern
        (/^([0]{1}[9]{1}[0]{1}[0-9]{7})|([0]{1}[9]{1}[1]{1}[0-9]{7})$/)),
        email: new FormControl(detailCustomer.email, Validators.email),
        type: new FormControl(detailCustomer.type)
      });
    });
  }

  // onSubmit() {
  //   const customer: Customer = this.customerForm.value;
  //   if (this.customerForm.valid) {
  //     this.customerService.updateCustomer(customer);
  //     this.route.navigateByUrl('/list');
  //   }
  // }
  onSubmit(id: string) {
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() => {
      alert('successful');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['customer/list']);
    });
  }
}
