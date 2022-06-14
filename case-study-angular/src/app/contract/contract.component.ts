import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';
import {ContractService} from '../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract [] = [];
  contractIdToDelete: string;
  constructor(private contractService: ContractService) {
    this.contracts = contractService.getList();
    }

  ngOnInit(): void {
  }

  sendContractToDelete(contractId: string) {
    this.contractIdToDelete = contractId;
  }
}
