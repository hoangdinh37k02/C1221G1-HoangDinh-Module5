import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from "../service/vehicle.service";
import {Vehicle} from "../model/vehicle";
import {CompanyService} from "../service/company.service";
import {Company} from "../model/company";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  @ViewChild('loaiXe') loaiXe: ElementRef;
  @ViewChild('soDienThoai') soDienThoai: ElementRef;
  vehicles: Vehicle[] = [];
  companies: Company[] = [];
  idToDelete: number;
  p: string | number = 0;
  constructor(private vehicleService: VehicleService, private companyService: CompanyService) { }

  ngOnInit(): void {
    // this.companyService.getAll().subscribe(companies => {
    //   this.companies = companies;
    //   this.vehicleService.search('','').subscribe(vehicles => {
    //     this.vehicles = vehicles;
    //   })
    //
    //   console.log(this.vehicles);
    // })
    // this.vehicleService.getAll().subscribe(vehicles => {
    //   this.vehicles = vehicles;
    // })
    // console.log(this.vehicles)
    this.vehicleService.search('','').subscribe(vehicles => {
      this.vehicles = vehicles.content;
    })

  }


  sendVehicleId(id: number) {
    this.idToDelete = id;
  }

  deleteVehicle(idToDelete: number) {
    this.vehicleService.delete(idToDelete).subscribe(() => {
      alert('Xóa thành công');
    },  e => {
      console.log(e);
    }, () => {
      this.ngOnInit();
    });
  }

  search() {
    console.log(this.loaiXe.nativeElement.value);
    console.log(this.soDienThoai.nativeElement.value);
    this.vehicleService.search(this.loaiXe.nativeElement.value,
      this.soDienThoai.nativeElement.value).subscribe(response => {
      this.vehicles = response.content;
      console.log(response.content);
    },  e => {
      console.log(e);
    });
  }
}
