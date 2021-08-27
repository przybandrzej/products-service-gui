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
    loadChildren: () =>
      import('./pages/product/product.module').then((m) => m.ProductModule),
    canActivate: [],
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/category/category.module').then((m) => m.CategoryModule),
    canActivate: [],
  },
  {
    path: 'shops',
    loadChildren: () =>
      import('./pages/shop/shop.module').then((m) => m.ShopModule),
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
