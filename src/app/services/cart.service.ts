import { Injectable } from '@angular/core';
import {CartProduct} from "../cartProduct";
import {Product} from "../product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  total: number = 0;

  cart: CartProduct[] = [

  ];
  constructor() { this.cart.forEach((product => {
    this.total = this.total += (product.price * product.quantity);
  }));}


  getCart(): CartProduct[] {
    return this.cart;
  }

  addProduct(newProduct: Product, quantity: number, isUpdate: boolean) {
    const found = this.cart.find(product => product.id === newProduct.id);

    if (found) {
      const foundIndex = this.cart.findIndex(product => product.id === newProduct.id);
      const oldQuantity = this.cart[foundIndex].quantity;
      if (typeof quantity === "string") {
        if (!isUpdate) {
          const total = parseInt(quantity) + oldQuantity;
          this.cart[foundIndex].quantity = total;
        } else {
          this.cart[foundIndex].quantity = parseInt(quantity);
        }
        this.updateTotalPrice();
        return;
      }
      this.cart[foundIndex].quantity = quantity;
      this.updateTotalPrice();
      return;

    } else {
      const cartNewProduct = {...newProduct, quantity: quantity}
      this.cart.push(cartNewProduct);
      this.updateTotalPrice();
      return;
    }
  }

  removeProduct(productId: number): boolean {
    this.cart = this.cart.filter(product => product.id !== productId);
    return true;
  }

  clearCart(): boolean {
    this.cart = [];
    return true;
  }

  updateTotalPrice(): void {
    let total: number = 0;
    this.cart.forEach(product => total += (product.price * product.quantity));
    let finalTotal = total.toFixed(2)
    this.total = parseFloat(finalTotal);
  }
}
