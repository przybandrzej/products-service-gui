import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-with-label-editable',
  templateUrl: './text-with-label-editable.component.html',
  styleUrls: ['./text-with-label-editable.component.scss'],
})
export class TextWithLabelEditableComponent implements OnInit {
  public editMode = false;
  public _showOverlay = false;

  @Input('text')
  public set text(val: string) {
    this._text = val;
    this.setup();
  }

  public get text() {
    return this._text;
  }

  private _text: string = '';

  @Input('label')
  public label: string = '';

  @Input('icon')
  public icon: string = '';

  @Output('edited')
  public editedEvent: EventEmitter<string> = new EventEmitter();

  @Input('editSuccess')
  public isEditSuccess: boolean = false;

  @Input('showEditedStatus')
  public set showEditedStatus(val: boolean) {
    if (val) {
      this._showOverlay = true;
      setTimeout(() => {
        this._showOverlay = false;
        this.editStatusShownEvent.emit();
      }, 1000);
    }
  }

  @Output('editStatusShown')
  public editStatusShownEvent: EventEmitter<void> = new EventEmitter();

  public inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  private setup() {
    this._showOverlay = false;
    this.isEditSuccess = false;
    this.editMode = false;
    this.inputValue = this._text;
  }

  public edit(event: Event): void {
    event.stopPropagation();
    this.editMode = true;
    this.inputValue = this._text;
  }

  public save(event: Event): void {
    event.stopPropagation();
    this._text = this.inputValue;
    this.editedEvent.emit(this._text);
    this.editMode = false;
  }

  public cancelEdit(event: Event): void {
    event.stopPropagation();
    this.editMode = false;
  }

  public update(value: string): void {
    this._text = value;
    this.inputValue = value;
  }
}
