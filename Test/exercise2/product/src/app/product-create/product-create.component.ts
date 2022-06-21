import { Component, OnInit } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Type} from '../model/type';
import {ProductService} from '../service/product.service';
import {TypeService} from '../service/type.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;
  types: Type[] = [];
  constructor(private productService: ProductService,
              private typeService: TypeService,
              private route: Router) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      productCode: new FormControl('', [Validators.required, Validators.pattern(/^(S)(-)\d{3}$/)]),
      productName: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(100000)]),
      quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    });
  }

  ngOnInit(): void {
    this.typeService.getAll().subscribe(types => {
      this.types = types;
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        alert('Creation Successful');
      }, e => {
        console.log(e);
      }, () => {
        this.route.navigate(['/product-list']);
      });
    }
  }

}
