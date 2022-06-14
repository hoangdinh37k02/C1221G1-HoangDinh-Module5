import {Component, Input, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-contract',
  templateUrl: './delete-contract.component.html',
  styleUrls: ['./delete-contract.component.css']
})
export class DeleteContractComponent implements OnInit {
  @Input() contractIdToDelete: string;
  constructor(private contractService: ContractService, private route: Router) { }

  ngOnInit(): void {
  }

  delete(contractIdToDelete: string) {
    this.contractService.deleteContract(contractIdToDelete);
    this.route.navigateByUrl('/contract');
  }
}
