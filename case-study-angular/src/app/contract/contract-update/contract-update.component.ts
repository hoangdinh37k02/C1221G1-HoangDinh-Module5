import { Component, OnInit } from '@angular/core';
import {Contract} from '../../model/contract';
import {ContractService} from '../../service/contract.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-contract-update',
  templateUrl: './contract-update.component.html',
  styleUrls: ['./contract-update.component.css']
})
export class ContractUpdateComponent implements OnInit {
  id: string;
  contractForm: FormGroup;
  customers: Customer [];
  facilities: Facility [];
  equals = (item1, item2) => {
    return item1 && item2 && item1.id === item2.id;
  }
  constructor(private contractService: ContractService, private activatedRoute: ActivatedRoute, private route: Router,
              private customerService: CustomerService, private facilityService: FacilityService) {
    // activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.id = paramMap.get('id');
    //   console.log(this.id);
    //   this.getContract(this.id);
    //   console.log(this.getContract(this.id));
    // });
  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(customers => {
      this.customers = customers;
      this.facilityService.getAll().subscribe(facilities => {
        this.facilities = facilities;
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
          this.id = paramMap.get('id');
          console.log(this.id);
          this.getContract(this.id);
          console.log(this.getContract(this.id));
        });
      });
    });


  }
  getContract(id: string) {
    return this.contractService.findById(id).subscribe(detailContract => {
      this.contractForm = new FormGroup({
        id: new FormControl(detailContract.id),
        customer: new FormControl(detailContract.customer, Validators.required),
        facility: new FormControl(detailContract.facility, Validators.required),
        startDay: new FormControl(detailContract.startDay, Validators.required),
        endDay: new FormControl(detailContract.endDay, Validators.required),
        deposit: new FormControl(detailContract.deposit, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
        total: new FormControl(detailContract.total, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      });
    });
  }

  onSubmit(id: string) {
    const contract = this.contractForm.value;
    this.contractService.updateContract(id, contract).subscribe(() => {
      alert('successful');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['contract/list']);
    });
  }
}
