import { Router } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { ImageUrlResourceService } from './../../../../pms-products-sdk/api/imageUrlResource.service';
import { forkJoin, merge, Observable } from 'rxjs';
import { ProductResourceService } from './../../../../pms-products-sdk/api/productResource.service';
import { CategoryResourceService } from './../../../../pms-products-sdk/api/categoryResource.service';
import { CategoryDTO } from './../../../../pms-products-sdk/model/categoryDTO';
import { BrandResourceService } from './../../../../pms-products-sdk/api/brandResource.service';
import { ShopResourceService } from './../../../../pms-products-sdk/api/shopResource.service';
import { BrandDTO } from './../../../../pms-products-sdk/model/brandDTO';
import { ShopDTO } from './../../../../pms-products-sdk/model/shopDTO';
import { CurrencyResourceService } from './../../../../pms-products-sdk/api/currencyResource.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyDTO, ImageUrlDTO, ProductDTO } from 'src/app/pms-products-sdk';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  firstFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public currencies: CurrencyDTO[] = [];
  public brands: BrandDTO[] = [];
  public shops: ShopDTO[] = [];
  public brandsNames: string[] = [];
  public shopsNames: string[] = [];
  public imagesToAdd: string[] = [];
  public imageToAdd: string = '';
  public categories: CategoryDTO[] = [];
  public categoryNames: string[] = [];
  public categoriesToAdd: string[] = [];
  public loading: boolean = false;
  public progressMessage: string = 'Creating...';
  public shopsToAdd: string[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private currencyService: CurrencyResourceService,
    private shopService: ShopResourceService,
    private brandService: BrandResourceService,
    private categoryService: CategoryResourceService,
    private productService: ProductResourceService,
    private imageService: ImageUrlResourceService,
    private router: Router
  ) {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      subtitle: [''],
      price: [],
      currency: [],
      brand: [''],
      shop: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      category: [''],
    });
  }

  ngOnInit(): void {
    this.currencyService.getAllCurrenciesUsingGET().subscribe((res) => {
      this.currencies = res;
      const tmp = this.currencies.filter((it) => it.symbol === 'PLN');
      const plnId = tmp.length > 0 ? (tmp[0].id ? tmp[0].id : -1) : -1;
      this.firstFormGroup.get('currency')?.setValue(plnId);
    });
    this.brandService.getAllBrandsUsingGET().subscribe((res) => {
      this.brands = res;
      this.brandsNames = this.brands.map((it) => (it.name ? it.name : ''));
    });
    this.shopService.getAllShopsUsingGET().subscribe((res) => {
      this.shops = res;
      this.shopsNames = this.shops.map((it) => (it.name ? it.name : ''));
    });
    this.categoryService.getAllCategoriesUsingGET().subscribe((res) => {
      this.categories = res;
      this.categoryNames = this.categories.map((it) =>
        it.name ? it.name : ''
      );
    });
  }

  public brandChange(value: string): void {
    console.log(value);
    this.firstFormGroup.get('brand')?.setValue(value);
  }

  public shopChange(value: string): void {
    this.firstFormGroup.get('shop')?.setValue(value);
  }

  public addShop(event: Event): void {
    event.stopPropagation();
    const value = this.firstFormGroup.get('shop')?.value;
    this.firstFormGroup.get('shop')?.setValue('');
    this.shopsToAdd.push(value);
  }

  public addImage(event: Event): void {
    event.stopPropagation();
    if (this.imageToAdd.length === 0) {
      return;
    }
    this.imagesToAdd.push(this.imageToAdd);
    this.imageToAdd = '';
  }

  public categoryChange(value: string): void {
    console.log(value);
    this.thirdFormGroup.get('category')?.setValue(value);
  }

  public addCategory(event: Event): void {
    event.stopPropagation();
    if (this.thirdFormGroup.get('category')?.value.length === 0) {
      return;
    }
    this.categoriesToAdd.push(this.thirdFormGroup.get('category')?.value);
    this.thirdFormGroup.get('category')?.setValue('');
  }

  public create(event: Event): void {
    event.stopPropagation();
    this.progressMessage = 'Preparing structures...';
    this.loading = true;

    //create brand data
    let brandCreateReq: Observable<BrandDTO> | undefined;
    let brandId: number;
    const brandName = this.firstFormGroup.get('brand')?.value;
    if (brandName.length > 0) {
      let brand = this.brands.find(
        (it) => it.name?.toLowerCase() === brandName.toLowerCase()
      );
      if (!brand) {
        brandCreateReq = this.brandService.createBrandUsingPOST({
          name: brandName,
        });
      } else {
        brandId = brand.id ? brand.id : -1;
      }
    }

    //create shops data
    let shopsCreateReq: Observable<ShopDTO>[] = [];
    let shopsIds: number[] = [];
    if (this.shopsToAdd.length > 0) {
      for (const shopName of this.shopsToAdd) {
        let shop = this.shops.find(
          (it) => it.name?.toLowerCase() === shopName.toLowerCase()
        );
        if (!shop) {
          shopsCreateReq.push(
            this.shopService.createShopUsingPOST({
              name: shopName,
            })
          );
        } else {
          shopsIds.push(shop.id ? shop.id : -1);
        }
      }
    }

    let imagePreveiwCreateReq: Observable<ImageUrlDTO> | undefined;
    if (this.imagesToAdd.length > 0) {
      imagePreveiwCreateReq = this.imageService.createImageUrlUsingPOST({
        url: this.imagesToAdd[0],
      });
    }

    const priceVal = this.firstFormGroup.get('price')?.value;
    const productDto: ProductDTO = {
      name: this.firstFormGroup.get('name')?.value,
      subtitle: this.firstFormGroup.get('subtitle')?.value,
      price: priceVal,
      currencyId: priceVal
        ? this.firstFormGroup.get('currency')?.value
        : undefined,
      shops: [],
      categories: [],
    };
    const productReq: Observable<ProductDTO> = new Observable<ProductDTO>(
      (subscriber) => {
        subscriber.next(productDto);
        subscriber.complete();
      }
    );

    productReq
      .pipe(
        mergeMap((product) => {
          this.progressMessage = 'Creating brand...';
          if (brandCreateReq) {
            return brandCreateReq?.pipe(
              map((brand) => {
                product.brandId = brand.id;
                return product;
              })
            );
          } else {
            if (brandId) {
              product.brandId = brandId;
            }
            return new Observable<ProductDTO>((subscriber) => {
              subscriber.next(product);
              subscriber.complete();
            });
          }
        }),
        mergeMap((product) => {
          this.progressMessage = 'Creating shops...';
          let obs = new Observable<ProductDTO>((subscriber) => {
            subscriber.next(product);
            subscriber.complete();
          });
          if (shopsCreateReq.length > 0) {
            obs = obs.pipe(
              mergeMap((product) => {
                return forkJoin(shopsCreateReq).pipe(
                  map((shops) => {
                    shops.forEach((shop) => product.shops?.push(shop));
                    return product;
                  })
                );
              })
            );
          }
          if (shopsIds.length > 0) {
            obs = obs.pipe(
              map((product) => {
                shopsIds.forEach((id) => product.shops?.push({ id }));
                return product;
              })
            );
          }
          return obs;
        }),
        mergeMap((product) => {
          this.progressMessage = 'Creating image preview...';
          if (imagePreveiwCreateReq) {
            return imagePreveiwCreateReq?.pipe(
              map((image) => {
                product.previewImageId = image.id;
                return product;
              })
            );
          } else {
            return new Observable<ProductDTO>((subscriber) => {
              subscriber.next(product);
              subscriber.complete();
            });
          }
        }),
        mergeMap((product) => {
          this.progressMessage = 'Creating product...';
          return this.productService.createProductUsingPOST(product);
        }),
        mergeMap((product) => {
          this.progressMessage = 'Creating images...';
          if (this.imagesToAdd.length > 1) {
            let imagesCreateReq: Observable<ImageUrlDTO>[] = [];
            for (let i = 1; i < this.imagesToAdd.length; i++) {
              const image = this.imagesToAdd[i];
              const dto: ImageUrlDTO = {
                url: image,
                applyingOrder: i,
                productId: product.id,
              };
              imagesCreateReq.push(
                this.imageService.createImageUrlUsingPOST(dto)
              );
            }
            return forkJoin(imagesCreateReq).pipe(
              map((images) => {
                return product;
              })
            );
          } else {
            return new Observable<ProductDTO>((subscriber) => {
              subscriber.next(product);
              subscriber.complete();
            });
          }
        })
      )
      .subscribe(
        (product) => {
          this.loading = false;
          this.router.navigateByUrl('/products/' + product.id);
        },
        (err) => {
          this.loading = false;
        }
      );
  }
}
