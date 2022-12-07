import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {
  @Input() id: number = 0;
  @Input() name: string = "Name";
  @Input() price: number = 0;
  @Input() imageUrl: string = '';

  constructor() {
  }

  ngOnInit(): void {

  }
}
