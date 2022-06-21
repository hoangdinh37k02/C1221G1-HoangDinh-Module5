import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Type} from '../model/type';
import {ProductService} from '../service/product.service';
import {TypeService} from '../service/type.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @ViewChild('searchByName') searchByName: ElementRef;
  @ViewChild('searchByType') searchByType: ElementRef;
  types: Type[] = [];
  products: Product[] = [];
  p: string | number = 0;
  idToDelete: number;
  productName: string;
  constructor(private productService: ProductService,
              private typeService: TypeService) { }

  ngOnInit(): void {
    this.productService.search('', '').subscribe(products => {
      this.products = products;
      this.typeService.getAll().subscribe(types => {
        this.types = types;
      });
    });
  }
  search() {
    this.productService.search(this.searchByName.nativeElement.value,
      this.searchByType.nativeElement.value).subscribe(products => {
      this.products = products;
      // console.log(transactions);
    },  e => {
      console.log(e);
    });
  }

  sendTransactionId(id: number, productName: string) {
    this.idToDelete = id;
    this.productName = productName;
  }

  deleteTransaction(idToDelete: number) {
    this.productService.delete(idToDelete).subscribe(() => {
      alert('Deleting Successful');
    },  e => {
      console.log(e);
    }, () => {
      this.ngOnInit();
    });
  }
}
