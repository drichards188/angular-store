import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../product";
import {CartProduct} from "../../cartProduct";

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

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  onSubmit() {
    this.cartService.clearCart();
    this.showConfirmation = true;
  }
}
