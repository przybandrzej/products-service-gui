import { TestBed } from '@angular/core/testing';

import { SelectedBrandManagerService } from './selected-brand-manager.service';

describe('SelectedBrandManagerService', () => {
  let service: SelectedBrandManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedBrandManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
