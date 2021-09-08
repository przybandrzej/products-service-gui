import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultMiniatureComponent } from './search-result-miniature.component';

describe('SearchResultMiniatureComponent', () => {
  let component: SearchResultMiniatureComponent;
  let fixture: ComponentFixture<SearchResultMiniatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultMiniatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultMiniatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
