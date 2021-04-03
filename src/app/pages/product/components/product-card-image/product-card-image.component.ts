import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-image',
  templateUrl: './product-card-image.component.html',
  styleUrls: ['./product-card-image.component.scss'],
})
export class ProductCardImageComponent implements OnInit {
  @Input('url')
  public url: string = '';

  constructor() {}

  ngOnInit(): void {}
}
