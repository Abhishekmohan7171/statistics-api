import { TestBed } from '@angular/core/testing';

import { GetApithreeService } from './get-apithree.service';

describe('GetApithreeService', () => {
  let service: GetApithreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApithreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
