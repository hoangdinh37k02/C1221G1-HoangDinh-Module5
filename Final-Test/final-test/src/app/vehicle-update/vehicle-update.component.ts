import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../service/vehicle.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Company} from "../model/company";
import {CompanyService} from "../service/company.service";

@Component({
  selector: 'app-vehicle-update',
  templateUrl: './vehicle-update.component.html',
  styleUrls: ['./vehicle-update.component.css']
})
export class VehicleUpdateComponent implements OnInit {
  vehicleForm: FormGroup;
  id: number;
  companies: Company[] = [];
  constructor(private vehicleService: VehicleService, private route: Router,
              private activatedRoute: ActivatedRoute, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getAll().subscribe(companies => {
      this.companies = companies;
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = parseInt(paramMap.get('id'));
        console.log(this.id);
        this.getVehicle(this.id);
      });
    });
  }
  getVehicle(id: number) {
    return this.vehicleService.findById(id).subscribe(vehicle => {
      console.log(vehicle);
      this.vehicleForm = new FormGroup({
        id: new FormControl(vehicle.id),
        loaiXe: new FormControl(vehicle.loaiXe, [Validators.required]),
        nhaXe: new FormControl(vehicle.nhaXe, Validators.required),
        diemDi: new FormControl(vehicle.diemDi, Validators.required),
        diemDen: new FormControl(vehicle.diemDen, Validators.required),
        soDienThoai: new FormControl(vehicle.soDienThoai, [Validators.required,
          Validators.pattern(/^((09)[0,3,7]{1}\d{7})$/)]),
        email: new FormControl(vehicle.email, [Validators.required, Validators.email]),
        gioDi: new FormControl(vehicle.gioDi, [Validators.required,
          Validators.pattern(/^([0,1]\d\:[0-5][0:9])|((2)[0-3]\:[0-5][0:9])$/)]),
        gioDen: new FormControl(vehicle.gioDen, [Validators.required,
          Validators.pattern(/^([0,1]\d\:[0-5][0:9])|((2)[0-3]\:[0-5][0:9])$/)]),
      });
    });
  }
  onSubmit(id: number) {
    const vehicle = this.vehicleForm.value;
    this.vehicleService.updateVehicle(id, vehicle).subscribe(() => {
      alert('Cập nhật thành công');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['vehicle-list']);
    });
  }
  equals = (item1, item2) => {
    return item1 && item2 && item1.id === item2.id;
  }

}
