import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Type} from '../model/type';
import {ProductService} from '../service/product.service';
import {TypeService} from '../service/type.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  types: Type[] = [];

  constructor(private productService: ProductService,
              private typeService: TypeService,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.typeService.getAll().subscribe(types => {
      this.types = types;
      this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
        this.id = parseInt(paramMap.get('id'));
        console.log(this.id);
        this.getProduct(this.id);
      });
    });
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      console.log(product);
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        productCode: new FormControl(product.productCode, [Validators.required, Validators.pattern(/^(S)(-)\d{3}$/)]),
        productName: new FormControl(product.productName, Validators.required),
        type: new FormControl(product.type, Validators.required),
        price: new FormControl(product.price, [Validators.required, Validators.min(100000)]),
        quantity: new FormControl(product.quantity, [Validators.required, Validators.min(1)]),
      });

    });
  }
  onSubmit(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(() => {
      alert('Updating successful');
    }, e => {
      console.log(e);
    }, () => {
      this.route.navigate(['product-list']);
    });
  }
  equals = (item1, item2) => {
    return item1 && item2 && item1.id === item2.id;
  }

}
