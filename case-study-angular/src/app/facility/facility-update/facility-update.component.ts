import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../../service/customer.service';
import {FacilityService} from '../../service/facility.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  id: string;
  facilityForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private facilityService: FacilityService, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get('id');
      this.getFacility(this.id);
    });
  }

  ngOnInit(): void {
    // this.facilityForm = new FormGroup({
    //   id: new FormControl(this.detailFacility.id),
    //   facilityName: new FormControl(this.detailFacility.facilityName, [Validators.required, Validators.pattern(/^([^0-9]*)$/)]),
    //   area: new FormControl(this.detailFacility.area, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    //   cost: new FormControl(this.detailFacility.cost, Validators.required),
    //   maxPeople: new FormControl(this.detailFacility.maxPeople, Validators.required),
    //   url: new FormControl(this.detailFacility.url, Validators.required),
    //   serviceType: new FormControl(this.detailFacility.serviceType, Validators.required),
    //   standard: new FormControl(this.detailFacility.standard, Validators.required),
    //   other: new FormControl(this.detailFacility.other, Validators.required),
    //   poolArea: new FormControl(this.detailFacility.poolArea, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    //   floor: new FormControl(this.detailFacility.floor, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    // });
  }
  getFacility(id: string) {
    return this.facilityService.findById(id).subscribe(detailFacility => {
      this.facilityForm = new FormGroup({
        id: new FormControl(detailFacility.id),
        facilityName: new FormControl(detailFacility.facilityName, [Validators.required, Validators.pattern(/^([^0-9]*)$/)]),
        area: new FormControl(detailFacility.area, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
        cost: new FormControl(detailFacility.cost, Validators.required),
        maxPeople: new FormControl(detailFacility.maxPeople, Validators.required),
        url: new FormControl(detailFacility.url, Validators.required),
        serviceType: new FormControl(detailFacility.serviceType, Validators.required),
        standard: new FormControl(detailFacility.standard, Validators.required),
        other: new FormControl(detailFacility.other, Validators.required),
        poolArea: new FormControl(detailFacility.poolArea, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
        floor: new FormControl(detailFacility.floor, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      });
    });
  }

  onSubmit(id: string) {
    const facility: Facility = this.facilityForm.value;
    this.facilityService.updateFacility(id, facility).subscribe(() => {
      alert('successful');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['/facility/list']);
    });
  }
}
