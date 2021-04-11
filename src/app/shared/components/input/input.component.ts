import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input('text')
  public set text(val: string) {
    this.value = val;
  }

  public get text() {
    return this.value;
  }

  @Input('label')
  public label: string = '';

  @Input('icon')
  public icon: string = '';

  @Input('disabled')
  public set disabled(val: boolean) {
    this.isDisabled = val;
  }

  public isDisabled: boolean = false;

  @Output('textChange')
  public changeEvent: EventEmitter<string> = new EventEmitter();

  private value: string = '';

  constructor() {}

  ngOnInit(): void {}

  public change(newValue: string): void {
    this.value = newValue;
    this.changeEvent.emit(newValue);
  }
}
