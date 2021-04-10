import { TestBed } from '@angular/core/testing';

import { DocumentMouseEventService } from './document-mouse-event.service';

describe('DocumentMouseEventService', () => {
  let service: DocumentMouseEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentMouseEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
