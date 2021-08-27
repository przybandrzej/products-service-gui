import { TestBed } from '@angular/core/testing';

import { SelectedShopManagerService } from './selected-shop-manager.service';

describe('SelectedShopManagerService', () => {
  let service: SelectedShopManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedShopManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
