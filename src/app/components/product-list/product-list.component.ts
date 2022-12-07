import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productsList: Product[] = [];

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsList = this.productsService.getProducts();
  }
}
