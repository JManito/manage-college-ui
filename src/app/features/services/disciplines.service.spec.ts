import { TestBed } from '@angular/core/testing';

import { DiscplinesService } from './disciplines.service';

describe('DiscplinesService', () => {
  let service: DiscplinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscplinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
