import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TransactionService} from "../service/transaction.service";
import {Transaction} from "../model/transaction";
import {CustomerService} from "../service/customer.service";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  @ViewChild('searchByCode') searchByCode: ElementRef;
  @ViewChild('searchByCustomer') searchByCustomer: ElementRef;

  transactions: Transaction[] = [];
  customers: Customer[] = [];
  transactionIdToDelete: number;
  transactionCode: string;
  p: string | number = 0;
  constructor(private transactionService: TransactionService,
              private customerService: CustomerService) { }

  ngOnInit(): void {
    this.transactionService.search('', '').subscribe(transactions => {
      this.transactions = transactions;
      this.customerService.getAll().subscribe(customers => {
        this.customers = customers;
      })
    })
  }

  sendTransactionId(id: number, code: string) {
    this.transactionIdToDelete = id;
    this.transactionCode = code;
  }

  deleteTransaction(transactionIdToDelete: number) {
    this.transactionService.delete(transactionIdToDelete).subscribe(() => {
      alert("Deleting successful!");
    }, e => {
      console.log(e)
    }, () => {
      this.ngOnInit();
    })
  }

  search() {
    this.transactionService.search(this.searchByCode.nativeElement.value,
      this.searchByCustomer.nativeElement.value).subscribe(transactions => {
      this.transactions = transactions;
      console.log(transactions);
    },  e => {
      console.log(e);
    });
  }

}
