import { TestBed } from '@angular/core/testing';

import { StartVotationService } from './start-votation.service';

describe('StartVotationServiceService', () => {
  let service: StartVotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartVotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
