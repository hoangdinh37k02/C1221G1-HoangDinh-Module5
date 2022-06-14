import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-delete-customner',
  templateUrl: './delete-customner.component.html',
  styleUrls: ['./delete-customner.component.css']
})
export class DeleteCustomnerComponent implements OnInit {
  @Input() customerName: string;
  constructor() { }

  ngOnInit(): void {
  }

}
