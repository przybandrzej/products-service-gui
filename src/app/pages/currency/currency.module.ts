import { SelectedCurrencyManagerService } from './services/selected-currency-manager.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyEditorComponent } from './currency-editor/currency-editor.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';

const routes: Routes = [
  {
    path: '',
    component: CurrenciesComponent,
  },
  {
    path: ':id',
    component: CurrenciesComponent,
  },
];

@NgModule({
  declarations: [CurrenciesComponent, CurrencyEditorComponent, CurrencyCardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [SelectedCurrencyManagerService]
})
export class CurrencyModule { }
