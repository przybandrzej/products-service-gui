import { SearchResult } from './../model/search-result';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  public search(searchTerm: string): Observable<SearchResult[]> {
    return of([]);
  }
}
