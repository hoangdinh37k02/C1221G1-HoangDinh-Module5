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
  contract: Contract;
  constructor(private contractService: ContractService) {
    this.contracts = contractService.getList();
    }

  ngOnInit(): void {
  }

  sendContractToDelete(contractId: string, contractToDelete: Contract) {
    this.contractIdToDelete = contractId;
    this.contract = contractToDelete;
    // console.log(this.contract);
  }
}
