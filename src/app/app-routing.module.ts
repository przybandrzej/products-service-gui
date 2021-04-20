import { CategoriesPageComponent } from './pages/category/components/categories-page/categories-page.component';
import { AddProductComponent } from './pages/product/components/add-product/add-product.component';
import { ProductDetailsComponent } from './pages/product/components/product-details/product-details.component';
import { ProductsPageComponent } from './pages/product/components/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'products/create',
    component: AddProductComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'categories',
    component: CategoriesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
