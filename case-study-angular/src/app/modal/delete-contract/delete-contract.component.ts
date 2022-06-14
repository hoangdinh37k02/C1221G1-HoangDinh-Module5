import {Component, Input, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrls: ['./delete-contract.component.css']
})
export class DeleteContractComponent implements OnInit {
  @Input() contractIdToDelete: string;
  @Input() contractToDelete: Contract;
  constructor() { }

  ngOnInit(): void {
  }

  deleteContract() {
    return this.contractIdToDelete;
  }
}
