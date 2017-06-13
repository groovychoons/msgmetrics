import { Injectable } from '@angular/core';

import { Metric } from './metric';
import { MOCK_DATA } from './MOCK_DATA';

@Injectable()
export class MetricDataService {
	
  getData(): Metric[] {
        return MOCK_DATA;
    }

  constructor() { }

}