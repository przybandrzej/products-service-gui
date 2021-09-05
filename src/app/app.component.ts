import { Component, HostListener } from '@angular/core';
import { DocumentMouseEventService } from './services/document-mouse-event.service';
import { SideNavElement } from './side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'products-service-gui';

  menuElements: SideNavElement[] = [];

  constructor(private mouseService: DocumentMouseEventService) {
    this.menuElements.push({
      label: 'Dashboard',
      icon: 'home',
    });
    this.menuElements.push({
      label: 'Inventory',
      icon: 'inventory',
    });
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.mouseService.clicked(event.target);
  }
}
