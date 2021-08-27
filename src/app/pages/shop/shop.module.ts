import { SelectedShopManagerService } from './services/selected-shop-manager.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';

import { ShopsComponent } from './shops/shops.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopEditorComponent } from './shop-editor/shop-editor.component';

const routes: Routes = [
  {
    path: '',
    component: ShopsComponent,
  },
  {
    path: ':id',
    component: ShopsComponent,
  },
];

@NgModule({
  declarations: [ShopsComponent, ShopCardComponent, ShopEditorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [ShopsComponent],
  providers: [SelectedShopManagerService]
})
export class ShopModule { }
