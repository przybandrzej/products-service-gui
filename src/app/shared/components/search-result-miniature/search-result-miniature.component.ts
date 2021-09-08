import { SearchResult } from './../../../model/search-result';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-miniature',
  templateUrl: './search-result-miniature.component.html',
  styleUrls: ['./search-result-miniature.component.scss'],
})
export class SearchResultMiniatureComponent implements OnInit {
  @Input()
  public result: SearchResult = {
    type: '',
    name: '',
    minature_url: '',
    relativeUrl: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
