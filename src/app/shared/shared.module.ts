import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnhoverClassDirective } from './directives/onhover-class.directive';

@NgModule({
  declarations: [OnhoverClassDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [OnhoverClassDirective],
})
export class SharedModule {}
