import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions, IMyDateRangeModel, IMyDate } from 'mydaterangepicker';
import { Inject, Injectable, Optional } from '@angular/core';
declare var gapi: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Made Simple Conversion Metrics';

  myDateRangePickerOptions: IMyDrpOptions = {
        dateFormat: 'dd mmm yyyy',
        showClearBtn: false,
        showApplyBtn: false,
        sunHighlight: false,
        selectorWidth: '240',
  };

  public start: IMyDate =  { day: 11, month: 11, year: 2016 };
  public end: IMyDate =  { day: 11, month: 10, year: 2016 };

  public startString: string = this.start.year + "-" + this.start.month + "-" + this.start.day;
  public endString: string = this.end.year + "-" + this.end.month + "-" + this.end.day;

  constructor() { }

  ngOnInit() {
  }

  onDateRangeChanged(event: IMyDateRangeModel) {
    // event properties are: event.beginDate, event.endDate, event.formatted,
    // event.beginEpoc and event.endEpoc
    this.start = event.beginDate;
    this.end = event.endDate;
    
    this.startString = this.start.year + "-" + this.start.month + "-" + this.start.day;
    this.endString = this.end.year + "-" + this.end.month + "-" + this.end.day;

  }
  
}

