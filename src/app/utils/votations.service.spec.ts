import { TestBed } from '@angular/core/testing';

import { VotationsService } from './votations.service';

describe('VotationsService', () => {
  let service: VotationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
