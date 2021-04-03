import { BrandResourceService } from './pms-products-sdk/api/brandResource.service';
import { ImageUrlResourceService } from './pms-products-sdk/api/imageUrlResource.service';
import { ProductResourceService } from './pms-products-sdk/api/productResource.service';
import { Component, OnInit } from '@angular/core';
import { ProductDTO } from './pms-products-sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'products-service-gui';

  product: ProductDTO = {};

  constructor(
    public productService: ProductResourceService,
    public imageService: ImageUrlResourceService,
    public brandService: BrandResourceService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProductUsingGET(1)
      .subscribe((res) => (this.product = res));
  }
}
