import { SelectedBrandManagerService } from './services/selected-brand-manager.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';
import { BrandCardComponent } from './brand-card/brand-card.component';
import { BrandEditorComponent } from './brand-editor/brand-editor.component';
import { BrandsComponent } from './brands/brands.component';

const routes: Routes = [
  {
    path: '',
    component: BrandsComponent,
  },
  {
    path: ':id',
    component: BrandsComponent,
  },
];

@NgModule({
  declarations: [BrandCardComponent, BrandEditorComponent, BrandsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [SelectedBrandManagerService]
})
export class BrandModule { }
