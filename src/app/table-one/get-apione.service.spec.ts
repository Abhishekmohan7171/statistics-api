import { TestBed } from '@angular/core/testing';

import { GetApioneService } from './get-apione.service';

describe('GetApioneService', () => {
  let service: GetApioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
