import { ProductResourceService } from './../../../../pms-products-sdk/api/productResource.service';
import { ProductDTO } from './../../../../pms-products-sdk/model/productDTO';
import { Component, OnInit, Input } from '@angular/core';
import { ImageUrlDTO } from 'src/app/pms-products-sdk';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public set productId(id: number) {
    this.productService.getProductUsingGET(id).subscribe((res) => {
      this.product = res;
      this.images.push({ url: this.product.previewImageUrl });
    });
    this.productService
      .getProductImagesUsingGET(id)
      .subscribe((images) => this.images.push.apply(this.images, images));
  }

  public product: ProductDTO = {};
  public images: ImageUrlDTO[] = [];

  constructor(
    private productService: ProductResourceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    this.productId = param ? +param : -1;
  }

  categoryClicked(): void {
    console.log('category clicked');
  }
}
