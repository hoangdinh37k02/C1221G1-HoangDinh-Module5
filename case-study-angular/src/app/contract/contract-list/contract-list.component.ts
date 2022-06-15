import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract [] = [];
  contractIdToDelete: string;
  p: string | number = 0;
  constructor(private contractService: ContractService) {
    this.contracts = contractService.getList();
    }

  ngOnInit(): void {
  }

  sendContractToDelete(contractId: string) {
    this.contractIdToDelete = contractId;
  }
}
