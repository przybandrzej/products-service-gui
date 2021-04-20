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
import { AttributeEntryFDTO } from './attributeEntryFDTO';
import { ShopDTO } from './shopDTO';


export interface ProductFDTO { 
    attributeEntries?: Array<AttributeEntryFDTO>;
    brandId?: number;
    brandName?: string;
    categoryId?: number;
    categoryName?: string;
    currencyId?: number;
    currencySymbol?: string;
    description?: string;
    id?: number;
    name?: string;
    previewImageId?: number;
    previewImageUrl?: string;
    price?: number;
    shops?: Array<ShopDTO>;
    subtitle?: string;
}
