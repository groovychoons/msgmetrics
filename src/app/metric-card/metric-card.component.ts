import { Component, OnInit } from '@angular/core';

import { Metric } from '../metric';
import { MetricDataService } from '../metric-data.service';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css'],
  providers: [ MetricDataService ]
})
export class MetricCardComponent implements OnInit {

  data: Metric[];

  constructor(private metricDataService: MetricDataService) { }

  getData(): void {
		this.data = this.metricDataService.getData();
	}

  ngOnInit() {
		this.getData();
  }

}
