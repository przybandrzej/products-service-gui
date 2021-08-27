import { ProductFDTO } from './../../../pms-products-sdk/model/productFDTO';
import { ProductResourceService } from './../../../pms-products-sdk/api/productResource.service';
import { Component, OnInit } from '@angular/core';
import { ImageUrlDTO } from 'src/app/pms-products-sdk';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  public set productId(id: number) {
    this.productService.getProductFullInfoUsingGET(id).subscribe((res) => {
      this.product = res;
      if (this.product.previewImageUrl) {
        this.images.push({ url: this.product.previewImageUrl });
      } else {
        this.images.push({ url: this.default });
      }
    });
    this.productService
      .getProductImagesUsingGET(id)
      .subscribe((images) => this.images.push.apply(this.images, images));
  }

  public product: ProductFDTO = {};
  public images: ImageUrlDTO[] = [];

  private default: string = 'assets/488px-no-image.png';

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
