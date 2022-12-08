import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart: Product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
}
