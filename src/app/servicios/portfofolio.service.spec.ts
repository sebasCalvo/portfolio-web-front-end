import { TestBed } from '@angular/core/testing';

import { PortfofolioService } from './portfofolio.service';

describe('PortfofolioService', () => {
  let service: PortfofolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfofolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
