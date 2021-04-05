import { ProductDTO } from './../../../../pms-products-sdk/model/productDTO';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('product')
  public set _product(val: ProductDTO) {
    this.product = val;
  }

  public product: ProductDTO = {};

  @Output('productClicked')
  public clickedEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public select(event: Event): void {
    event.stopPropagation();
    this.clickedEvent.emit();
  }
}
