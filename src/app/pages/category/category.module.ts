import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration, ApiModule } from './../../pms-products-sdk/';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';
import { environment } from 'src/environments/environment';
import { CategoriesPageComponent } from './components/categories-page/categories-page.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryEditorComponent } from './components/category-editor/category-editor.component';

export function getAPIConfiguration() {
  return new Configuration({ basePath: environment.api_url });
}

@NgModule({
  declarations: [
    CategoriesPageComponent,
    CategoryCardComponent,
    CategoryEditorComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule.forRoot(getAPIConfiguration),
    SharedModule,
  ],
  exports: [CategoriesPageComponent],
})
export class CategoryModule {}
