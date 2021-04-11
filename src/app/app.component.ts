import { Component, HostListener } from '@angular/core';
import { DocumentMouseEventService } from './services/document-mouse-event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'products-service-gui';

  constructor(private mouseService: DocumentMouseEventService) {}

  @HostListener('document:click', ['$event'])
  documentClick(event: any): void {
    this.mouseService.clicked(event.target);
  }
}
