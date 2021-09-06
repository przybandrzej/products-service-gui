import { LottieModule } from 'ngx-lottie';
import { TextWithLabelEditableComponent } from './components/text-with-label-editable/text-with-label-editable.component';
import { TextWithLabelComponent } from './components/text-with-label/text-with-label.component';
import { InputComponent } from './components/input/input.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnhoverClassDirective } from './directives/onhover-class.directive';
import { TextClickableComponent } from './components/text-clickable/text-clickable.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { ErrorBannerComponent } from './components/error-banner/error-banner.component';
import { AttributeViewComponent } from './components/attribute-view/attribute-view.component';
import { AttributeEntryViewComponent } from './components/attribute-entry-view/attribute-entry-view.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    ErrorBannerComponent,
    AttributeViewComponent,
    AttributeEntryViewComponent,
    SearchInputComponent,
    LoadingComponent,
  ],
  imports: [CommonModule, FlexLayoutModule, MaterialModule, LottieModule],
  exports: [
    OnhoverClassDirective,
    CarouselComponent,
    InputComponent,
    TextWithLabelComponent,
    TextWithLabelEditableComponent,
    TextClickableComponent,
    AddCardComponent,
    AutocompleteComponent,
    ErrorBannerComponent,
    AttributeViewComponent,
    AttributeEntryViewComponent,
    SearchInputComponent,
    LoadingComponent,
  ],
})
export class SharedModule {}
