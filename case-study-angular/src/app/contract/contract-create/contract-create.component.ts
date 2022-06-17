import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../../service/contract.service';
import {Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {Facility} from '../../model/facility';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  createContractForm: FormGroup;
  customers: Customer [];
  facilities: Facility [];

  constructor(private contractService: ContractService, private route: Router,
              private customerService: CustomerService, private facilityService: FacilityService) {

    this.createContractForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^[H]{1}[D]{1}[-]{1}[0-9]{4}$/)]),
      customer: new FormControl('', Validators.required),
      facility: new FormControl('', Validators.required),
      startDay: new FormControl('', Validators.required),
      endDay: new FormControl('', Validators.required),
      deposit: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      total: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    });
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
    });
    this.facilityService.getAll().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  onSubmit() {
    if (this.createContractForm.valid) {
      this.contractService.addContract(this.createContractForm.value).subscribe(() => {
        this.createContractForm.reset();
        alert('Successful');
      }, e => {
        console.log(e);
      }, () => {
        this.route.navigate(['/contract/list']);
      });
    }
  }
}
