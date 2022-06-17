import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../service/transaction.service";
import {CustomerService} from "../service/customer.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  transactionForm: FormGroup;
  customers: Customer [];
  constructor(private transactionService: TransactionService,
              private customerService: CustomerService, private route: Router) {
    this.transactionForm = new FormGroup({
      id: new FormControl(),
      transactionCode: new FormControl('',[Validators.required, Validators.pattern(/^(MGD)(-)\d{4}$/)]),
      customer: new FormControl('', Validators.required),
      transactionDay: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      square: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    });
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customer => {
      this.customers = customer;
    })
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      this.transactionService.addTransaction(this.transactionForm.value).subscribe(() => {
        alert('Successful');
      }, e => {
        console.log(e);
      }, () => {
        this.route.navigate(['/transaction']);
      });
    }
  }
}
