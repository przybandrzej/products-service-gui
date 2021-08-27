import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private router: Router) {}

  hoverProducts = false;
  hoverShops = false;
  hoverCurrencies = false;
  hoverCategories = false;
  hoverBrands = false;

  showProducts() {
    this.router.navigateByUrl('/products');
  }

  showShops() {
    this.router.navigateByUrl('/shops');
  }

  showCurrencies() {
    this.router.navigateByUrl('/currencies');
  }

  showCategories() {
    this.router.navigateByUrl('/categories');
   }

  showBrands() {
    this.router.navigateByUrl('/brands');
  }

}
