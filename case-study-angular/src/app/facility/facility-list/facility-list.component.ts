import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility [] = [];
  facilityToDelete: string;
  p: string | number = 0;
  constructor(private facilityService: FacilityService, private route: Router) {
    this.facilityService.getAll().subscribe(facility => {
      this.facilities = facility;
    });
  }

  ngOnInit(): void {
    this.facilityService.getAll().subscribe(facility => {
      this.facilities = facility;
  })  ;
  }
  sendFacilityToDelete(facilityId: string) {
    this.facilityToDelete = facilityId;
  }
  delete(facilityToDelete: string) {
    this.facilityService.deleteFacility(facilityToDelete).subscribe(() => {
      alert('Successful');
      this.ngOnInit();
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['/facility/list']);
    });
  }
}
