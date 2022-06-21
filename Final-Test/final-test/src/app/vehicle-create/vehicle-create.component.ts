import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../service/vehicle.service";
import {Router} from "@angular/router";
import {Company} from "../model/company";
import {CompanyService} from "../service/company.service";

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {
  vehicleForm: FormGroup;
  companies: Company[] = [];
  constructor(private vehicleService: VehicleService, private route: Router,private companyService: CompanyService) {

  }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(companies => {
      this.companies = companies;
      console.log(companies)
      this.vehicleForm = new FormGroup({
        id: new FormControl(),
        loaiXe: new FormControl('', [Validators.required]),
        nhaXe: new FormControl('', Validators.required),
        diemDi: new FormControl('', Validators.required),
        diemDen: new FormControl('', Validators.required),
        soDienThoai: new FormControl('', [Validators.required,
          Validators.pattern(/^((09)[0,3,7]{1}\d{7})$/)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        gioDi: new FormControl('', [Validators.required,
          Validators.pattern(/^([0,1]\d\:[0-5][0:9])|((2)[0-3]\:[0-5][0:9])$/)]),
        gioDen: new FormControl('', [Validators.required,
          Validators.pattern(/^([0,1]\d\:[0-5][0:9])|((2)[0-3]\:[0-5][0:9])$/)]),
      });
    })
  }

  onSubmit() {
    if (this.vehicleForm.valid) {
      this.vehicleService.addVehicle(this.vehicleForm.value).subscribe(() => {
        alert('Creation Successful');
      }, e => {
        console.log(e);
      }, () => {
        this.route.navigate(['/vehicle-list']);
      });
    }
  }
}
