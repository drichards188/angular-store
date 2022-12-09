import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../product";
import {CartProduct} from "../../cartProduct";
import {ProductsService} from "../../services/products.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product: Product = {id: 0, name: '', price: 0, description: '', url: ''};
  @Input() cartProduct: CartProduct = {id: 0, name: '', price: 0, description: '', url: '', quantity: 0};
  @Input() isCart: boolean = false;
  @Output() signalUpdateEvent = new EventEmitter<boolean>();
  productQuantity: number = 1;

  newQuantity: number = 1;

  constructor(private productService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    if (this.isCart) {
      this.product = {id: this.cartProduct.id, url: this.cartProduct.url, name: this.cartProduct.name, price: this.cartProduct.price, description: this.cartProduct.description}
      this.productQuantity = this.cartProduct.quantity;
    }
  }

  addToCart(isUpdate: boolean): void {
    this.cartService.addProduct(this.product, this.newQuantity, isUpdate);
    this.signalUpdateEvent.emit(true);
    this.newQuantity = 1;
    alert('added to cart');
  }

  removeFromCart(): void {
    this.cartService.removeProduct(this.product.id);
    this.signalUpdateEvent.emit(true);
    alert('product removed from cart');
  }
}
