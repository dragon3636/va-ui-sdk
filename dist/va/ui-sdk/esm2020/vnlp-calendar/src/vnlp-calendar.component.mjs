import { Component, Input, HostListener, forwardRef, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { startOfMonth, endOfMonth, addMonths, subMonths, setYear, eachDayOfInterval, getDate, getMonth, getYear, isToday, isSameMonth, format, getDay, subDays, setDay, isAfter, isBefore, addDays, setMonth, } from 'date-fns';
import vi from 'date-fns/locale/vi';
import { isSameDate, createDateRange } from './helpers/vnlp-calendar.helper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
let counter = 0;
export class VnlpCalendarComponent {
    constructor() {
        this.isOpened = false;
        //Set default option for calendar
        this.currentOptions = {
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
            locale: { locale: vi },
            placeholder: 'dd/mm/yyyy - dd/mm/yyyy',
            fieldId: this.defaultFieldId,
            useEmptyBarTitle: true,
        };
        this.disabled = false;
        this.setFocus = false;
        this.onTouchedCallback = () => { };
        this.onChangeCallback = () => { };
        //Handle format day
        this.formatDay = (date, isVisible = true) => ({
            date: date,
            day: getDate(date),
            month: getMonth(date),
            year: getYear(date),
            inThisMonth: isSameMonth(date, this.viewingDate),
            isToday: isVisible && isToday(date),
            isSelected: isVisible && this.isDateSelected(date),
            isInRange: isVisible && this.isInRange(date),
            isSelectable: isVisible && this.isDateSelectable(date),
            isStart: isVisible && this.isRangeBoundary(date, 'start'),
            isEnd: isVisible && this.isRangeBoundary(date, 'end'),
            isVisible,
        });
    }
    //Set default range
    set range(val) {
        this._range = val;
        this.onChangeCallback(this.getValueToEmit(val));
    }
    get range() {
        return this._range;
    }
    ngOnInit() {
        this.view = 'days';
        this.range = {
            start: new Date(),
            end: new Date(),
        };
        this.viewingDate = new Date();
        this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
        this.initDayNames();
        this.initYears();
        this.initMonths();
    }
    ngOnChanges(changes) {
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
        }
        else {
            this.inputElement?.nativeElement.blur();
        }
    }
    get defaultFieldId() {
        // Only evaluate and increment if required
        const value = `datepicker-${counter++}`;
        Object.defineProperty(this, 'defaultFieldId', { value });
        return value;
    }
    //Update option setting input
    updateOptions(options) {
        this.currentOptions = {
            ...this.currentOptions,
            ...options,
        };
    }
    //Handle next month in view
    nextMonth() {
        this.viewingDate = addMonths(this.viewingDate, 1);
        this.initDays();
        this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
    }
    //Handle prev month in view
    prevMonth() {
        this.viewingDate = subMonths(this.viewingDate, 1);
        this.initDays();
        this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
    }
    //Init date start and date end
    setDate(i) {
        const date = this.days[i].date;
        if (this.currentOptions.selectRange) {
            if (!this.range.start && !this.range.end) {
                this.range.start = date;
            }
            else if (this.range.start &&
                !this.range.end &&
                isAfter(date, this.range.start)) {
                this.range.end = date;
            }
            else {
                this.range.end = undefined;
                this.range.start = date;
            }
        }
        else {
            this.range.start = this.range.end = date;
        }
        this.initDays();
    }
    //Apply change when user select date and click apply button
    applyChange() {
        this.displayValue = this.formatDisplay();
        if (this.range) {
            this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
        }
        else {
            this.barTitle = this.currentOptions.useEmptyBarTitle
                ? this.currentOptions.barTitleIfEmpty
                : format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
        }
        //Change and emit value
        this.onChangeCallback(this.getValueToEmit(this.range));
        this.close();
    }
    //User selected year
    setYear(i) {
        this.viewingDate = setYear(this.viewingDate ?? 1, this.years[i].year);
        this.initDays();
        this.initYears();
        this.view = 'months';
        this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
    }
    //User selected month
    setMonth(i) {
        this.viewingDate = setMonth(this.viewingDate, this.months[i].month);
        this.initDays();
        this.initMonths();
        this.view = 'days';
        this.barTitle = format(this.viewingDate, this.currentOptions.barTitleFormat, this.currentOptions.locale);
    }
    //Create days array from fisrt day and last day of selected month and some of prev and next month
    initDays() {
        if (!this.viewingDate) {
            return;
        }
        const start = startOfMonth(this.viewingDate);
        const end = endOfMonth(this.viewingDate);
        this.days = eachDayOfInterval({ start, end }).map((date) => this.formatDay(date));
        const firstMonthDay = getDay(start) - this.currentOptions.firstCalendarDay;
        const prevDays = firstMonthDay < 0
            ? 7 - this.currentOptions.firstCalendarDay
            : firstMonthDay;
        let nextDays = (this.currentOptions.firstCalendarDay === 1 ? 7 : 6) - getDay(end);
        const showPrevMonthDays = this.currentOptions.includeDays === 'all' ||
            this.currentOptions.includeDays === 'previous-month';
        const showNextMonthDays = this.currentOptions.includeDays === 'all' ||
            this.currentOptions.includeDays === 'next-month';
        if (showNextMonthDays &&
            this.currentOptions.includeNextMonthsFirstFullWeek) {
            nextDays += 7;
        }
        for (let i = 1; i <= prevDays; i++) {
            this.days.unshift(this.formatDay(subDays(start, i), showPrevMonthDays));
        }
        new Array(nextDays)
            .fill(undefined)
            .forEach((_, i) => this.days.push(this.formatDay(addDays(end, i + 1), showNextMonthDays)));
    }
    //Create years array from maxYear and minYear
    initYears() {
        const range = this.currentOptions.maxYear -
            this.currentOptions.minYear;
        this.years = Array.from(new Array(range), (x, i) => i + this.currentOptions.minYear).map((year) => {
            return {
                year: year,
                isThisYear: year === getYear(this.viewingDate),
            };
        });
    }
    //Create months array 1 -> 12
    initMonths() {
        this.months = Array.from(new Array(12), (x, i) => setMonth(new Date(), i + 1)).map((date) => {
            return {
                month: date.getMonth(),
                name: format(date, 'MMM'),
                isSelected: date.getMonth() === getMonth(this.viewingDate),
            };
        });
    }
    //Create dayNames array
    initDayNames() {
        this.dayNames = [];
        const start = this.currentOptions.firstCalendarDay;
        for (let i = start ?? 1; i <= 6 + (start ?? 1); i++) {
            const date = setDay(new Date(), i ?? 1);
            this.dayNames.push(format(date, this.currentOptions.dayNamesFormat ?? '', this.currentOptions.locale));
        }
    }
    //Switch view between day and year
    toggleView() {
        this.view = this.view === 'days' ? 'years' : 'days';
    }
    //Open, close calendar
    toggle() {
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
    close() {
        this.isOpened = false;
        if (this.view === 'years') {
            this.toggleView();
        }
    }
    //Reset calendar to the original state
    reset() {
        this.range = {
            start: new Date(),
            end: new Date(),
        };
        this.initDays();
    }
    //Write a value to element
    writeValue(val) {
        if (val) {
            if (typeof val === 'string') {
                this.range.start = this.range.end = new Date(val);
            }
            else if (val instanceof Date) {
                this.range.start = this.range.end = val;
            }
            else if (val.start) {
                // Checking if it's instance of DateRange
                this.range = val;
            }
            else {
                throw Error('Invalid input data type');
            }
            this.viewingDate = this.range.start || this.viewingDate;
            this.initDays();
        }
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    //Handle close element when click outside calendar container
    onBlur(e) {
        if (!this.isOpened) {
            return;
        }
        if (this.inputElement == null) {
            return;
        }
        //Keep show calendar when user click inside input
        if (e.target === this.inputElement.nativeElement ||
            this.inputElement.nativeElement.contains(e.target) ||
            (e.target.parentElement &&
                e.target.parentElement?.classList.contains('day-unit'))) {
            return;
        }
        //Close calendar when user click outside calendar and input element
        if (this.calendarContainerElement?.nativeElement !== e.target &&
            !this.calendarContainerElement?.nativeElement.contains(e.target) &&
            !e.target.classList.contains('year-unit') &&
            !e.target.classList.contains('month-unit')) {
            this.close();
        }
    }
    //Get styles date
    getDayClasses(day) {
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
    isDateSelectable(date) {
        const maxDate = endOfMonth(new Date());
        const timestamp = date.valueOf();
        return timestamp < maxDate.valueOf();
    }
    //Check date is date start or date end
    isDateSelected(date) {
        return (isSameDate(date, this.range.start) ||
            isSameDate(date, this.range.end));
    }
    //Check date is within date start and date end to styles element
    isInRange(date) {
        return (this.isDateSelected(date) ||
            (isAfter(date, this.range.start) &&
                isBefore(date, this.range.end)));
    }
    //Format display output
    formatDisplay() {
        if (!this.range) {
            return '';
        }
        const formattedStartDate = format(this.range.start, this.currentOptions.displayFormat ?? '', this.currentOptions.locale);
        //When calendar is pick range
        if (this.currentOptions.selectRange) {
            const formattedEndDate = format(this.range.end || this.range.start, this.currentOptions.displayFormat ?? '', this.currentOptions.locale);
            return `${formattedStartDate} ${this.currentOptions.rangeSeparator} ${formattedEndDate}`;
        }
        //When calendar is pick one day
        return formattedStartDate;
    }
    //Check date is start or end to styles element
    isRangeBoundary(date, boundary) {
        return (!this.range[boundary] || isSameDate(date, this.range[boundary]));
    }
    //Get day start and day end and emit output
    getValueToEmit(range) {
        if (!this.currentOptions.selectRange) {
            return new Date(range.start.getTime());
        }
        if (range.end) {
            return createDateRange(range.start, range.end);
        }
        return createDateRange(range.start, range.start);
    }
}
VnlpCalendarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCalendarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
VnlpCalendarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: VnlpCalendarComponent, selector: "vnlp-calendar", inputs: { options: "options", isOpened: "isOpened" }, host: { listeners: { "document:click": "onBlur($event)" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => VnlpCalendarComponent),
            multi: true,
        },
    ], viewQueries: [{ propertyName: "calendarContainerElement", first: true, predicate: ["calendarContainer"], descendants: true }, { propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<div class=\"relative\">\r\n  <div (click)=\"toggle()\" class=\"main-calendar-input\">\r\n    <input\r\n      #inputElement\r\n      type=\"text\"\r\n      class=\"w-[100%] h-[100%] text-[16px] leading-[24px] outline-none bg-transparent cursor-pointer\"\r\n      [(ngModel)]=\"displayValue\"\r\n      readonly\r\n      [placeholder]=\"currentOptions.placeholder\"\r\n      [id]=\"fieldId\"\r\n      [disabled]=\"disabled\"\r\n    />\r\n    <span class=\"text-primary text-[20px]\">\r\n      <i [class]=\"'icon-vnlp-icon-calendar-1-linear'\"></i>\r\n    </span>\r\n  </div>\r\n  <ng-content></ng-content>\r\n  <div class=\"main-calendar-container\" *ngIf=\"isOpened\" #calendarContainer>\r\n    <div class=\"relative\">\r\n      <div class=\"w-[100%] h-[50px]\">\r\n        <div\r\n          class=\"flex justify-between py-[10px] items-center border-b-[1px] border-solid border-stroke\"\r\n        >\r\n          <div (click)=\"prevMonth()\" class=\"text-[12px] text-neutral-4 font-bold cursor-pointer\">\r\n            <i [class]=\"'icon-vnlp-icon-arrow-left-2-linear'\"></i>\r\n          </div>\r\n          <span\r\n            class=\"text-sm text-neutral-2 font-bold cursor-pointer\"\r\n            (click)=\"toggleView()\"\r\n          >\r\n            {{ barTitle }}\r\n          </span>\r\n          <div (click)=\"nextMonth()\" class=\"text-[12px] text-neutral-4 font-bold cursor-pointer\">\r\n            <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-[100%] pt-[10px] text-xs font-normal\">\r\n        <ng-container *ngIf=\"view === 'days'\">\r\n          <div\r\n            class=\"w-[100%] flex items-center text-sm text-neutral-5 font-normal\"\r\n          >\r\n            <span class=\"day-name-unit\" *ngFor=\"let name of dayNames\">\r\n              {{ name }}\r\n            </span>\r\n          </div>\r\n          <div class=\"pt-[15px] w-[100%] inline-block\">\r\n            <span\r\n              class=\"day-unit\"\r\n              *ngFor=\"let day of days; let i = index\"\r\n              (click)=\"day.isSelectable && setDate(i)\"\r\n            >\r\n              <span\r\n                class=\"day-background-upper\"\r\n                [ngClass]=\"this.getDayClasses(day)\"\r\n              >\r\n                {{ day.isVisible ? day.day : '' }}\r\n              </span>\r\n              <span\r\n                class=\"day-background-lower\"\r\n                [ngClass]=\"this.getDayClasses(day)\"\r\n              ></span>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <div *ngIf=\"view === 'years'\" class=\"main-calendar-years\">\r\n          <span\r\n            *ngFor=\"let year of years; let i = index\"\r\n            class=\"year-unit\"\r\n            [ngClass]=\"{ 'is-selected': year.isThisYear }\"\r\n            (click)=\"setYear(i)\"\r\n          >\r\n            {{ year.year }}\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"view === 'months'\" class=\"main-calendar-months\">\r\n          <span\r\n            *ngFor=\"let month of months; let i = index\"\r\n            class=\"month-unit\"\r\n            [ngClass]=\"{ 'is-selected': month.isSelected }\"\r\n            (click)=\"setMonth(i)\"\r\n          >\r\n            {{ month.name }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute w-[100%] top-[320px]\">\r\n        <div class=\"flex items-center justify-between\">\r\n          <button (click)=\"close()\" class=\"btn-cancel\">Cancel</button>\r\n          <button (click)=\"applyChange()\" class=\"btn-apply\">Apply</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".main-calendar-input{display:flex;justify-content:space-between;align-items:center;background:#ffffff;width:302px;height:48px;border-radius:10px;padding:12px 18px;border:1.5px solid #e6e8ec;cursor:pointer}.main-calendar-input:focus-within{border:2px solid #007df9}.main-calendar-container{position:absolute;width:350px;height:371px;border-radius:8px;background:#ffffff;top:55px;left:0;padding:0 10px}.day-name-unit{width:14.2857142857%;text-align:center}.day-unit,.year-unit,.month-unit{position:relative;width:14.2857142857%;font-size:14px;font-weight:500;height:36px;display:inline-flex;float:left;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.day-background-upper{display:inline-flex;position:absolute;z-index:1;width:36px;height:100%;border-radius:50%;align-items:center;justify-content:center}.day-background-upper.is-selected{background:#007df9;color:#fff}.day-background-upper:not(.is-visible){cursor:default}.day-background-upper.is-visible:hover{border:1px solid #007df9;color:#141416;background:#ffffff}.day-background-upper.is-visible.is-another-month{color:#e6e8ec}.day-background-upper.is-visible.is-disabled{cursor:not-allowed;color:#e6e8ec}.day-background-lower{display:inline-flex;position:absolute;z-index:0;width:100%;height:100%;align-items:center;justify-content:center;border-top:2px solid #ffffff;border-bottom:2px solid #ffffff}.day-background-lower.is-in-range{background:#e6e8ec}.day-background-lower.range-start{border-bottom-left-radius:50%;border-top-left-radius:50%;padding-left:20px;box-shadow:inset 20px 0 #fff}.day-background-lower.range-end{border-bottom-right-radius:50%;border-top-right-radius:50%;padding-right:20px;box-shadow:inset -20px 0 #fff}.month-unit,.year-unit{width:98px;height:48px}.year-unit,.month-unit{border-radius:8px}.year-unit.is-selected,.month-unit.is-selected{background:#007df9;color:#fff}.year-unit:hover,.month-unit:hover{background:#e6f2fe;color:#007df9}.main-calendar-years{display:flex;flex-wrap:wrap;gap:10px;height:225px;color:#777e90;font-weight:500;overflow:auto}.main-calendar-years::-webkit-scrollbar{width:5px}.main-calendar-years::-webkit-scrollbar-thumb{background:#b1b5c3;border-radius:10px}.main-calendar-years::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px}.main-calendar-months{display:flex;flex-wrap:wrap;color:#777e90;font-weight:500;gap:12px}.btn-cancel{font-size:14px;line-height:16px;color:#23262f;border-radius:8px;font-weight:700;background:#ffffff;border:2px solid #e6e8ec;padding:12px 16px}.btn-cancel:hover{background:gainsboro}.btn-apply{font-size:14px;line-height:16px;color:#fff;border-radius:8px;font-weight:700;background:#007df9;padding:12px 16px}.btn-apply:hover{background:#0064c7}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCalendarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'vnlp-calendar', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => VnlpCalendarComponent),
                            multi: true,
                        },
                    ], template: "<div class=\"relative\">\r\n  <div (click)=\"toggle()\" class=\"main-calendar-input\">\r\n    <input\r\n      #inputElement\r\n      type=\"text\"\r\n      class=\"w-[100%] h-[100%] text-[16px] leading-[24px] outline-none bg-transparent cursor-pointer\"\r\n      [(ngModel)]=\"displayValue\"\r\n      readonly\r\n      [placeholder]=\"currentOptions.placeholder\"\r\n      [id]=\"fieldId\"\r\n      [disabled]=\"disabled\"\r\n    />\r\n    <span class=\"text-primary text-[20px]\">\r\n      <i [class]=\"'icon-vnlp-icon-calendar-1-linear'\"></i>\r\n    </span>\r\n  </div>\r\n  <ng-content></ng-content>\r\n  <div class=\"main-calendar-container\" *ngIf=\"isOpened\" #calendarContainer>\r\n    <div class=\"relative\">\r\n      <div class=\"w-[100%] h-[50px]\">\r\n        <div\r\n          class=\"flex justify-between py-[10px] items-center border-b-[1px] border-solid border-stroke\"\r\n        >\r\n          <div (click)=\"prevMonth()\" class=\"text-[12px] text-neutral-4 font-bold cursor-pointer\">\r\n            <i [class]=\"'icon-vnlp-icon-arrow-left-2-linear'\"></i>\r\n          </div>\r\n          <span\r\n            class=\"text-sm text-neutral-2 font-bold cursor-pointer\"\r\n            (click)=\"toggleView()\"\r\n          >\r\n            {{ barTitle }}\r\n          </span>\r\n          <div (click)=\"nextMonth()\" class=\"text-[12px] text-neutral-4 font-bold cursor-pointer\">\r\n            <i [class]=\"'icon-vnlp-icon-arrow-right-3-linear'\"></i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-[100%] pt-[10px] text-xs font-normal\">\r\n        <ng-container *ngIf=\"view === 'days'\">\r\n          <div\r\n            class=\"w-[100%] flex items-center text-sm text-neutral-5 font-normal\"\r\n          >\r\n            <span class=\"day-name-unit\" *ngFor=\"let name of dayNames\">\r\n              {{ name }}\r\n            </span>\r\n          </div>\r\n          <div class=\"pt-[15px] w-[100%] inline-block\">\r\n            <span\r\n              class=\"day-unit\"\r\n              *ngFor=\"let day of days; let i = index\"\r\n              (click)=\"day.isSelectable && setDate(i)\"\r\n            >\r\n              <span\r\n                class=\"day-background-upper\"\r\n                [ngClass]=\"this.getDayClasses(day)\"\r\n              >\r\n                {{ day.isVisible ? day.day : '' }}\r\n              </span>\r\n              <span\r\n                class=\"day-background-lower\"\r\n                [ngClass]=\"this.getDayClasses(day)\"\r\n              ></span>\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <div *ngIf=\"view === 'years'\" class=\"main-calendar-years\">\r\n          <span\r\n            *ngFor=\"let year of years; let i = index\"\r\n            class=\"year-unit\"\r\n            [ngClass]=\"{ 'is-selected': year.isThisYear }\"\r\n            (click)=\"setYear(i)\"\r\n          >\r\n            {{ year.year }}\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"view === 'months'\" class=\"main-calendar-months\">\r\n          <span\r\n            *ngFor=\"let month of months; let i = index\"\r\n            class=\"month-unit\"\r\n            [ngClass]=\"{ 'is-selected': month.isSelected }\"\r\n            (click)=\"setMonth(i)\"\r\n          >\r\n            {{ month.name }}\r\n          </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"absolute w-[100%] top-[320px]\">\r\n        <div class=\"flex items-center justify-between\">\r\n          <button (click)=\"close()\" class=\"btn-cancel\">Cancel</button>\r\n          <button (click)=\"applyChange()\" class=\"btn-apply\">Apply</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [".main-calendar-input{display:flex;justify-content:space-between;align-items:center;background:#ffffff;width:302px;height:48px;border-radius:10px;padding:12px 18px;border:1.5px solid #e6e8ec;cursor:pointer}.main-calendar-input:focus-within{border:2px solid #007df9}.main-calendar-container{position:absolute;width:350px;height:371px;border-radius:8px;background:#ffffff;top:55px;left:0;padding:0 10px}.day-name-unit{width:14.2857142857%;text-align:center}.day-unit,.year-unit,.month-unit{position:relative;width:14.2857142857%;font-size:14px;font-weight:500;height:36px;display:inline-flex;float:left;align-items:center;justify-content:center;cursor:pointer;-webkit-user-select:none;user-select:none}.day-background-upper{display:inline-flex;position:absolute;z-index:1;width:36px;height:100%;border-radius:50%;align-items:center;justify-content:center}.day-background-upper.is-selected{background:#007df9;color:#fff}.day-background-upper:not(.is-visible){cursor:default}.day-background-upper.is-visible:hover{border:1px solid #007df9;color:#141416;background:#ffffff}.day-background-upper.is-visible.is-another-month{color:#e6e8ec}.day-background-upper.is-visible.is-disabled{cursor:not-allowed;color:#e6e8ec}.day-background-lower{display:inline-flex;position:absolute;z-index:0;width:100%;height:100%;align-items:center;justify-content:center;border-top:2px solid #ffffff;border-bottom:2px solid #ffffff}.day-background-lower.is-in-range{background:#e6e8ec}.day-background-lower.range-start{border-bottom-left-radius:50%;border-top-left-radius:50%;padding-left:20px;box-shadow:inset 20px 0 #fff}.day-background-lower.range-end{border-bottom-right-radius:50%;border-top-right-radius:50%;padding-right:20px;box-shadow:inset -20px 0 #fff}.month-unit,.year-unit{width:98px;height:48px}.year-unit,.month-unit{border-radius:8px}.year-unit.is-selected,.month-unit.is-selected{background:#007df9;color:#fff}.year-unit:hover,.month-unit:hover{background:#e6f2fe;color:#007df9}.main-calendar-years{display:flex;flex-wrap:wrap;gap:10px;height:225px;color:#777e90;font-weight:500;overflow:auto}.main-calendar-years::-webkit-scrollbar{width:5px}.main-calendar-years::-webkit-scrollbar-thumb{background:#b1b5c3;border-radius:10px}.main-calendar-years::-webkit-scrollbar-track{box-shadow:inset 0 0 5px #fff;border-radius:10px}.main-calendar-months{display:flex;flex-wrap:wrap;color:#777e90;font-weight:500;gap:12px}.btn-cancel{font-size:14px;line-height:16px;color:#23262f;border-radius:8px;font-weight:700;background:#ffffff;border:2px solid #e6e8ec;padding:12px 16px}.btn-cancel:hover{background:gainsboro}.btn-apply{font-size:14px;line-height:16px;color:#fff;border-radius:8px;font-weight:700;background:#007df9;padding:12px 16px}.btn-apply:hover{background:#0064c7}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { calendarContainerElement: [{
                type: ViewChild,
                args: ['calendarContainer']
            }], inputElement: [{
                type: ViewChild,
                args: ['inputElement']
            }], options: [{
                type: Input
            }], isOpened: [{
                type: Input
            }], onBlur: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm5scC1jYWxlbmRhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1jYWxlbmRhci9zcmMvdm5scC1jYWxlbmRhci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy92YS91aS1zZGsvdm5scC1jYWxlbmRhci9zcmMvdm5scC1jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFJTCxZQUFZLEVBQ1osVUFBVSxFQUNWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUNMLFlBQVksRUFDWixVQUFVLEVBQ1YsU0FBUyxFQUNULFNBQVMsRUFDVCxPQUFPLEVBQ1AsaUJBQWlCLEVBQ2pCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLE9BQU8sRUFDUCxXQUFXLEVBQ1gsTUFBTSxFQUNOLE1BQU0sRUFDTixPQUFPLEVBQ1AsTUFBTSxFQUNOLE9BQU8sRUFDUCxRQUFRLEVBQ1IsT0FBTyxFQUNQLFFBQVEsR0FDVCxNQUFNLFVBQVUsQ0FBQztBQUNsQixPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBUTdFLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQWNoQixNQUFNLE9BQU8scUJBQXFCO0lBd0RoQztRQWpEUyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRTFCLGlDQUFpQztRQUNqQyxtQkFBYyxHQUFzQjtZQUNsQyxXQUFXLEVBQUUsS0FBSztZQUNsQiw4QkFBOEIsRUFBRSxLQUFLO1lBQ3JDLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FB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T0FBTyxJQUFJLElBQUksQ0FBQyxLQUFNLENBQUMsS0FBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDMUM7UUFFRCxJQUFJLEtBQU0sQ0FBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLGVBQWUsQ0FBQyxLQUFNLENBQUMsS0FBYSxFQUFFLEtBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sZUFBZSxDQUFDLEtBQU0sQ0FBQyxLQUFhLEVBQUUsS0FBTSxDQUFDLEtBQWEsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O21IQTlmVSxxQkFBcUI7dUdBQXJCLHFCQUFxQiwySkFSckI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0YsNlFDdERILCtwSEErRkE7NEZEdkNhLHFCQUFxQjtrQkFaakMsU0FBUzsrQkFDRSxlQUFlLGFBR2Q7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLENBQUM7NEJBQ3BELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzBFQUsrQix3QkFBd0I7c0JBQXZELFNBQVM7dUJBQUMsbUJBQW1CO2dCQUNILFlBQVk7c0JBQXRDLFNBQVM7dUJBQUMsY0FBYztnQkFFaEIsT0FBTztzQkFBZixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBbVhzQyxNQUFNO3NCQUFqRCxZQUFZO3VCQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgc3RhcnRPZk1vbnRoLFxyXG4gIGVuZE9mTW9udGgsXHJcbiAgYWRkTW9udGhzLFxyXG4gIHN1Yk1vbnRocyxcclxuICBzZXRZZWFyLFxyXG4gIGVhY2hEYXlPZkludGVydmFsLFxyXG4gIGdldERhdGUsXHJcbiAgZ2V0TW9udGgsXHJcbiAgZ2V0WWVhcixcclxuICBpc1RvZGF5LFxyXG4gIGlzU2FtZU1vbnRoLFxyXG4gIGZvcm1hdCxcclxuICBnZXREYXksXHJcbiAgc3ViRGF5cyxcclxuICBzZXREYXksXHJcbiAgaXNBZnRlcixcclxuICBpc0JlZm9yZSxcclxuICBhZGREYXlzLFxyXG4gIHNldE1vbnRoLFxyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHZpIGZyb20gJ2RhdGUtZm5zL2xvY2FsZS92aSc7XHJcbmltcG9ydCB7IGlzU2FtZURhdGUsIGNyZWF0ZURhdGVSYW5nZSB9IGZyb20gJy4vaGVscGVycy92bmxwLWNhbGVuZGFyLmhlbHBlcic7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZVJhbmdlLFxyXG4gIERheSxcclxuICBBZGRDbGFzcyxcclxuICBEYXRlcGlja2VyT3B0aW9ucyxcclxufSBmcm9tICcuL21vZGVscy92bmxwLWNhbGVuZGFyLm1vZGVsJztcclxuXHJcbmxldCBjb3VudGVyID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndm5scC1jYWxlbmRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICd2bmxwLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsndm5scC1jYWxlbmRhci5jb21wb25lbnQuc2NzcyddLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVm5scENhbGVuZGFyQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBWbmxwQ2FsZW5kYXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uQ2hhbmdlc1xyXG57XHJcbiAgQFZpZXdDaGlsZCgnY2FsZW5kYXJDb250YWluZXInKSBjYWxlbmRhckNvbnRhaW5lckVsZW1lbnQ/OiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudD86IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBEYXRlcGlja2VyT3B0aW9ucztcclxuICBASW5wdXQoKSBpc09wZW5lZCA9IGZhbHNlO1xyXG5cclxuICAvL1NldCBkZWZhdWx0IG9wdGlvbiBmb3IgY2FsZW5kYXJcclxuICBjdXJyZW50T3B0aW9uczogRGF0ZXBpY2tlck9wdGlvbnMgPSB7XHJcbiAgICBpbmNsdWRlRGF5czogJ2FsbCcsXHJcbiAgICBpbmNsdWRlTmV4dE1vbnRoc0ZpcnN0RnVsbFdlZWs6IGZhbHNlLFxyXG4gICAgbWluWWVhcjogMTk3MCxcclxuICAgIG1heFllYXI6IDIwMzAsXHJcbiAgICBkaXNwbGF5Rm9ybWF0OiAnZGQvTU0veXl5eScsXHJcbiAgICBiYXJUaXRsZUZvcm1hdDogJ01NTU0geXl5eScsXHJcbiAgICBkYXlOYW1lc0Zvcm1hdDogJ0VFRUVFRScsXHJcbiAgICByYW5nZVNlcGFyYXRvcjogJy0nLFxyXG4gICAgc2VsZWN0UmFuZ2U6IGZhbHNlLFxyXG4gICAgZmlyc3RDYWxlbmRhckRheTogMSxcclxuICAgIGJhclRpdGxlSWZFbXB0eTogJ0NsaWNrIHRvIHNlbGVjdCBhIGRhdGUnLFxyXG4gICAgbG9jYWxlOiB7IGxvY2FsZTogdmkgfSxcclxuICAgIHBsYWNlaG9sZGVyOiAnZGQvbW0veXl5eSAtIGRkL21tL3l5eXknLFxyXG4gICAgZmllbGRJZDogdGhpcy5kZWZhdWx0RmllbGRJZCxcclxuICAgIHVzZUVtcHR5QmFyVGl0bGU6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheVZhbHVlPzogc3RyaW5nO1xyXG4gIHZpZXdpbmdEYXRlPzogRGF0ZTtcclxuICBiYXJUaXRsZT86IHN0cmluZztcclxuICB2aWV3PzogJ2RheXMnIHwgJ21vbnRocycgfCAneWVhcnMnO1xyXG4gIHllYXJzPzogeyB5ZWFyOiBudW1iZXI7IGlzVGhpc1llYXI6IGJvb2xlYW4gfVtdO1xyXG4gIG1vbnRocz86IHsgbW9udGg6IG51bWJlcjsgbmFtZTogc3RyaW5nOyBpc1NlbGVjdGVkOiBib29sZWFuIH1bXTtcclxuICBkYXlOYW1lcz86IHN0cmluZ1tdO1xyXG4gIGRheXM/OiBEYXlbXTtcclxuICBmaWVsZElkPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2V0Rm9jdXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfcmFuZ2U/OiBEYXRlUmFuZ2U7XHJcblxyXG4gIHByaXZhdGUgb25Ub3VjaGVkQ2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcclxuXHJcbiAgLy9TZXQgZGVmYXVsdCByYW5nZVxyXG4gIHNldCByYW5nZSh2YWw6IERhdGVSYW5nZSB8IHVuZGVmaW5lZCkge1xyXG4gICAgdGhpcy5fcmFuZ2UgPSB2YWw7XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrKHRoaXMuZ2V0VmFsdWVUb0VtaXQodmFsKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgcmFuZ2UoKTogRGF0ZVJhbmdlIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnZpZXcgPSAnZGF5cyc7XHJcbiAgICB0aGlzLnJhbmdlID0ge1xyXG4gICAgICBzdGFydDogbmV3IERhdGUoKSxcclxuICAgICAgZW5kOiBuZXcgRGF0ZSgpLFxyXG4gICAgfTtcclxuICAgIHRoaXMudmlld2luZ0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuYmFyVGl0bGUgPSBmb3JtYXQoXHJcbiAgICAgIHRoaXMudmlld2luZ0RhdGUgYXMgRGF0ZSxcclxuICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5iYXJUaXRsZUZvcm1hdCBhcyBzdHJpbmcsXHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMubG9jYWxlXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaW5pdERheU5hbWVzKCk7XHJcbiAgICB0aGlzLmluaXRZZWFycygpO1xyXG4gICAgdGhpcy5pbml0TW9udGhzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoJ29wdGlvbnMnIGluIGNoYW5nZXMpIHtcclxuICAgICAgdGhpcy51cGRhdGVPcHRpb25zKGNoYW5nZXNbJ29wdGlvbnMnXS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICB0aGlzLmluaXREYXlOYW1lcygpO1xyXG4gICAgICB0aGlzLmluaXREYXlzKCk7XHJcbiAgICAgIHRoaXMuaW5pdFllYXJzKCk7XHJcbiAgICAgIHRoaXMuaW5pdE1vbnRocygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9LZWVwIGZvY3VzIGlucHV0IHNob3dpbmcgY2FsZW5kYXIgY29udGFpbmVyIGFuZCByZW1vdmUgd2hlbiBjbG9zZSBjYWxlbmRhciBjb250YWluZXJcclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XHJcbiAgICBpZiAodGhpcy5pc09wZW5lZCkge1xyXG4gICAgICB0aGlzLmlucHV0RWxlbWVudD8ubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRGaWVsZElkKCk6IHN0cmluZyB7XHJcbiAgICAvLyBPbmx5IGV2YWx1YXRlIGFuZCBpbmNyZW1lbnQgaWYgcmVxdWlyZWRcclxuICAgIGNvbnN0IHZhbHVlID0gYGRhdGVwaWNrZXItJHtjb3VudGVyKyt9YDtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnZGVmYXVsdEZpZWxkSWQnLCB7IHZhbHVlIH0pO1xyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vVXBkYXRlIG9wdGlvbiBzZXR0aW5nIGlucHV0XHJcbiAgdXBkYXRlT3B0aW9ucyhvcHRpb25zOiBEYXRlcGlja2VyT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50T3B0aW9ucyA9IHtcclxuICAgICAgLi4udGhpcy5jdXJyZW50T3B0aW9ucyxcclxuICAgICAgLi4ub3B0aW9ucyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL0hhbmRsZSBuZXh0IG1vbnRoIGluIHZpZXdcclxuICBuZXh0TW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdpbmdEYXRlID0gYWRkTW9udGhzKHRoaXMudmlld2luZ0RhdGUgYXMgRGF0ZSwgMSk7XHJcbiAgICB0aGlzLmluaXREYXlzKCk7XHJcbiAgICB0aGlzLmJhclRpdGxlID0gZm9ybWF0KFxyXG4gICAgICB0aGlzLnZpZXdpbmdEYXRlLFxyXG4gICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmJhclRpdGxlRm9ybWF0IGFzIHN0cmluZyxcclxuICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5sb2NhbGVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL0hhbmRsZSBwcmV2IG1vbnRoIGluIHZpZXdcclxuICBwcmV2TW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdpbmdEYXRlID0gc3ViTW9udGhzKHRoaXMudmlld2luZ0RhdGUgYXMgRGF0ZSwgMSk7XHJcbiAgICB0aGlzLmluaXREYXlzKCk7XHJcbiAgICB0aGlzLmJhclRpdGxlID0gZm9ybWF0KFxyXG4gICAgICB0aGlzLnZpZXdpbmdEYXRlLFxyXG4gICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmJhclRpdGxlRm9ybWF0IGFzIHN0cmluZyxcclxuICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5sb2NhbGVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvL0luaXQgZGF0ZSBzdGFydCBhbmQgZGF0ZSBlbmRcclxuICBzZXREYXRlKGk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuZGF5cyFbaV0uZGF0ZTtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50T3B0aW9ucy5zZWxlY3RSYW5nZSkge1xyXG4gICAgICBpZiAoIXRoaXMucmFuZ2UhLnN0YXJ0ICYmICF0aGlzLnJhbmdlIS5lbmQpIHtcclxuICAgICAgICB0aGlzLnJhbmdlIS5zdGFydCA9IGRhdGU7XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgdGhpcy5yYW5nZSEuc3RhcnQgJiZcclxuICAgICAgICAhdGhpcy5yYW5nZSEuZW5kICYmXHJcbiAgICAgICAgaXNBZnRlcihkYXRlLCB0aGlzLnJhbmdlIS5zdGFydClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5yYW5nZSEuZW5kID0gZGF0ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJhbmdlIS5lbmQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5yYW5nZSEuc3RhcnQgPSBkYXRlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJhbmdlIS5zdGFydCA9IHRoaXMucmFuZ2UhLmVuZCA9IGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0RGF5cygpO1xyXG4gIH1cclxuXHJcbiAgLy9BcHBseSBjaGFuZ2Ugd2hlbiB1c2VyIHNlbGVjdCBkYXRlIGFuZCBjbGljayBhcHBseSBidXR0b25cclxuICBhcHBseUNoYW5nZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzcGxheVZhbHVlID0gdGhpcy5mb3JtYXREaXNwbGF5KCk7XHJcblxyXG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcclxuICAgICAgdGhpcy5iYXJUaXRsZSA9IGZvcm1hdChcclxuICAgICAgICB0aGlzLnZpZXdpbmdEYXRlIGFzIERhdGUsXHJcbiAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5iYXJUaXRsZUZvcm1hdCBhcyBzdHJpbmcsXHJcbiAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5sb2NhbGVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYmFyVGl0bGUgPSB0aGlzLmN1cnJlbnRPcHRpb25zLnVzZUVtcHR5QmFyVGl0bGVcclxuICAgICAgICA/IHRoaXMuY3VycmVudE9wdGlvbnMuYmFyVGl0bGVJZkVtcHR5XHJcbiAgICAgICAgOiBmb3JtYXQoXHJcbiAgICAgICAgICAgIHRoaXMudmlld2luZ0RhdGUgYXMgRGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5iYXJUaXRsZUZvcm1hdCBhcyBzdHJpbmcsXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMubG9jYWxlXHJcbiAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQ2hhbmdlIGFuZCBlbWl0IHZhbHVlXHJcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sodGhpcy5nZXRWYWx1ZVRvRW1pdCh0aGlzLnJhbmdlKSk7XHJcblxyXG4gICAgdGhpcy5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgLy9Vc2VyIHNlbGVjdGVkIHllYXJcclxuICBzZXRZZWFyKGk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3aW5nRGF0ZSA9IHNldFllYXIodGhpcy52aWV3aW5nRGF0ZSA/PyAxLCB0aGlzLnllYXJzIVtpXS55ZWFyKTtcclxuICAgIHRoaXMuaW5pdERheXMoKTtcclxuICAgIHRoaXMuaW5pdFllYXJzKCk7XHJcbiAgICB0aGlzLnZpZXcgPSAnbW9udGhzJztcclxuICAgIHRoaXMuYmFyVGl0bGUgPSBmb3JtYXQoXHJcbiAgICAgIHRoaXMudmlld2luZ0RhdGUsXHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuYmFyVGl0bGVGb3JtYXQgYXMgc3RyaW5nLFxyXG4gICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmxvY2FsZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vVXNlciBzZWxlY3RlZCBtb250aFxyXG4gIHNldE1vbnRoKGk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3aW5nRGF0ZSA9IHNldE1vbnRoKFxyXG4gICAgICB0aGlzLnZpZXdpbmdEYXRlIGFzIERhdGUsXHJcbiAgICAgIHRoaXMubW9udGhzIVtpXSEubW9udGhcclxuICAgICk7XHJcbiAgICB0aGlzLmluaXREYXlzKCk7XHJcbiAgICB0aGlzLmluaXRNb250aHMoKTtcclxuICAgIHRoaXMudmlldyA9ICdkYXlzJztcclxuICAgIHRoaXMuYmFyVGl0bGUgPSBmb3JtYXQoXHJcbiAgICAgIHRoaXMudmlld2luZ0RhdGUsXHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuYmFyVGl0bGVGb3JtYXQgYXMgc3RyaW5nLFxyXG4gICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmxvY2FsZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vQ3JlYXRlIGRheXMgYXJyYXkgZnJvbSBmaXNydCBkYXkgYW5kIGxhc3QgZGF5IG9mIHNlbGVjdGVkIG1vbnRoIGFuZCBzb21lIG9mIHByZXYgYW5kIG5leHQgbW9udGhcclxuICBpbml0RGF5cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy52aWV3aW5nRGF0ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgodGhpcy52aWV3aW5nRGF0ZSk7XHJcbiAgICBjb25zdCBlbmQgPSBlbmRPZk1vbnRoKHRoaXMudmlld2luZ0RhdGUpO1xyXG5cclxuICAgIHRoaXMuZGF5cyA9IGVhY2hEYXlPZkludGVydmFsKHsgc3RhcnQsIGVuZCB9KS5tYXAoKGRhdGUpID0+XHJcbiAgICAgIHRoaXMuZm9ybWF0RGF5KGRhdGUpXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0TW9udGhEYXkgPVxyXG4gICAgICBnZXREYXkoc3RhcnQpIC0gKHRoaXMuY3VycmVudE9wdGlvbnMuZmlyc3RDYWxlbmRhckRheSBhcyBudW1iZXIpO1xyXG4gICAgY29uc3QgcHJldkRheXMgPVxyXG4gICAgICBmaXJzdE1vbnRoRGF5IDwgMFxyXG4gICAgICAgID8gNyAtICh0aGlzLmN1cnJlbnRPcHRpb25zLmZpcnN0Q2FsZW5kYXJEYXkgYXMgbnVtYmVyKVxyXG4gICAgICAgIDogZmlyc3RNb250aERheTtcclxuICAgIGxldCBuZXh0RGF5cyA9XHJcbiAgICAgICh0aGlzLmN1cnJlbnRPcHRpb25zLmZpcnN0Q2FsZW5kYXJEYXkgPT09IDEgPyA3IDogNikgLSBnZXREYXkoZW5kKTtcclxuXHJcbiAgICBjb25zdCBzaG93UHJldk1vbnRoRGF5cyA9XHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW5jbHVkZURheXMgPT09ICdhbGwnIHx8XHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW5jbHVkZURheXMgPT09ICdwcmV2aW91cy1tb250aCc7XHJcbiAgICBjb25zdCBzaG93TmV4dE1vbnRoRGF5cyA9XHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW5jbHVkZURheXMgPT09ICdhbGwnIHx8XHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW5jbHVkZURheXMgPT09ICduZXh0LW1vbnRoJztcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIHNob3dOZXh0TW9udGhEYXlzICYmXHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuaW5jbHVkZU5leHRNb250aHNGaXJzdEZ1bGxXZWVrXHJcbiAgICApIHtcclxuICAgICAgbmV4dERheXMgKz0gNztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBwcmV2RGF5czsgaSsrKSB7XHJcbiAgICAgIHRoaXMuZGF5cy51bnNoaWZ0KHRoaXMuZm9ybWF0RGF5KHN1YkRheXMoc3RhcnQsIGkpLCBzaG93UHJldk1vbnRoRGF5cykpO1xyXG4gICAgfVxyXG5cclxuICAgIG5ldyBBcnJheShuZXh0RGF5cylcclxuICAgICAgLmZpbGwodW5kZWZpbmVkKVxyXG4gICAgICAuZm9yRWFjaCgoXywgaSkgPT5cclxuICAgICAgICB0aGlzLmRheXMhLnB1c2godGhpcy5mb3JtYXREYXkoYWRkRGF5cyhlbmQsIGkgKyAxKSwgc2hvd05leHRNb250aERheXMpKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9DcmVhdGUgeWVhcnMgYXJyYXkgZnJvbSBtYXhZZWFyIGFuZCBtaW5ZZWFyXHJcbiAgaW5pdFllYXJzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmFuZ2UgPVxyXG4gICAgICAodGhpcy5jdXJyZW50T3B0aW9ucy5tYXhZZWFyIGFzIG51bWJlcikgLVxyXG4gICAgICAodGhpcy5jdXJyZW50T3B0aW9ucy5taW5ZZWFyIGFzIG51bWJlcik7XHJcblxyXG4gICAgdGhpcy55ZWFycyA9IEFycmF5LmZyb20oXHJcbiAgICAgIG5ldyBBcnJheShyYW5nZSksXHJcbiAgICAgICh4LCBpKSA9PiBpICsgKHRoaXMuY3VycmVudE9wdGlvbnMubWluWWVhciBhcyBudW1iZXIpXHJcbiAgICApLm1hcCgoeWVhcikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHllYXI6IHllYXIsXHJcbiAgICAgICAgaXNUaGlzWWVhcjogeWVhciA9PT0gZ2V0WWVhcih0aGlzLnZpZXdpbmdEYXRlIGFzIERhdGUpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0NyZWF0ZSBtb250aHMgYXJyYXkgMSAtPiAxMlxyXG4gIGluaXRNb250aHMoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbnRocyA9IEFycmF5LmZyb20obmV3IEFycmF5KDEyKSwgKHgsIGkpID0+XHJcbiAgICAgIHNldE1vbnRoKG5ldyBEYXRlKCksIGkgKyAxKVxyXG4gICAgKS5tYXAoKGRhdGUpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgIG5hbWU6IGZvcm1hdChkYXRlLCAnTU1NJyksXHJcbiAgICAgICAgaXNTZWxlY3RlZDogZGF0ZS5nZXRNb250aCgpID09PSBnZXRNb250aCh0aGlzLnZpZXdpbmdEYXRlIGFzIERhdGUpLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL0NyZWF0ZSBkYXlOYW1lcyBhcnJheVxyXG4gIGluaXREYXlOYW1lcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF5TmFtZXMgPSBbXTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jdXJyZW50T3B0aW9ucy5maXJzdENhbGVuZGFyRGF5O1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBzdGFydCA/PyAxOyBpIDw9IDYgKyAoc3RhcnQgPz8gMSk7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5KG5ldyBEYXRlKCksIGkgPz8gMSk7XHJcblxyXG4gICAgICB0aGlzLmRheU5hbWVzLnB1c2goXHJcbiAgICAgICAgZm9ybWF0KFxyXG4gICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuZGF5TmFtZXNGb3JtYXQgPz8gJycsXHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRPcHRpb25zLmxvY2FsZVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vU3dpdGNoIHZpZXcgYmV0d2VlbiBkYXkgYW5kIHllYXJcclxuICB0b2dnbGVWaWV3KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy52aWV3ID09PSAnZGF5cycgPyAneWVhcnMnIDogJ2RheXMnO1xyXG4gIH1cclxuXHJcbiAgLy9PcGVuLCBjbG9zZSBjYWxlbmRhclxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNPcGVuZWQgPSAhdGhpcy5pc09wZW5lZDtcclxuXHJcbiAgICAvL0ZvY3VzIGlucHV0IHdoZW4gY2FsZW5kYXIgb3BlblxyXG4gICAgaWYgKHRoaXMuaXNPcGVuZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuZWQgJiYgdGhpcy52aWV3ID09PSAneWVhcnMnKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVmlldygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9DbG9zZSBjYWxlbmRhclxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xyXG5cclxuICAgIGlmICh0aGlzLnZpZXcgPT09ICd5ZWFycycpIHtcclxuICAgICAgdGhpcy50b2dnbGVWaWV3KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL1Jlc2V0IGNhbGVuZGFyIHRvIHRoZSBvcmlnaW5hbCBzdGF0ZVxyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yYW5nZSA9IHtcclxuICAgICAgc3RhcnQ6IG5ldyBEYXRlKCksXHJcbiAgICAgIGVuZDogbmV3IERhdGUoKSxcclxuICAgIH07XHJcbiAgICB0aGlzLmluaXREYXlzKCk7XHJcbiAgfVxyXG5cclxuICAvL1dyaXRlIGEgdmFsdWUgdG8gZWxlbWVudFxyXG4gIHdyaXRlVmFsdWUodmFsOiBEYXRlUmFuZ2UgfCBEYXRlIHwgc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMucmFuZ2UhLnN0YXJ0ID0gdGhpcy5yYW5nZSEuZW5kID0gbmV3IERhdGUodmFsKTtcclxuICAgICAgfSBlbHNlIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5yYW5nZSEuc3RhcnQgPSB0aGlzLnJhbmdlIS5lbmQgPSB2YWw7XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsLnN0YXJ0KSB7XHJcbiAgICAgICAgLy8gQ2hlY2tpbmcgaWYgaXQncyBpbnN0YW5jZSBvZiBEYXRlUmFuZ2VcclxuICAgICAgICB0aGlzLnJhbmdlID0gdmFsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRocm93IEVycm9yKCdJbnZhbGlkIGlucHV0IGRhdGEgdHlwZScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnZpZXdpbmdEYXRlID0gdGhpcy5yYW5nZSEuc3RhcnQgfHwgdGhpcy52aWV3aW5nRGF0ZTtcclxuXHJcbiAgICAgIHRoaXMuaW5pdERheXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgdGhpcy5vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8vSGFuZGxlIGNsb3NlIGVsZW1lbnQgd2hlbiBjbGljayBvdXRzaWRlIGNhbGVuZGFyIGNvbnRhaW5lclxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSkgb25CbHVyKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5pc09wZW5lZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50ID09IG51bGwpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vS2VlcCBzaG93IGNhbGVuZGFyIHdoZW4gdXNlciBjbGljayBpbnNpZGUgaW5wdXRcclxuICAgIGlmIChcclxuICAgICAgZS50YXJnZXQgPT09IHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgfHxcclxuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyg8RWxlbWVudD5lLnRhcmdldCkgfHxcclxuICAgICAgKCg8RWxlbWVudD5lLnRhcmdldCkucGFyZW50RWxlbWVudCAmJlxyXG4gICAgICAgICg8RWxlbWVudD5lLnRhcmdldCkucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdkYXktdW5pdCcpKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvL0Nsb3NlIGNhbGVuZGFyIHdoZW4gdXNlciBjbGljayBvdXRzaWRlIGNhbGVuZGFyIGFuZCBpbnB1dCBlbGVtZW50XHJcbiAgICBpZiAoXHJcbiAgICAgIHRoaXMuY2FsZW5kYXJDb250YWluZXJFbGVtZW50Py5uYXRpdmVFbGVtZW50ICE9PSBlLnRhcmdldCAmJlxyXG4gICAgICAhdGhpcy5jYWxlbmRhckNvbnRhaW5lckVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoXHJcbiAgICAgICAgPEVsZW1lbnQ+ZS50YXJnZXRcclxuICAgICAgKSAmJlxyXG4gICAgICAhKDxFbGVtZW50PmUudGFyZ2V0KS5jbGFzc0xpc3QuY29udGFpbnMoJ3llYXItdW5pdCcpICYmXHJcbiAgICAgICEoPEVsZW1lbnQ+ZS50YXJnZXQpLmNsYXNzTGlzdC5jb250YWlucygnbW9udGgtdW5pdCcpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9IYW5kbGUgZm9ybWF0IGRheVxyXG4gIGZvcm1hdERheSA9IChkYXRlOiBEYXRlLCBpc1Zpc2libGU6IGJvb2xlYW4gPSB0cnVlKTogRGF5ID0+ICh7XHJcbiAgICBkYXRlOiBkYXRlLFxyXG4gICAgZGF5OiBnZXREYXRlKGRhdGUpLFxyXG4gICAgbW9udGg6IGdldE1vbnRoKGRhdGUpLFxyXG4gICAgeWVhcjogZ2V0WWVhcihkYXRlKSxcclxuICAgIGluVGhpc01vbnRoOiBpc1NhbWVNb250aChkYXRlLCB0aGlzLnZpZXdpbmdEYXRlIGFzIERhdGUpLFxyXG4gICAgaXNUb2RheTogaXNWaXNpYmxlICYmIGlzVG9kYXkoZGF0ZSksXHJcbiAgICBpc1NlbGVjdGVkOiBpc1Zpc2libGUgJiYgdGhpcy5pc0RhdGVTZWxlY3RlZChkYXRlKSxcclxuICAgIGlzSW5SYW5nZTogaXNWaXNpYmxlICYmIHRoaXMuaXNJblJhbmdlKGRhdGUpLFxyXG4gICAgaXNTZWxlY3RhYmxlOiBpc1Zpc2libGUgJiYgdGhpcy5pc0RhdGVTZWxlY3RhYmxlKGRhdGUpLFxyXG4gICAgaXNTdGFydDogaXNWaXNpYmxlICYmIHRoaXMuaXNSYW5nZUJvdW5kYXJ5KGRhdGUsICdzdGFydCcpLFxyXG4gICAgaXNFbmQ6IGlzVmlzaWJsZSAmJiB0aGlzLmlzUmFuZ2VCb3VuZGFyeShkYXRlLCAnZW5kJyksXHJcbiAgICBpc1Zpc2libGUsXHJcbiAgfSk7XHJcblxyXG4gIC8vR2V0IHN0eWxlcyBkYXRlXHJcbiAgZ2V0RGF5Q2xhc3NlcyhkYXk6IERheSk6IEFkZENsYXNzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICdpcy1hbm90aGVyLW1vbnRoJzogIWRheS5pblRoaXNNb250aCxcclxuICAgICAgJ2lzLXRvZGF5JzogZGF5LmlzVG9kYXksXHJcbiAgICAgICdpcy1zZWxlY3RlZCc6IGRheS5pc1NlbGVjdGVkLFxyXG4gICAgICAnaXMtaW4tcmFuZ2UnOiBkYXkuaXNJblJhbmdlLFxyXG4gICAgICAnaXMtZGlzYWJsZWQnOiAhZGF5LmlzU2VsZWN0YWJsZSxcclxuICAgICAgJ3JhbmdlLXN0YXJ0JzogZGF5LmlzU3RhcnQsXHJcbiAgICAgICdyYW5nZS1lbmQnOiBkYXkuaXNFbmQsXHJcbiAgICAgICdpcy12aXNpYmxlJzogZGF5LmlzVmlzaWJsZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvL0NoZWNrcyBpZiBzcGVjaWZpZWQgZGF0ZSBpcyBub3QgbGF0ZXIgdGhhbiB0aGUgbGFzdCBkYXkgb2YgdGhpcyBtb250aFxyXG4gIHByaXZhdGUgaXNEYXRlU2VsZWN0YWJsZShkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBtYXhEYXRlID0gZW5kT2ZNb250aChuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUudmFsdWVPZigpO1xyXG5cclxuICAgIHJldHVybiB0aW1lc3RhbXAgPCBtYXhEYXRlLnZhbHVlT2YoKTtcclxuICB9XHJcblxyXG4gIC8vQ2hlY2sgZGF0ZSBpcyBkYXRlIHN0YXJ0IG9yIGRhdGUgZW5kXHJcbiAgcHJpdmF0ZSBpc0RhdGVTZWxlY3RlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc1NhbWVEYXRlKGRhdGUsIHRoaXMucmFuZ2UhLnN0YXJ0IGFzIERhdGUpIHx8XHJcbiAgICAgIGlzU2FtZURhdGUoZGF0ZSwgdGhpcy5yYW5nZSEuZW5kIGFzIERhdGUpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9DaGVjayBkYXRlIGlzIHdpdGhpbiBkYXRlIHN0YXJ0IGFuZCBkYXRlIGVuZCB0byBzdHlsZXMgZWxlbWVudFxyXG4gIHByaXZhdGUgaXNJblJhbmdlKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMuaXNEYXRlU2VsZWN0ZWQoZGF0ZSkgfHxcclxuICAgICAgKGlzQWZ0ZXIoZGF0ZSwgdGhpcy5yYW5nZSEuc3RhcnQgYXMgRGF0ZSkgJiZcclxuICAgICAgICBpc0JlZm9yZShkYXRlLCB0aGlzLnJhbmdlIS5lbmQgYXMgRGF0ZSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy9Gb3JtYXQgZGlzcGxheSBvdXRwdXRcclxuICBwcml2YXRlIGZvcm1hdERpc3BsYXkoKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy5yYW5nZSkge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybWF0dGVkU3RhcnREYXRlID0gZm9ybWF0KFxyXG4gICAgICB0aGlzLnJhbmdlLnN0YXJ0IGFzIERhdGUsXHJcbiAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMuZGlzcGxheUZvcm1hdCA/PyAnJyxcclxuICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5sb2NhbGVcclxuICAgICk7XHJcblxyXG4gICAgLy9XaGVuIGNhbGVuZGFyIGlzIHBpY2sgcmFuZ2VcclxuICAgIGlmICh0aGlzLmN1cnJlbnRPcHRpb25zLnNlbGVjdFJhbmdlKSB7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZEVuZERhdGUgPSBmb3JtYXQoXHJcbiAgICAgICAgdGhpcy5yYW5nZS5lbmQgfHwgKHRoaXMucmFuZ2Uuc3RhcnQgYXMgRGF0ZSksXHJcbiAgICAgICAgdGhpcy5jdXJyZW50T3B0aW9ucy5kaXNwbGF5Rm9ybWF0ID8/ICcnLFxyXG4gICAgICAgIHRoaXMuY3VycmVudE9wdGlvbnMubG9jYWxlXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gYCR7Zm9ybWF0dGVkU3RhcnREYXRlfSAke3RoaXMuY3VycmVudE9wdGlvbnMucmFuZ2VTZXBhcmF0b3J9ICR7Zm9ybWF0dGVkRW5kRGF0ZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIC8vV2hlbiBjYWxlbmRhciBpcyBwaWNrIG9uZSBkYXlcclxuICAgIHJldHVybiBmb3JtYXR0ZWRTdGFydERhdGU7XHJcbiAgfVxyXG5cclxuICAvL0NoZWNrIGRhdGUgaXMgc3RhcnQgb3IgZW5kIHRvIHN0eWxlcyBlbGVtZW50XHJcbiAgcHJpdmF0ZSBpc1JhbmdlQm91bmRhcnkoZGF0ZTogRGF0ZSwgYm91bmRhcnk6ICdzdGFydCcgfCAnZW5kJyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgIXRoaXMucmFuZ2UhW2JvdW5kYXJ5XSB8fCBpc1NhbWVEYXRlKGRhdGUsIHRoaXMucmFuZ2UhW2JvdW5kYXJ5XSBhcyBEYXRlKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vR2V0IGRheSBzdGFydCBhbmQgZGF5IGVuZCBhbmQgZW1pdCBvdXRwdXRcclxuICBwcml2YXRlIGdldFZhbHVlVG9FbWl0KHJhbmdlOiBEYXRlUmFuZ2UgfCB1bmRlZmluZWQpOiBEYXRlUmFuZ2UgfCBEYXRlIHtcclxuICAgIGlmICghdGhpcy5jdXJyZW50T3B0aW9ucy5zZWxlY3RSYW5nZSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUocmFuZ2UhLnN0YXJ0IS5nZXRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyYW5nZSEuZW5kKSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVEYXRlUmFuZ2UocmFuZ2UhLnN0YXJ0IGFzIERhdGUsIHJhbmdlIS5lbmQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjcmVhdGVEYXRlUmFuZ2UocmFuZ2UhLnN0YXJ0IGFzIERhdGUsIHJhbmdlIS5zdGFydCBhcyBEYXRlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cInJlbGF0aXZlXCI+XHJcbiAgPGRpdiAoY2xpY2spPVwidG9nZ2xlKClcIiBjbGFzcz1cIm1haW4tY2FsZW5kYXItaW5wdXRcIj5cclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wdXRFbGVtZW50XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgY2xhc3M9XCJ3LVsxMDAlXSBoLVsxMDAlXSB0ZXh0LVsxNnB4XSBsZWFkaW5nLVsyNHB4XSBvdXRsaW5lLW5vbmUgYmctdHJhbnNwYXJlbnQgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICBbKG5nTW9kZWwpXT1cImRpc3BsYXlWYWx1ZVwiXHJcbiAgICAgIHJlYWRvbmx5XHJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJjdXJyZW50T3B0aW9ucy5wbGFjZWhvbGRlclwiXHJcbiAgICAgIFtpZF09XCJmaWVsZElkXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIC8+XHJcbiAgICA8c3BhbiBjbGFzcz1cInRleHQtcHJpbWFyeSB0ZXh0LVsyMHB4XVwiPlxyXG4gICAgICA8aSBbY2xhc3NdPVwiJ2ljb24tdm5scC1pY29uLWNhbGVuZGFyLTEtbGluZWFyJ1wiPjwvaT5cclxuICAgIDwvc3Bhbj5cclxuICA8L2Rpdj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPGRpdiBjbGFzcz1cIm1haW4tY2FsZW5kYXItY29udGFpbmVyXCIgKm5nSWY9XCJpc09wZW5lZFwiICNjYWxlbmRhckNvbnRhaW5lcj5cclxuICAgIDxkaXYgY2xhc3M9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidy1bMTAwJV0gaC1bNTBweF1cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB5LVsxMHB4XSBpdGVtcy1jZW50ZXIgYm9yZGVyLWItWzFweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1zdHJva2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgKGNsaWNrKT1cInByZXZNb250aCgpXCIgY2xhc3M9XCJ0ZXh0LVsxMnB4XSB0ZXh0LW5ldXRyYWwtNCBmb250LWJvbGQgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgPGkgW2NsYXNzXT1cIidpY29uLXZubHAtaWNvbi1hcnJvdy1sZWZ0LTItbGluZWFyJ1wiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtbmV1dHJhbC0yIGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVWaWV3KClcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7eyBiYXJUaXRsZSB9fVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiAoY2xpY2spPVwibmV4dE1vbnRoKClcIiBjbGFzcz1cInRleHQtWzEycHhdIHRleHQtbmV1dHJhbC00IGZvbnQtYm9sZCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICA8aSBbY2xhc3NdPVwiJ2ljb24tdm5scC1pY29uLWFycm93LXJpZ2h0LTMtbGluZWFyJ1wiPjwvaT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInctWzEwMCVdIHB0LVsxMHB4XSB0ZXh0LXhzIGZvbnQtbm9ybWFsXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInZpZXcgPT09ICdkYXlzJ1wiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzcz1cInctWzEwMCVdIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdGV4dC1uZXV0cmFsLTUgZm9udC1ub3JtYWxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRheS1uYW1lLXVuaXRcIiAqbmdGb3I9XCJsZXQgbmFtZSBvZiBkYXlOYW1lc1wiPlxyXG4gICAgICAgICAgICAgIHt7IG5hbWUgfX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtWzE1cHhdIHctWzEwMCVdIGlubGluZS1ibG9ja1wiPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzPVwiZGF5LXVuaXRcIlxyXG4gICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBkYXkgb2YgZGF5czsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImRheS5pc1NlbGVjdGFibGUgJiYgc2V0RGF0ZShpKVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkYXktYmFja2dyb3VuZC11cHBlclwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ0aGlzLmdldERheUNsYXNzZXMoZGF5KVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3sgZGF5LmlzVmlzaWJsZSA/IGRheS5kYXkgOiAnJyB9fVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJkYXktYmFja2dyb3VuZC1sb3dlclwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ0aGlzLmdldERheUNsYXNzZXMoZGF5KVwiXHJcbiAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInZpZXcgPT09ICd5ZWFycydcIiBjbGFzcz1cIm1haW4tY2FsZW5kYXIteWVhcnNcIj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHllYXJzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJ5ZWFyLXVuaXRcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdpcy1zZWxlY3RlZCc6IHllYXIuaXNUaGlzWWVhciB9XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInNldFllYXIoaSlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7eyB5ZWFyLnllYXIgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwidmlldyA9PT0gJ21vbnRocydcIiBjbGFzcz1cIm1haW4tY2FsZW5kYXItbW9udGhzXCI+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgbW9udGggb2YgbW9udGhzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJtb250aC11bml0XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnaXMtc2VsZWN0ZWQnOiBtb250aC5pc1NlbGVjdGVkIH1cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwic2V0TW9udGgoaSlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7eyBtb250aC5uYW1lIH19XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWJzb2x1dGUgdy1bMTAwJV0gdG9wLVszMjBweF1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCIgY2xhc3M9XCJidG4tY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJhcHBseUNoYW5nZSgpXCIgY2xhc3M9XCJidG4tYXBwbHlcIj5BcHBseTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19