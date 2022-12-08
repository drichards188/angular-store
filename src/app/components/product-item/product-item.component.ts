import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../product";
import {CartProduct} from "../../cartProduct";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product: Product = {id: 0, name: '', price: 0, description: '', url: ''};
  @Input() cartProduct: CartProduct = {id: 0, name: '', price: 0, description: '', url: '', quantity: 0};
  @Input() isCart: boolean = false;
  productQuantity: number = 0;

  newQuantity: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    if (this.isCart) {
      this.product = {id: this.cartProduct.id, url: this.cartProduct.url, name: this.cartProduct.name, price: this.cartProduct.price, description: this.cartProduct.description}
      this.productQuantity = this.cartProduct.quantity;
    }
  }

  onSubmit() {
    alert(`quantity: ${this.productQuantity}`);
  }

  changeQuantity(): void {
    alert(this.newQuantity);
    this.productQuantity = this.newQuantity;
  }

  addToCart(): void {
    const resp = this.cartService.addProduct(this.product);
    if (!resp) {
      alert('problem adding product to cart');
    }
  }

  removeFromCart(): void {
    this.cartService.removeProduct(this.product.id);
  }

}
