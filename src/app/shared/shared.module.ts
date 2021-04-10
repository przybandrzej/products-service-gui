import { TextWithLabelEditableComponent } from './components/text-with-label-editable/text-with-label-editable.component';
import { TextWithLabelComponent } from './components/text-with-label/text-with-label.component';
import { InputComponent } from './components/input/input.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnhoverClassDirective } from './directives/onhover-class.directive';
import { TextClickableComponent } from './components/text-clickable/text-clickable.component';

@NgModule({
  declarations: [
    OnhoverClassDirective,
    CarouselComponent,
    InputComponent,
    TextWithLabelComponent,
    TextWithLabelEditableComponent,
    TextClickableComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  exports: [
    OnhoverClassDirective,
    CarouselComponent,
    InputComponent,
    TextWithLabelComponent,
    TextWithLabelEditableComponent,
    TextClickableComponent,
  ],
})
export class SharedModule {}
