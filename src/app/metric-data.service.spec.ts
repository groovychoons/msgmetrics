import { TestBed, inject } from '@angular/core/testing';

import { MetricDataService } from './metric-data.service';

describe('MetricDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MetricDataService]
    });
  });

  it('should ...', inject([MetricDataService], (service: MetricDataService) => {
    expect(service).toBeTruthy();
  }));
});
