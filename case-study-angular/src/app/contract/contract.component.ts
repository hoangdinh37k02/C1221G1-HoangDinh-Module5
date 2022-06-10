import { Component, OnInit } from '@angular/core';
import {Contract} from '../model/contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract [] = [];
  constructor() {
    this.contracts.push({contractId: 'HD-1001', customerName: 'Nguyen Thanh Son', serviceName: 'Ocean Suite', startDay: '2022-03-14',
    endDay: '2022-04-22', deposit: '5000000', total: '10000000'});
    this.contracts.push({contractId: 'HD-1002', customerName: 'Nguyen Thi Thuy', serviceName: 'Ocean Suite', startDay: '2022-04-14',
      endDay: '2022-04-22', deposit: '3000000', total: '17000000'});
    this.contracts.push({contractId: 'HD-1003', customerName: 'Tran Văn Hung', serviceName: 'Ocean Suite', startDay: '2022-06-24',
      endDay: '2022-07-22', deposit: '7000000', total: '14000000'});
    this.contracts.push({contractId: 'HD-1004', customerName: 'Nguyen Thuy Hien', serviceName: 'Ocean Suite', startDay: '2022-03-14',
      endDay: '2022-03-16', deposit: '1000000', total: '12000000'});
    this.contracts.push({contractId: 'HD-1005', customerName: 'Pham Ngoc Ha', serviceName: 'Ocean Suite', startDay: '2022-07-14',
      endDay: '2022-07-22', deposit: '10000000', total: '12000000'});
  }

  ngOnInit(): void {
  }

}
