import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilities: Facility [] = [];
  facilityToDelete: string;
  p: string | number = 0;
  constructor(private facilityService: FacilityService) {
    this.facilities = facilityService.getList();
  }

  ngOnInit(): void {
  }


  sendFacilityToDelete(facilityId: string) {
    this.facilityToDelete = facilityId;
  }
}
