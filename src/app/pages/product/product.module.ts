import { SharedModule } from './../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductTooltipComponent } from './product-tooltip/product-tooltip.component';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsPageComponent,
  },
  {
    path: 'create',
    component: AddProductComponent,
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsPageComponent,
    ProductDetailsComponent,
    ProductTooltipComponent,
    AddProductComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class ProductModule {}
