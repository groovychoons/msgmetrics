import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Metric } from '../metric';
import { MetricDataService } from '../metric-data.service';

@Component({
  selector: 'app-metric-card',
  templateUrl: './metric-card.component.html',
  styleUrls: ['./metric-card.component.css'],
  providers: [ MetricDataService ]
})
export class MetricCardComponent implements OnInit, AfterContentInit {

  data: Metric[];

  constructor(private metricDataService: MetricDataService) { }

  getData(): void {
		this.data = this.metricDataService.getData();
	}

  ngOnInit() {
		this.getData();
  }
  
  bounceData: string;
  BounceData: any[];
  bounceLabels: string;
  BounceLabels: any[];
  public bounceChartData:any[];
  
  conversionData: string;
  ConversionData: any[];
  conversionLabels: string;
  ConversionLabels: any[];
  public conversionChartData:any[];
  
  visitorData: string;
  VisitorData: any[];
  visitorLabels: string;
  VisitorLabels: any[];
  public visitorChartData:any[];

  revenueData: string;
  RevenueData: any[];
  revenueLabels: string;
  RevenueLabels: any[];
  public revenueChartData:any[];

  ngAfterContentInit(){
  this.conversionData = (localStorage.getItem("conversion_data")).slice(1,-1);
  this.conversionLabels = (localStorage.getItem("conversion_labels")).slice(1,-1);

  this.ConversionLabels = this.conversionLabels.split(",");
  this.ConversionData = this.conversionData.split(",");

  this.conversionChartData = [{data: this.ConversionData, label: 'Conversion Rate'},];

  this.bounceData = (localStorage.getItem("bounce_data")).slice(1,-1);
  this.bounceLabels = (localStorage.getItem("bounce_labels")).slice(1,-1);

  this.BounceLabels = this.bounceLabels.split(",");
  this.BounceData = this.bounceData.split(",");

  this.bounceChartData = [{data: this.BounceData, label: 'Bounce Rate'},];


  this.conversionData = (localStorage.getItem("conversion_data")).slice(1,-1);
  this.conversionLabels = (localStorage.getItem("conversion_labels")).slice(1,-1);

  this.ConversionLabels = this.conversionLabels.split(",");
  this.ConversionData = this.conversionData.split(",");

  this.conversionChartData = [{data: this.ConversionData, label: 'Conversion Rate'},];
  

  this.visitorData = (localStorage.getItem("visitor_data")).slice(1,-1);
  this.visitorLabels = (localStorage.getItem("visitor_labels")).slice(1,-1);

  this.VisitorLabels = this.visitorLabels.split(",");
  this.VisitorData = this.visitorData.split(",");

  this.visitorChartData = [{data: this.VisitorData, label: 'Visitors'},];


  this.revenueData = (localStorage.getItem("revenue_data")).slice(1,-1);
  this.revenueLabels = (localStorage.getItem("revenue_labels")).slice(1,-1);

  this.RevenueLabels = this.revenueLabels.split(",");
  this.RevenueData = this.revenueData.split(",");

  this.revenueChartData = [{data: this.RevenueData, label: 'Revenue'},];
  } 

}
