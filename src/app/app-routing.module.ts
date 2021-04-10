import { ProductDetailsComponent } from './pages/product/components/product-details/product-details.component';
import { ProductsPageComponent } from './pages/product/components/products-page/products-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
