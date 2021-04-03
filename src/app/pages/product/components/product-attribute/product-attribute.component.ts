import { ProductAttributeEntry } from './../../model/product-attribute-entry';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-attribute',
  templateUrl: './product-attribute.component.html',
  styleUrls: ['./product-attribute.component.scss'],
})
export class ProductAttributeComponent implements OnInit {
  @Input('attribute')
  public attribute: ProductAttributeEntry = {};

  constructor() {}

  ngOnInit(): void {}
}
