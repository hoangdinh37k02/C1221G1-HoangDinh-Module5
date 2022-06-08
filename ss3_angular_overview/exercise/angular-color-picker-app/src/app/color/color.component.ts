import { Component, OnInit } from '@angular/core';
export interface Interface {

}
@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colorRGB = {R: 255, G: 100, B: 0}
 hexColor="#0fff00";
  constructor() { }

  ngOnInit(): void {
  }


}
