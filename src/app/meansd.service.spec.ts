import { TestBed } from '@angular/core/testing';

import { MeansdService } from './meansd.service';

describe('MeansdService', () => {
  let service: MeansdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeansdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
