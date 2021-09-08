import { SearchResult } from './../../../model/search-result';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input()
  public placeholder: string = 'Search...';

  @Input()
  public searchResults: SearchResult[] = [];

  @Output('submit')
  public submitEvent: EventEmitter<string> = new EventEmitter();

  @Output('change')
  public changeEvent: EventEmitter<string> = new EventEmitter();

  public value: string = '';

  public isFocus: boolean = false;

  public changedValue(event: Event): void {
    event.stopPropagation();
    const data = (event as InputEvent).data;
    if (data === null) {
      this.value = this.value.slice(0, this.value.length - 1);
    } else {
      this.value = this.value + data;
    }
    console.log(this.value);
    this.changeEvent.emit(this.value);
  }

  public enter(event: Event): void {
    event.stopPropagation();
    console.log("Submit '" + this.value + "'");
    this.submitEvent.emit(this.value);
  }

  clickResultList(event: Event): void {
    event.preventDefault();
  }
}
