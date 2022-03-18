import { TestBed } from '@angular/core/testing';

import { GetApitwoService } from './get-apitwo.service';

describe('GetApitwoService', () => {
  let service: GetApitwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApitwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
