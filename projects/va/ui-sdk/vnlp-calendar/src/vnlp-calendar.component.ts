import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostListener,
  forwardRef,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  setYear,
  eachDayOfInterval,
  getDate,
  getMonth,
  getYear,
  isToday,
  isSameMonth,
  format,
  getDay,
  subDays,
  setDay,
  isAfter,
  isBefore,
  addDays,
  setMonth,
} from 'date-fns';
import locale from 'date-fns/locale/vi';
import { isSameDate, createDateRange } from './helpers/vnlp-calendar.helper';
import {
  DateRange,
  Day,
  AddClass,
  DatepickerOptions,
} from './models/vnlp-calendar.model';

let counter = 0;

@Component({
  selector: 'vnlp-calendar',
  templateUrl: 'vnlp-calendar.component.html',
  styleUrls: ['vnlp-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VnlpCalendarComponent),
      multi: true,
    },
  ],
})
export class VnlpCalendarComponent
  implements ControlValueAccessor, OnInit, OnChanges
{
  @ViewChild('calendarContainer') calendarContainerElement?: ElementRef;
  @ViewChild('inputElement') inputElement?: ElementRef;

  @Input() options?: DatepickerOptions = {
    locale: locale,
    selectRange: false,
    placeholder: 'dd/mm/yyyy',
  };

  @Input() isOpened = false;

  //Set default option for calendar
  currentOptions: DatepickerOptions = {
    includeDays: 'all',
    includeNextMonthsFirstFullWeek: false,
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'dd/MM/yyyy',
    barTitleFormat: 'MMMM yyyy',
    dayNamesFormat: 'EEEEEE',
    rangeSeparator: '-',
    selectRange: false,
    firstCalendarDay: 1,
    barTitleIfEmpty: 'Click to select a date',
    locale: locale,
    placeholder: 'dd/mm/yyyy - dd/mm/yyyy',
    fieldId: this.defaultFieldId,
    useEmptyBarTitle: true,
  };

  displayValue?: string;
  viewingDate?: Date;
  barTitle?: string;
  view?: 'days' | 'months' | 'years';
  years?: { year: number; isThisYear: boolean }[];
  months?: { month: number; name: string; isSelected: boolean }[];
  dayNames?: string[];
  days?: Day[];
  fieldId?: string;
  disabled: boolean = false;
  setFocus: boolean = false;

  private _range?: DateRange;

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  //Set default range
  set range(val: DateRange | undefined) {
    this._range = val;

    this.onChangeCallback(this.getValueToEmit(val));
  }

  get range(): DateRange | undefined {
    return this._range;
  }

  constructor() {}

  ngOnInit() {
    this.view = 'days';
    this.range = {
      start: new Date(),
      end: new Date(),
    };
    this.viewingDate = new Date();

    this.barTitle = format(
      this.viewingDate as Date,
      this.currentOptions.barTitleFormat as string,
      this.currentOptions.locale,
    );

    this.initDayNames();
    this.initYears();
    this.initMonths();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('options' in changes) {
      this.updateOptions(changes['options'].currentValue);
      this.initDayNames();
      this.initDays();
      this.initYears();
      this.initMonths();
    }
  }

  //Keep focus input showing calendar container and remove when close calendar container
  ngAfterViewChecked() {
    if (this.isOpened) {
      this.inputElement?.nativeElement.focus();
    } else {
      this.inputElement?.nativeElement.blur();
    }
  }

  get defaultFieldId(): string {
    // Only evaluate and increment if required
    const value = `datepicker-${counter++}`;
    Object.defineProperty(this, 'defaultFieldId', { value });

    return value;
  }

  //Update option setting input
  updateOptions(options: DatepickerOptions): void {
    this.currentOptions = {
      ...this.currentOptions,
      ...options,
    };
  }

  //Handle next month in view
  nextMonth(): void {
    this.viewingDate = addMonths(this.viewingDate as Date, 1);
    this.initDays();
    this.barTitle = format(
      this.viewingDate,
      this.currentOptions.barTitleFormat as string,
      this.currentOptions.locale,
    );
  }

  //Handle prev month in view
  prevMonth(): void {
    this.viewingDate = subMonths(this.viewingDate as Date, 1);
    this.initDays();
    this.barTitle = format(
      this.viewingDate,
      this.currentOptions.barTitleFormat as string,
      this.currentOptions.locale,
    );
  }

  //Init date start and date end
  setDate(i: number): void {
    const date = this.days![i].date;

    if (this.currentOptions.selectRange) {
      if (!this.range!.start && !this.range!.end) {
        this.range!.start = date;
      } else if (
        this.range!.start &&
        !this.range!.end &&
        isAfter(date, this.range!.start)
      ) {
        this.range!.end = date;
      } else {
        this.range!.end = undefined;
        this.range!.start = date;
      }
    } else {
      this.range!.start = this.range!.end = date;
    }

    this.initDays();
  }

  //Apply change when user select date and click apply button
  applyChange(): void {
    this.displayValue = this.formatDisplay();

    if (this.range) {
      this.barTitle = format(
        this.viewingDate as Date,
        this.currentOptions.barTitleFormat as string,
        this.currentOptions.locale,
      );
    } else {
      this.barTitle = this.currentOptions.useEmptyBarTitle
        ? this.currentOptions.barTitleIfEmpty
        : format(
            this.viewingDate as Date,
            this.currentOptions.barTitleFormat as string,
            this.currentOptions.locale,
          );
    }

    //Change and emit value
    this.onChangeCallback(this.getValueToEmit(this.range));

    this.close();
  }

  //User selected year
  setYear(i: number): void {
    this.viewingDate = setYear(this.viewingDate ?? 1, this.years![i].year);
    this.initDays();
    this.initYears();
    this.view = 'months';
    this.barTitle = format(
      this.viewingDate,
      this.currentOptions.barTitleFormat as string,
      this.currentOptions.locale,
    );
  }

  //User selected month
  setMonth(i: number): void {
    this.viewingDate = setMonth(
      this.viewingDate as Date,
      this.months![i]!.month,
    );
    this.initDays();
    this.initMonths();
    this.view = 'days';
    this.barTitle = format(
      this.viewingDate,
      this.currentOptions.barTitleFormat as string,
      this.currentOptions.locale,
    );
  }

  //Create days array from fisrt day and last day of selected month and some of prev and next month
  initDays(): void {
    if (!this.viewingDate) {
      return;
    }

    const start = startOfMonth(this.viewingDate);
    const end = endOfMonth(this.viewingDate);

    this.days = eachDayOfInterval({ start, end }).map(date =>
      this.formatDay(date),
    );

    const firstMonthDay =
      getDay(start) - (this.currentOptions.firstCalendarDay as number);
    const prevDays =
      firstMonthDay < 0
        ? 7 - (this.currentOptions.firstCalendarDay as number)
        : firstMonthDay;
    let nextDays =
      (this.currentOptions.firstCalendarDay === 1 ? 7 : 6) - getDay(end);

    const showPrevMonthDays =
      this.currentOptions.includeDays === 'all' ||
      this.currentOptions.includeDays === 'previous-month';
    const showNextMonthDays =
      this.currentOptions.includeDays === 'all' ||
      this.currentOptions.includeDays === 'next-month';

    if (
      showNextMonthDays &&
      this.currentOptions.includeNextMonthsFirstFullWeek
    ) {
      nextDays += 7;
    }

    for (let i = 1; i <= prevDays; i++) {
      this.days.unshift(this.formatDay(subDays(start, i), showPrevMonthDays));
    }

    new Array(nextDays)
      .fill(undefined)
      .forEach((_, i) =>
        this.days!.push(this.formatDay(addDays(end, i + 1), showNextMonthDays)),
      );
  }

  //Create years array from maxYear and minYear
  initYears(): void {
    const range =
      (this.currentOptions.maxYear as number) -
      (this.currentOptions.minYear as number);

    this.years = Array.from(
      new Array(range),
      (x, i) => i + (this.currentOptions.minYear as number),
    ).map(year => {
      return {
        year: year,
        isThisYear: year === getYear(this.viewingDate as Date),
      };
    });
  }

  //Create months array 1 -> 12
  initMonths(): void {
    this.months = Array.from(new Array(12), (x, i) =>
      setMonth(new Date(), i + 1),
    ).map(date => {
      return {
        month: date.getMonth(),
        name: format(date, 'MMM'),
        isSelected: date.getMonth() === getMonth(this.viewingDate as Date),
      };
    });
  }

  //Create dayNames array
  initDayNames(): void {
    this.dayNames = [];
    const start = this.currentOptions.firstCalendarDay;

    for (let i = start ?? 1; i <= 6 + (start ?? 1); i++) {
      const date = setDay(new Date(), i ?? 1);

      this.dayNames.push(
        format(
          date,
          this.currentOptions.dayNamesFormat ?? '',
          this.currentOptions.locale,
        ),
      );
    }
  }

  //Switch view between day and year
  toggleView(): void {
    this.view = this.view === 'days' ? 'years' : 'days';
  }

  //Open, close calendar
  toggle(): void {
    this.isOpened = !this.isOpened;

    //Focus input when calendar open
    if (this.isOpened === true) {
      this.inputElement?.nativeElement.focus();
    }

    if (!this.isOpened && this.view === 'years') {
      this.toggleView();
    }
  }

  //Close calendar
  close(): void {
    this.isOpened = false;

    if (this.view === 'years') {
      this.toggleView();
    }
  }

  //Reset calendar to the original state
  reset(): void {
    this.range = {
      start: new Date(),
      end: new Date(),
    };
    this.initDays();
  }

  //Write a value to element
  writeValue(val: DateRange | Date | string | undefined) {
    if (val) {
      if (typeof val === 'string') {
        this.range!.start = this.range!.end = new Date(val);
      } else if (val instanceof Date) {
        this.range!.start = this.range!.end = val;
      } else if (val.start) {
        // Checking if it's instance of DateRange
        this.range = val;
      } else {
        throw Error('Invalid input data type');
      }

      this.viewingDate = this.range!.start || this.viewingDate;

      this.initDays();
    }
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  public setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  //Handle close element when click outside calendar container
  @HostListener('document:click', ['$event']) onBlur(e: MouseEvent) {
    if (!this.isOpened) {
      return;
    }

    if (this.inputElement == null) {
      return;
    }

    //Keep show calendar when user click inside input
    if (
      e.target === this.inputElement.nativeElement ||
      this.inputElement.nativeElement.contains(<Element>e.target) ||
      ((<Element>e.target).parentElement &&
        (<Element>e.target).parentElement?.classList.contains('day-unit'))
    ) {
      return;
    }

    //Close calendar when user click outside calendar and input element
    if (
      this.calendarContainerElement?.nativeElement !== e.target &&
      !this.calendarContainerElement?.nativeElement.contains(
        <Element>e.target,
      ) &&
      !(<Element>e.target).classList.contains('year-unit') &&
      !(<Element>e.target).classList.contains('month-unit')
    ) {
      this.close();
    }
  }

  //Handle format day
  formatDay = (date: Date, isVisible: boolean = true): Day => ({
    date: date,
    day: getDate(date),
    month: getMonth(date),
    year: getYear(date),
    inThisMonth: isSameMonth(date, this.viewingDate as Date),
    isToday: isVisible && isToday(date),
    isSelected: isVisible && this.isDateSelected(date),
    isInRange: isVisible && this.isInRange(date),
    isSelectable: isVisible && this.isDateSelectable(date),
    isStart: isVisible && this.isRangeBoundary(date, 'start'),
    isEnd: isVisible && this.isRangeBoundary(date, 'end'),
    isVisible,
  });

  //Get styles date
  getDayClasses(day: Day): AddClass {
    return {
      'is-another-month': !day.inThisMonth,
      'is-today': day.isToday,
      'is-selected': day.isSelected,
      'is-in-range': day.isInRange,
      'is-disabled': !day.isSelectable,
      'range-start': day.isStart,
      'range-end': day.isEnd,
      'is-visible': day.isVisible,
    };
  }

  //Checks if specified date is not later than the last day of this month
  private isDateSelectable(date: Date): boolean {
    const maxDate = endOfMonth(new Date());
    const timestamp = date.valueOf();

    return timestamp < maxDate.valueOf();
  }

  //Check date is date start or date end
  private isDateSelected(date: Date): boolean {
    return (
      isSameDate(date, this.range!.start as Date) ||
      isSameDate(date, this.range!.end as Date)
    );
  }

  //Check date is within date start and date end to styles element
  private isInRange(date: Date): boolean {
    return (
      this.isDateSelected(date) ||
      (isAfter(date, this.range!.start as Date) &&
        isBefore(date, this.range!.end as Date))
    );
  }

  //Format display output
  private formatDisplay(): string {
    if (!this.range) {
      return '';
    }

    const formattedStartDate = format(
      this.range.start as Date,
      this.currentOptions.displayFormat ?? '',
      this.currentOptions.locale,
    );

    //When calendar is pick range
    if (this.currentOptions.selectRange) {
      const formattedEndDate = format(
        this.range.end || (this.range.start as Date),
        this.currentOptions.displayFormat ?? '',
        this.currentOptions.locale,
      );

      return `${formattedStartDate} ${this.currentOptions.rangeSeparator} ${formattedEndDate}`;
    }

    //When calendar is pick one day
    return formattedStartDate;
  }

  //Check date is start or end to styles element
  private isRangeBoundary(date: Date, boundary: 'start' | 'end'): boolean {
    return (
      !this.range![boundary] || isSameDate(date, this.range![boundary] as Date)
    );
  }

  //Get day start and day end and emit output
  private getValueToEmit(range: DateRange | undefined): DateRange | Date {
    if (!this.currentOptions.selectRange) {
      return new Date(range!.start!.getTime());
    }

    if (range!.end) {
      return createDateRange(range!.start as Date, range!.end);
    }

    return createDateRange(range!.start as Date, range!.start as Date);
  }
}
