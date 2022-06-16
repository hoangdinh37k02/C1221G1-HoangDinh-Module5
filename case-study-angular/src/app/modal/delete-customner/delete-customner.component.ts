import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-customner',
  templateUrl: './delete-customner.component.html',
  styleUrls: ['./delete-customner.component.css']
})
export class DeleteCustomnerComponent implements OnInit {
  @Input() customerIdToDelete: string;
  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {
  }

  // delete(customerIdToDelete: string) {
  //   this.customerService.deleteCustomer(customerIdToDelete).subscribe(() => {
  //     alert('Successful');
  //   }, e => {
  //     console.log(e);
  //   }, () => {
  //     this.route.navigate(['/customer/list']);
  //   });
  // }
}
