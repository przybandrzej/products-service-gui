import { ShopDTO } from './../../../pms-products-sdk/model/shopDTO';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss']
})
export class ShopCardComponent {

   @Input('shop')
  public set shop(val: ShopDTO) {
    this._shop = val;
  }

  @Input('selected')
  public isSelected: boolean = false;

  public get shop() {
    return this._shop;
  }

  private _shop: ShopDTO = {};
}
