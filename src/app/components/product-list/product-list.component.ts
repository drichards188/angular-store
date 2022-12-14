import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsList: Product[] = [];

  httpProductList: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(products => {
      this.productsList = products;
    });
  }
}
