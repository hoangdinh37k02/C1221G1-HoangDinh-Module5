import {Component, Input, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-facility',
  templateUrl: './delete-facility.component.html',
  styleUrls: ['./delete-facility.component.css']
})
export class DeleteFacilityComponent implements OnInit {
  @Input() facilityToDelete: string;
  constructor(private facilityService: FacilityService, private route: Router) { }

  ngOnInit(): void {
  }

  // delete(facilityToDelete: string) {
  //   this.facilityService.deleteFacility(facilityToDelete);
  // }
  // delete(customerIdToDelete: string) {
  //   this.facilityService.deleteFacility(customerIdToDelete).subscribe(() => {
  //     alert('Successful');
  //   }, e => {
  //     console.log(e);
  //   }, () => {
  //     this.route.navigate(['/facility/list']);
  //   });
  // }
}
