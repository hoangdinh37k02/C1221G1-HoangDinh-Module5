import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  display(s: string) {

    (document.getElementById('result') as HTMLInputElement).value += s;

    return s;
  }

  solve() {
    let y = (document.getElementById("result") as HTMLInputElement).value;
    let x = eval(y);
    (document.getElementById("result")as HTMLInputElement).value = x;
    return x;
  }

  clearScreen() {
    (document.getElementById("result")as HTMLInputElement).value="";
  }
}
