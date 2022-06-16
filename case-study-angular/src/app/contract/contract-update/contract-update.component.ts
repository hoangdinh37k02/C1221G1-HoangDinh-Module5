import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  detailContract: Contract;
  contractForm: FormGroup;
  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.detailContract = this.contractService.findById(id);
      }
    });
  }

  ngOnInit(): void {
    this.contractForm = new FormGroup({
      contractId: new FormControl(this.detailContract.id),
      customerName: new FormControl(this.detailContract.customer, Validators.required),
      serviceName: new FormControl(this.detailContract.customer, Validators.required),
      startDay: new FormControl(this.detailContract.startDay, Validators.required),
      endDay: new FormControl(this.detailContract.endDay, Validators.required),
      deposit: new FormControl(this.detailContract.deposit, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      total: new FormControl(this.detailContract.total, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    });
  }

  onSubmit() {
    const contract: Contract = this.contractForm.value;
    if (this.contractForm.valid) {
      this.contractService.updateContract(contract);
      this.route.navigateByUrl('/list');
    }
  }
}
