import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() name: string = "Name";
  @Input() price: number = 0;
  @Input() imageUrl: string = '';

  constructor() {
  }

  ngOnInit(): void {
    // this.name = "Hotel Room";
    // this.price = 89;
    // this.url = 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'

  }
}
