/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { AttributeFDTO } from './attributeFDTO';
import { UnitDTO } from './unitDTO';


export interface AttributeEntryFDTO { 
    attribute?: AttributeFDTO;
    id?: number;
    productId?: number;
    unit?: UnitDTO;
    value?: string;
}
