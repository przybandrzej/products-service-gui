import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-tooltip',
  templateUrl: './product-tooltip.component.html',
  styleUrls: ['./product-tooltip.component.scss'],
})
export class ProductTooltipComponent implements OnInit {
  @Input('data')
  public data: TooltipData = { categories: [], shops: [] };

  @Output('mouseIn')
  public mouseInEvent: EventEmitter<void> = new EventEmitter();

  @Output('mouseOut')
  public mouseOutEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onMouseEnter(event: any) {
    console.log('in');
    this.mouseInEvent.emit();
  }

  onMouseLeave(event: any) {
    console.log('out');
    this.mouseOutEvent.emit();
  }
}

export interface TooltipData {
  categories: string[];
  shops: string[];
}
