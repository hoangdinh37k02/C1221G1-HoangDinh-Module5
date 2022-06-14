import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  detailProduct: Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private route: Router) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.detailProduct = this.productService.findById(parseInt(id));
      }
    })
  }

  ngOnInit(): void {
    this.productService.deleteProduct(this.detailProduct);
    this.route.navigateByUrl('/product/list');
  }

}
