import {Injectable} from '@angular/core';
import {Product} from "../product";
import {CartProduct} from "../cartProduct";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartProduct[] = [
    {
      "id": 1,
      "name": "Book",
      "price": 9.99,
      "url": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "You can read it!",
      "quantity": 2
    },
    {
      "id": 2,
      "name": "Headphones",
      "price": 249.99,
      "url": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "description": "Listen to stuff!",
      "quantity": 1
    }
    ];

  constructor() {
  }

  getCart(): CartProduct[] {
    return this.cart;
  }

  addProduct(newProduct: Product): boolean {
    const cartNewProduct = {...newProduct, quantity: 1}
    this.cart.push(cartNewProduct);
    return true;
  }

  removeProduct(productId: number): boolean {
    const newCart = this.cart.find(product => product.id !== productId);
    alert(JSON.stringify(newCart));
    return true;
  }

  clearCart(): boolean {
    this.cart = [];
    return true;
  }
}
