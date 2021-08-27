import { BrandDTO } from './../../../pms-products-sdk/model/brandDTO';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent {

  @Input('brand')
  public set brand(val: BrandDTO) {
    this._brand = val;
  }

  @Input('selected')
  public isSelected: boolean = false;

  public get brand() {
    return this._brand;
  }

  private _brand: BrandDTO = {};
}
