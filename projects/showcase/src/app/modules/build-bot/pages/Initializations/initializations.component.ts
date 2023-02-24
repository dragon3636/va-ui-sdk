import { Component, OnInit } from '@angular/core';
import locale from 'date-fns/locale/en-US';
import { DatepickerOptions } from '@em-and-ai/ui-sdk/vnlp-calendar/src/vnlp-calendar.component';

@Component({
  selector: 'app-Initializations',
  templateUrl: './initializations.component.html',
})
export class InitializationsComponent implements OnInit {

  date: Date;
  dateRange: Date;
  options: DatepickerOptions = {
    locale: locale,
    selectRange: false,
    placeholder: 'dd/mm/yyyy'
  };

  optionsRange: DatepickerOptions = {
    locale: locale,
    selectRange: true,
  }

  constructor() {
    this.date = new Date();
    this.dateRange = new Date();
  }

  ngOnInit(): void { }
}
