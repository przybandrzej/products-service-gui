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
import { AddCardComponent } from './components/add-card/add-card.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AttributeDisplayComponent } from './components/attribute-display/attribute-display.component';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';

@NgModule({
  declarations: [
    OnhoverClassDirective,
    CarouselComponent,
    InputComponent,
    TextWithLabelComponent,
    TextWithLabelEditableComponent,
    TextClickableComponent,
    AddCardComponent,
    AutocompleteComponent,
    AttributeDisplayComponent,
    ErrorBannerComponent,
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
    AddCardComponent,
    AutocompleteComponent,
    AttributeDisplayComponent,
    ErrorBannerComponent,
  ],
})
export class SharedModule {}
