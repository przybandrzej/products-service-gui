import { TestBed } from '@angular/core/testing';

import { SelectedCurrencyManagerService } from './selected-currency-manager.service';

describe('SelectedCurrencyManagerService', () => {
  let service: SelectedCurrencyManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedCurrencyManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
