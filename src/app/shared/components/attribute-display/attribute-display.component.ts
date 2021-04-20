import { AttributeEntryFDTO } from './../../../pms-products-sdk/model/attributeEntryFDTO';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-display',
  templateUrl: './attribute-display.component.html',
  styleUrls: ['./attribute-display.component.scss'],
})
export class AttributeDisplayComponent implements OnInit {
  @Input('attributeEntry')
  public set attributeEntry(val: AttributeEntryFDTO) {
    this._attributeEntry = val;
    this.icon =
      this._attributeEntry.attribute?.attributeType?.materialIcon ?? '';
    this.label = this._attributeEntry.attribute?.name ?? '';
    this.value = this._attributeEntry.value ?? '';
  }

  public get attributeEntry() {
    return this._attributeEntry;
  }

  private _attributeEntry: AttributeEntryFDTO = {};

  public icon: string = '';
  public value: string = '';
  public label: string = '';

  constructor() {}

  ngOnInit(): void {}
}
