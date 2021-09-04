import { AttributeTypeDTO } from './../../../pms-products-sdk/model/attributeTypeDTO';
import { AttributeEntryFDTO } from './../../../pms-products-sdk/model/attributeEntryFDTO';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-entry-view',
  templateUrl: './attribute-entry-view.component.html',
  styleUrls: ['./attribute-entry-view.component.scss'],
})
export class AttributeEntryViewComponent {
  private types: AttributeTypeDTO.DataTypeEnum[] = Object.values(
    AttributeTypeDTO.DataTypeEnum
  );

  @Input('attribute')
  public set attribute(val: AttributeEntryFDTO) {
    this._attribute = val;
    this.setup();
  }

  public get attribute() {
    return this._attribute;
  }

  private _attribute: AttributeEntryFDTO = {};

  public value: string = '';
  public unit: string = '';
  public name: string = '';
  public icon: string = '';

  private setup() {
    const val = this._attribute.value ?? '';
    this.unit = this._attribute.unit?.symbol ?? '';
    this.name = this._attribute.attribute?.name ?? '';
    this.icon = this._attribute.attribute?.attributeType?.materialIcon ?? '';

    const type = this._attribute.attribute?.attributeType?.dataType;

    switch (type) {
      case AttributeTypeDTO.DataTypeEnum.BOOL: {
        if (val) {
          this.value = 'yes';
        } else {
          this.value = 'no';
        }
        break;
      }
      case AttributeTypeDTO.DataTypeEnum.DATE: {
        this.value = new Date(val).toDateString();
        break;
      }
      default: {
        this.value = val;
      }
    }
  }
}
