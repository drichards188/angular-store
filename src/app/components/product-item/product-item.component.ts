import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../product";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() product: Product = {id: 0, name: '', price: 0, description: '', url: ''};

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {

  }

  addToCart(): void {
    const resp = this.cartService.addProduct(this.product);
    if (!resp) {
      alert('problem adding product to cart');
    }
  }
}
