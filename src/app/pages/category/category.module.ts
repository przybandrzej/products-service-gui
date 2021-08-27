import { SelectedCategoryManagerService } from './services/selected-category-manager.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesPageComponent,
  },
  {
    path: ':id',
    component: CategoriesPageComponent,
  },
];

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
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [CategoriesPageComponent],
  providers: [SelectedCategoryManagerService]
})
export class CategoryModule {}
