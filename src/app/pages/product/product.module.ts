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
import { ProductCardImageComponent } from './components/product-card-image/product-card-image.component';
import { ProductAttributeComponent } from './components/product-attribute/product-attribute.component';

export function getAPIConfiguration() {
  return new Configuration({ basePath: environment.api_url });
}

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductCardImageComponent,
    ProductAttributeComponent,
  ],
  exports: [ProductCardComponent],
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
