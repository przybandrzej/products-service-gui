import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-with-label',
  templateUrl: './text-with-label.component.html',
  styleUrls: ['./text-with-label.component.scss'],
})
export class TextWithLabelComponent implements OnInit {
  @Input('text')
  public text: string = '';

  @Input('label')
  public label: string = '';

  @Input('icon')
  public icon: string = '';

  @Input('showBorder')
  public showBorder: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
