import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit{
  productId: number = 0;
  selectedProduct: Product = {id:0, name: 'placeholder', description:'desc placeholder', price:0, url:''};
  productsList: Product[] = [{id:0, name: 'placeholder', description:'desc placeholder', price:0, url:''}];
  constructor(private route: ActivatedRoute, private productsService: ProductsService){}

  ngOnInit(): void {
    // @ts-ignore
    this.productId = parseInt(this.route.url._value[1]);

    this.productsService.getProducts().subscribe(products => {
      this.productsList = products;
    });

    const foundProduct = this.productsList.find(product => product.id === this.productId)!;
    if (foundProduct) {
      this.selectedProduct = foundProduct;
    } else {
      alert('product not found');
    }
  }

  addToCart(): void {

  }

  removeFromCart(): void {
    this.productsService.removeProduct(this.selectedProduct.id);
  }
}
