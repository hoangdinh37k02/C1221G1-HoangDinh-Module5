import { Component, OnInit } from '@angular/core';
import {Facility} from '../model/facility';
import {FacilityService} from '../service/facility.service';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilities: Facility [] = [];
  facilityToDelete: string;
  constructor(private facilityService: FacilityService) {
    this.facilities = facilityService.getList();
  }

  ngOnInit(): void {
  }


  sendFacilityToDelete(facilityName: string) {
    this.facilityToDelete = facilityName;
  }
}
