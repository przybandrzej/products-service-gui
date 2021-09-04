import { SelectedUnitManagerService } from './services/selected-unit-manager.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../../material.module';
import { SharedModule } from './../../shared/shared.module';

import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  {
    path: '',
    component: UnitsComponent,
  },
  {
    path: ':id',
    component: UnitsComponent,
  },
];

@NgModule({
  declarations: [UnitsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [SelectedUnitManagerService],
})
export class UnitModule {}
