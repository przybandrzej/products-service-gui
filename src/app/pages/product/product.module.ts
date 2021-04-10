import { SharedModule } from './../../shared/shared.module';
import { Configuration, ApiModule } from './../../pms-products-sdk/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { environment } from 'src/environments/environment';
import { ProductAttributeComponent } from './components/product-attribute/product-attribute.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductTooltipComponent } from './components/product-tooltip/product-tooltip.component';

export function getAPIConfiguration() {
  return new Configuration({ basePath: environment.api_url });
}

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductAttributeComponent,
    ProductsPageComponent,
    ProductDetailsComponent,
    ProductTooltipComponent,
  ],
  exports: [ProductsPageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot(getAPIConfiguration),
    SharedModule,
  ],
})
export class ProductModule {}
