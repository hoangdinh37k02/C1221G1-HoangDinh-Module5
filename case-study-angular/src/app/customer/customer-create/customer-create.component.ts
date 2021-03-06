import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {CustomerService} from '../../service/customer.service';
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
      id: new FormControl('', [Validators.required, Validators.pattern(/^[K]{1}[H]{1}[-]{1}[0-9]{4}$/)]),
      customerName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      dateOfBirth: new FormControl(),
      identify: new FormControl('', Validators.pattern(/^([0-9]{9})|([0-9]{12})$/)),
      address: new FormControl(),
      phone: new FormControl('', Validators.pattern(/^((0)\d{9)$/)),
      email: new FormControl('', Validators.email),
      type: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.createStudentFrom.valid) {
      this.customerService.addCustomer(this.createStudentFrom.value).subscribe(() => {
        this.createStudentFrom.reset();
        alert('Successful');
      }, e => {
        console.log(e);
      }, () => {
          this.route.navigate(['customer/list']);
      });
    }
  }
}
