import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../product";
import {CartProduct} from "../../cartProduct";
import {ProductsService} from "../../services/products.service";
import {CartService} from "../../services/cart.service";

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

  constructor(private productsService: ProductsService, private cartService: CartService) {
    this.orderTotal = cartService.total;
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.orderTotal = this.cartService.total;
  }

  onSubmit() {
    this.cartService.clearCart();
    this.showConfirmation = true;
  }

  getTotal() {
    this.orderTotal = this.cartService.total;
    this.cart = this.cartService.getCart();
  }

  updatename(arg: string) {
    this.fullName = arg;
  }

}
