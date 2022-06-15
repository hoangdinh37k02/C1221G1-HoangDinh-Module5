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
  detailFacility: Facility;
  facilityForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private facilityService: FacilityService, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.detailFacility = this.facilityService.findById(id);
      }
    });
  }

  ngOnInit(): void {
    this.facilityForm = new FormGroup({
      facilityId: new FormControl(this.detailFacility.facilityId),
      facilityName: new FormControl(this.detailFacility.facilityName, [Validators.required, Validators.pattern(/^([^0-9]*)$/)]),
      area: new FormControl(this.detailFacility.area, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      cost: new FormControl(this.detailFacility.cost, Validators.required),
      maxPeople: new FormControl(this.detailFacility.maxPeople, Validators.required),
      url: new FormControl(this.detailFacility.url, Validators.required),
      serviceType: new FormControl(this.detailFacility.serviceType, Validators.required),
      standard: new FormControl(this.detailFacility.standard, Validators.required),
      other: new FormControl(this.detailFacility.other, Validators.required),
      poolArea: new FormControl(this.detailFacility.poolArea, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      floor: new FormControl(this.detailFacility.floor, [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    });
  }

  onSubmit() {
    const facility: Facility = this.facilityForm.value;
    if (this.facilityForm.valid) {
      this.facilityService.updateFacility(facility);
      this.route.navigateByUrl('/facility/list');
    }
  }
}
