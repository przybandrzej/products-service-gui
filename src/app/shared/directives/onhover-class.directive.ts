import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[onhoverClass]',
})
export class OnhoverClassDirective {
  constructor(public elementRef: ElementRef) {}

  @Input('onhoverClass') onhoverClass: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.update('add');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.update('remove');
  }

  protected update(action: string): void {
    this.onhoverClass
      .split(' ')
      .forEach((item) => this.elementRef.nativeElement.classList[action](item));
  }
}
