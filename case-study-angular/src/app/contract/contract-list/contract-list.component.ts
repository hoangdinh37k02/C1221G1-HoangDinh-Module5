import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  @ViewChild('searchByServiceName') searchByServiceName: ElementRef;
  @ViewChild('searchByCustomer') searchByCustomer: ElementRef;
  contracts: Contract [] = [];
  customers: Customer [] = [];
  contractIdToDelete: string;
  p: string | number = 0;
  constructor(private contractService: ContractService, private route: Router,
              private customerService: CustomerService) {
    }

  ngOnInit(): void {
    this.contractService.search('', '').subscribe(contract => {
      this.contracts = contract;
      this.customerService.getAll().subscribe(customers => {
        this.customers = customers;
      });
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

  search() {
    console.log(this.searchByServiceName.nativeElement.value);
    console.log(this.searchByCustomer.nativeElement.value);
    this.contractService.search(this.searchByServiceName.nativeElement.value,
      this.searchByCustomer.nativeElement.value).subscribe(contract => {
      this.contracts = contract;
      console.log(contract);
    },  e => {
      console.log(e);
    });
  }
}
