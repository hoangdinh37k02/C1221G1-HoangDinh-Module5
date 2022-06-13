import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        passwordConfirm: new FormControl()
      }, [ this.comparePassword]),
      gender: new FormControl(),
      age: new FormControl('', [Validators.required, Validators.pattern(/^([1]{1}[8-9]{1})|([2-9]{1}[0-9]{1})$/)]),
      phone: new FormControl('', [Validators.pattern(/^[+]{1}[8]{1}[4]{1}[0-9]{9,10}$/)]),
      email: new FormControl('', [Validators.email]),
      country: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  comparePassword(c: AbstractControl) {

    const v = c.value;

    if (v.password !== v.passwordConfirm) {
      return {invalid1: true};
    } else {
      return null;
    }
  }


  onSubmit() {
    console.log(this.registerForm);
  }
}
