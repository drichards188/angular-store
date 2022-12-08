import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../product";
import {CartProduct} from "../../cartProduct";
import {ProductsService} from "../../services/products.service";

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

  newQuantity: number = 0;

  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    if (this.isCart) {
      this.product = {id: this.cartProduct.id, url: this.cartProduct.url, name: this.cartProduct.name, price: this.cartProduct.price, description: this.cartProduct.description}
      this.productQuantity = this.cartProduct.quantity;
    }
  }

  onSubmit() {
    alert(`quantity: ${this.productQuantity}`);
    const resp = this.productService.addProduct(this.product, this.productQuantity);
    if (!resp) {
      alert('problem adding product to cart');
    }
    this.signalUpdateEvent.emit(true);
  }

  addToCart(): void {
    const resp = this.productService.addProduct(this.product, this.newQuantity);
    if (!resp) {
      alert('problem adding product to cart');
    }
    this.signalUpdateEvent.emit(true);
  }

  removeFromCart(): void {
    this.productService.removeProduct(this.product.id);
    this.signalUpdateEvent.emit(true);
  }
}
