import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../service/transaction.service";
import {Transaction} from "../model/transaction";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];
  transactionIdToDelete: number;
  transactionCode: string;
  p: string | number = 0;
  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAll().subscribe(transactions => {
      this.transactions = transactions;
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
}
