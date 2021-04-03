import { ImageUrlDTO } from './../../../../pms-products-sdk/model/imageUrlDTO';
import { ProductAttributeEntry } from './../../model/product-attribute-entry';
import { BrandDTO } from './../../../../pms-products-sdk/model/brandDTO';
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

  @Input('brand')
  public set _brand(val: BrandDTO) {
    this.brand = val;
  }

  public brand: BrandDTO = {};

  @Input('productAttributes')
  public set _attributes(val: ProductAttributeEntry[]) {
    this.attributes = val;
  }

  public attributes: Array<ProductAttributeEntry> = [];

  @Input('images')
  public images: Array<ImageUrlDTO> = [];

  @Input('size')
  public sizeConfig: SizeConfig = {};

  @Output('productClicked')
  public clickedEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public select(event: Event): void {
    event.stopPropagation();
    this.clickedEvent.emit();
  }
}

export interface SizeConfig {
  height?: string;
  width?: string;
}
