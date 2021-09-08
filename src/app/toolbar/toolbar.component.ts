import { SearchService } from './../services/search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private searchService: SearchService) {}

  searchValueChange(value: string) {
    this.searchService.search(value).subscribe();
  }

  searchSubmit(value: string) {
    this.searchService.search(value).subscribe();
  }
}
