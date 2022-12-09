import {Injectable} from '@angular/core';
import {CartProduct} from "../cartProduct";
import {Observable} from "rxjs";
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  total: number = 0;

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

  constructor(private http: HttpClient) {
    this.cart.forEach((product => {
      this.total = this.total += (product.price * product.quantity);
    }));
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:4200/assets/data.json');
  }

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
