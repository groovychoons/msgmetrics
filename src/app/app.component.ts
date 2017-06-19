import { Component } from '@angular/core';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Made Simple Conversion Metrics';
  
  private myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd mmm yyyy',
        showClearBtn: false,
        showApplyBtn: false,
        sunHighlight: false,
        selectorWidth: '240',

    };

    constructor() { }

    // dateRangeChanged callback function called when the user apply the date range. This is
    // mandatory callback in this option. There are also optional inputFieldChanged and
    // calendarViewChanged callbacks.
    onDateRangeChanged(event: IMyDateRangeModel) {
        // event properties are: event.beginDate, event.endDate, event.formatted,
        // event.beginEpoc and event.endEpoc
    }
}
