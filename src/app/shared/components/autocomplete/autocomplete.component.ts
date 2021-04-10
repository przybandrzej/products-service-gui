import { Observable } from 'rxjs';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  control = new FormControl();

  public _values: string[] = [];
  public _originalVlues: string[] = [];

  @Input()
  public set values(value: string[]) {
    this._originalVlues = value;
    this.setup();
  }

  public get values(): string[] {
    return this._values;
  }

  private _allowFreeText: boolean = false;

  @Input()
  public set allowFreeText(value: boolean) {
    this._allowFreeText = value;
    this.setup();
  }

  public get allowFreeText(): boolean {
    return this._allowFreeText;
  }

  private _selection: string = '';

  @Input()
  public set selection(value: string) {
    this._selection = value;
    this.setup();
  }

  public get selection(): string {
    return this._selection;
  }

  @Input()
  public set formControl(value: FormControl) {
    this.control = value;
    this.setup();
  }

  @Input()
  public label: string = '';

  private setup() {
    if (this._originalVlues) {
      this._values = [...this._originalVlues];
      this.control.setValue('');
      const controlValue = this.values.find((elem) => elem == this.selection);
      if (controlValue) {
        this.control.setValue(controlValue);
      } else if (this._allowFreeText) {
        this.control.setValue(this.selection);
      }
    }
  }

  @Output()
  public selectionChange: EventEmitter<string> = new EventEmitter();

  @Output()
  public valueChanged: EventEmitter<string> = new EventEmitter();

  filteredOptions?: Observable<string[]>;

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.control.valueChanges.pipe(
      startWith(''),
      map((val) => (val ? this._filter(val) : [...this.values]))
    );
    this.control.valueChanges.subscribe((res) => {
      if (res.length === 0) {
        return;
      }
      const options = this._filter(res);
      if (options.length === 1 && options[0] === res) {
        this.selectionChange.emit(res);
        return;
      }
      if (!this._allowFreeText) {
        this.control.setErrors({ required: true });
        return;
      }
      this.valueChanged.emit(res);
      return;
    });
  }

  private _filter(val: string): string[] {
    const filterValue = val.toLowerCase();
    return this.values.filter((option) => {
      return option.toLowerCase().indexOf(filterValue) > -1;
    });
  }

  displayFn(desc: string): string {
    return desc ? desc : '';
  }
}
