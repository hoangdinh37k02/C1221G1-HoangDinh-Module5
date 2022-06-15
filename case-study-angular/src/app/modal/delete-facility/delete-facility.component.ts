import {Component, Input, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';

@Component({
  selector: 'app-delete-facility',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.css']
})
export class DeleteFacilityComponent implements OnInit {
  @Input() facilityToDelete: string;
  constructor(private facilityService: FacilityService) { }

  ngOnInit(): void {
  }

  delete(facilityToDelete: string) {
    this.facilityService.deleteFacility(facilityToDelete);
  }
}
