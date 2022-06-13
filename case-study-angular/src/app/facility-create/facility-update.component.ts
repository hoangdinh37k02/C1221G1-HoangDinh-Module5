import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-facility-update',
  templateUrl: './facility-update.component.html',
  styleUrls: ['./facility-update.component.css']
})
export class FacilityUpdateComponent implements OnInit {
  createFacilityForm: FormGroup;
  constructor() {
    this.createFacilityForm = new FormGroup({
      facilityId: new FormControl('', [Validators.required, Validators.pattern(/^[D]{1}[V]{1}[-]{1}[0-9]{4}$/)]),
      facilityName: new FormControl('', [Validators.required, Validators.pattern(/^([^0-9]*)$/)]),
      area: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      cost: new FormControl('', Validators.required),
      maxPeople: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      url: new FormControl('', Validators.required),
      serviceType: new FormControl('', Validators.required),
      standard: new FormControl('', Validators.required),
      other: new FormControl('', Validators.required),
      poolArea: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
      floor: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]{1}[0-9]{0,}$/)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.createFacilityForm.value);
  }
}
