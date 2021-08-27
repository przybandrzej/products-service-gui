import { SelectedBrandManagerService } from './services/selected-brand-manager.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCardComponent } from './brand-card/brand-card.component';
import { BrandEditorComponent } from './brand-editor/brand-editor.component';
import { BrandsComponent } from './brands/brands.component';



@NgModule({
  declarations: [BrandCardComponent, BrandEditorComponent, BrandsComponent],
  imports: [
    CommonModule
  ],
  providers: [SelectedBrandManagerService]
})
export class BrandModule { }
