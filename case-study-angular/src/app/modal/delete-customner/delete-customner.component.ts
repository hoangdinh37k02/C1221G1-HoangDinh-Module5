import {Component, Input, OnInit} from '@angular/core';
import {CustomerService} from '../../service/customer.service';

@Component({
  selector: 'app-delete-customner',
  templateUrl: './delete-customner.component.html',
  styleUrls: ['./delete-customner.component.css']
})
export class DeleteCustomnerComponent implements OnInit {
  @Input() customerIdToDelete: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  delete(customerIdToDelete: string) {
    this.customerService.deleteContract(customerIdToDelete);
  }
}
