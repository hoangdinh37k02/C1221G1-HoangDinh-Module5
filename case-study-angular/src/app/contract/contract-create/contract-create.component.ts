import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  createContractForm: FormGroup;

  constructor(private contractService: ContractService, private route: Router) {
    this.createContractForm = new FormGroup({
      contractId: new FormControl('', [Validators.required, Validators.pattern(/^[H]{1}[D]{1}[-]{1}[0-9]{4}$/)]),
      customerName: new FormControl('', Validators.required),
      serviceName: new FormControl('', Validators.required),
      startDay: new FormControl('', Validators.required),
      endDay: new FormControl('', Validators.required),
      deposit: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      total: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createContractForm.value);
    if (this.createContractForm.valid) {
      this.contractService.addContract(this.createContractForm.value);
      this.route.navigate(['/list']);
    }
  }
}
