import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  detailProduct: Product;
  productForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.detailProduct = this.productService.findById(parseInt(id));
      }
    })
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(this.detailProduct.id),
      name: new FormControl(this.detailProduct.name),
      price: new FormControl(this.detailProduct.price),
      description: new FormControl(this.detailProduct.description),
    });
  }

  submit() {
    const product = this.productForm.value;
    this.productService.updateProduct(product);
    this.route.navigateByUrl('/product/list');
  }
}
