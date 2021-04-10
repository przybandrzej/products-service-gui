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
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  public currencies: CurrencyDTO[] = [];
  public brands: BrandDTO[] = [];
  public shops: ShopDTO[] = [];
  public brandsNames: string[] = [];
  public shopsNames: string[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private currencyService: CurrencyResourceService,
    private shopService: ShopResourceService,
    private brandService: BrandResourceService
  ) {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      subtitle: [''],
      price: [],
      currency: [],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: [''],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: [''],
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
  }

  public create(event: Event): void {
    event.stopPropagation();
  }

  public brandChange(value: string): void {
    console.log(value);
  }

  public shopChange(value: string): void {
    console.log(value);
  }
}
