import { AttributeTypeDTO } from './../../../pms-products-sdk/model/attributeTypeDTO';
import { AttributeFDTO } from './../../../pms-products-sdk/model/attributeFDTO';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-attribute-view',
  templateUrl: './attribute-view.component.html',
  styleUrls: ['./attribute-view.component.scss'],
})
export class AttributeViewComponent {
  @Input('attribute')
  public set attribute(val: AttributeFDTO) {
    this._attribute = val;
  }

  @Input('types')
  public set types(val: AttributeTypeDTO[]) {
    this._attributeTypes = val;
  }

  public get attribute() {
    return this._attribute;
  }

  private _attribute: AttributeFDTO = this.initAttr();

  public get types() {
    return this._attributeTypes;
  }

  private _attributeTypes: AttributeTypeDTO[] = [];

  private initAttr(): AttributeFDTO {
    return {
      name: '',
      attributeType: {},
    };
  }
}
