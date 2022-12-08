import { Injectable } from '@angular/core';
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = []
  constructor() { }

  getCart(): Product[] {
    return this.cart;
  }

  addProduct(newProduct: Product): boolean {
    this.cart.push(newProduct);
    return true;
  }

  removeProduct(productId: number): boolean {
    const newCart= this.cart.find(product => product.id !== productId);
    alert(JSON.stringify(newCart));
    return true;
  }

  clearCart(): boolean {
    this.cart = [];
    return true;
  }
}
