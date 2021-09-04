import { TestBed } from '@angular/core/testing';

import { SelectedUnitManagerService } from './selected-unit-manager.service';

describe('SelectedUnitManagerService', () => {
  let service: SelectedUnitManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedUnitManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
