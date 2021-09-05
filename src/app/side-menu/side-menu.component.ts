import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
  @Input()
  public elements: SideNavElement[] = [];

  @Input()
  public bottomElements: SideNavElement[] = [];

  @Output()
  public elementClicked: EventEmitter<SideNavElement> = new EventEmitter();

  public clickedElement(event: Event, element: SideNavElement): void {
    event.stopPropagation();
    this.elementClicked.emit(element);
  }
}

export interface SideNavElement {
  icon: string;
  label: string;
}
