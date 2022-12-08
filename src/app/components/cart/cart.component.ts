import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product";
import {CartProduct} from "../../cartProduct";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: CartProduct[] = [];
  fullName: string = '';
  address: string = '';
  cardNumber: string = '';
  showConfirmation: boolean = false;
  orderTotal: number = 0;

  constructor(private productsService: ProductsService) {
    this.orderTotal = productsService.total;
  }

  ngOnInit() {
    this.cart = this.productsService.getCart();
    this.orderTotal = this.productsService.total;
  }

  onSubmit() {
    this.productsService.clearCart();
    this.showConfirmation = true;
  }

  getTotal() {
    this.orderTotal = this.productsService.total;
  }
}
