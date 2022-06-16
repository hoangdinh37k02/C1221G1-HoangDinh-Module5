import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract [] = [];
  contractIdToDelete: string;
  p: string | number = 0;
  constructor(private contractService: ContractService, private route: Router) {
    }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(contracts => {
      this.contracts = contracts;
    });
  }
  sendContractToDelete(contractId: string) {
    this.contractIdToDelete = contractId;
  }

  delete(contractIdToDelete: string) {
    this.contractService.deleteContract(contractIdToDelete).subscribe(() => {
      alert('Successful');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['/contract/list']);
    });
  }
}
