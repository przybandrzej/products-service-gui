import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
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
  {
    path: 'currencies',
    loadChildren: () =>
      import('./pages/currency/currency.module').then((m) => m.CurrencyModule),
    canActivate: [],
  },
  {
    path: 'brands',
    loadChildren: () =>
      import('./pages/brand/brand.module').then((m) => m.BrandModule),
    canActivate: [],
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
