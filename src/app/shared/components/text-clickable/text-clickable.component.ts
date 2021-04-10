import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-clickable',
  templateUrl: './text-clickable.component.html',
  styleUrls: ['./text-clickable.component.scss'],
})
export class TextClickableComponent implements OnInit {
  @Input('text')
  public text: string = '';

  @Input('color')
  public color: string = '#393c45';

  @Input('fontSize')
  public fontSize: string = '16px';

  @Input('clickable')
  public clickable: boolean = true;

  @Output('clicked')
  public clickedEvent: EventEmitter<void> = new EventEmitter();

  public hovering: boolean = false;
  public opacity: number = 1;

  constructor() {}

  ngOnInit(): void {}

  mouseIn(): void {
    this.hovering = true;
  }

  mouseOut(): void {
    this.hovering = false;
  }

  public get borderWidth() {
    if (this.clickable && this.hovering) {
      return '1px';
    }
    return '0';
  }

  public get cursor() {
    if (this.clickable && this.hovering) {
      return 'pointer';
    }
    return 'auto';
  }

  public onClick(event: Event): void {
    event.stopPropagation();
    if (!this.clickable) {
      return;
    }
    this.opacity = 0.7;
    this.clickedEvent.emit();
  }
}
