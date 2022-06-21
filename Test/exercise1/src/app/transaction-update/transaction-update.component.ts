import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TransactionService} from "../service/transaction.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-transaction-update',
  templateUrl: './transaction-update.component.html',
  styleUrls: ['./transaction-update.component.css']
})
export class TransactionUpdateComponent implements OnInit {
  id: number;
  updateForm: FormGroup;
  customers: Customer [];
  constructor(private transactionService: TransactionService, private activatedRoute: ActivatedRoute,
              private route: Router, private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = parseInt(paramMap.get('id'));
        console.log(this.id)
        this.getTransaction(this.id);
      });
    })
  }

  getTransaction(id: number){

    return this.transactionService.findById(id).subscribe(transaction => {
      this.updateForm = new FormGroup({
        id: new FormControl(transaction.id),
        transactionCode: new FormControl(transaction.transactionCode,[Validators.required,
          Validators.pattern(/^(MGD)(-)\d{4}$/)]),
        customer: new FormControl(transaction.customer, Validators.required),
        transactionDay: new FormControl(transaction.transactionDay, Validators.required),
        type: new FormControl(transaction.type, Validators.required),
        price: new FormControl(transaction.price, [Validators.required, Validators.min(100000)]),
        square: new FormControl(transaction.square, [Validators.required, Validators.min(20)])
      })
      console.log(this.updateForm);
    })
  }
  onSubmit(id: number) {
    const transaction = this.updateForm.value;
    this.transactionService.updateTransaction(id, transaction).subscribe(() => {
      alert('successful');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['transaction']);
    });
  }
  equals = (item1, item2) => {
    return item1 && item2 && item1.id === item2.id;
  }

}
