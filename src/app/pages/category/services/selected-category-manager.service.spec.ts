import { TestBed } from '@angular/core/testing';

import { SelectedCategoryManagerService } from './selected-category-manager.service';

describe('SelectedCategoryManagerService', () => {
  let service: SelectedCategoryManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCategoryManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
