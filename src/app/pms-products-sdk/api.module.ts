import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AttributeEntryResourceService } from './api/attributeEntryResource.service';
import { AttributeResourceService } from './api/attributeResource.service';
import { BrandResourceService } from './api/brandResource.service';
import { CategoryResourceService } from './api/categoryResource.service';
import { CurrencyResourceService } from './api/currencyResource.service';
import { ImageUrlResourceService } from './api/imageUrlResource.service';
import { ProductResourceService } from './api/productResource.service';
import { ShopResourceService } from './api/shopResource.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AttributeEntryResourceService,
    AttributeResourceService,
    BrandResourceService,
    CategoryResourceService,
    CurrencyResourceService,
    ImageUrlResourceService,
    ProductResourceService,
    ShopResourceService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
