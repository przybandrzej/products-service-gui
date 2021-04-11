import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  public clicked: boolean = false;

  @Output('clicked')
  public clickedEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(event: Event): void {
    event.stopPropagation();
    this.clicked = true;
    this.clickedEvent.emit();
  }
}
