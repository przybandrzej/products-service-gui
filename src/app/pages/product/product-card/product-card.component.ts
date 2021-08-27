import { ProductDTO } from '../../../pms-products-sdk/model/productDTO';
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
    if (this.product.previewImageUrl) {
      this.preveiw = this.product.previewImageUrl;
    }
  }

  public product: ProductDTO = {};

  @Output('productClicked')
  public clickedEvent: EventEmitter<void> = new EventEmitter();

  @Output('mouseIn')
  public mouseInEvent: EventEmitter<void> = new EventEmitter();

  @Output('mouseOut')
  public mouseOutEvent: EventEmitter<void> = new EventEmitter();

  public preveiw: string = 'assets/488px-no-image.png';

  constructor() {}

  ngOnInit(): void {}

  public select(event: Event): void {
    event.stopPropagation();
    this.clickedEvent.emit();
  }

  public onMouseEnter(event: Event): void {
    event.stopPropagation();
    this.mouseInEvent.emit();
  }

  public onMouseLeave(event: Event): void {
    event.stopPropagation();
    this.mouseOutEvent.emit();
  }
}
