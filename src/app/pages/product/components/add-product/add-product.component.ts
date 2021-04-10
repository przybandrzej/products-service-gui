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
import { CurrencyDTO } from 'src/app/pms-products-sdk';

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

  constructor(
    private _formBuilder: FormBuilder,
    private currencyService: CurrencyResourceService,
    private shopService: ShopResourceService,
    private brandService: BrandResourceService,
    private categoryService: CategoryResourceService,
    private productService: ProductResourceService
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
    console.log(value);
    this.firstFormGroup.get('shop')?.setValue(value);
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
    this.loading = true;
    //todo
  }
}
