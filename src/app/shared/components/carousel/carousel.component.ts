import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageUrlDTO } from 'src/app/pms-products-sdk';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  private _slides: ImageUrlDTO[] = [];
  @Input() set slides(value) {
    this._slides = value;
    this.currentSlide =
      this.currentSlide + this.slidesToMoveWhenAvailable < 0
        ? this.slides.length - 1
        : this.currentSlide + this.slidesToMoveWhenAvailable;
  }

  get slides() {
    return this._slides;
  }

  private slidesToMoveWhenAvailable = 0;
  public currentSlide = 0;
  @Output() slideChanged = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onPreviousClick(event: Event) {
    event.stopPropagation();
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    if (this.slides.length == 1) {
      this.slidesToMoveWhenAvailable = -1;
    }
    this.slideChanged.emit();
  }

  onNextClick(event: Event) {
    event.stopPropagation();
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    if (this.slides.length == 1) {
      this.slidesToMoveWhenAvailable = 1;
    }
    this.slideChanged.emit();
  }
}
