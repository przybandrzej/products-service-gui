import { CurrencyDTO } from './../../../pms-products-sdk/model/currencyDTO';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.scss']
})
export class CurrencyCardComponent  {

  @Input('currency')
  public set currency(val: CurrencyDTO) {
    this._currency = val;
  }

  @Input('selected')
  public isSelected: boolean = false;

  public get currency() {
    return this._currency;
  }

  private _currency: CurrencyDTO = {};
}
