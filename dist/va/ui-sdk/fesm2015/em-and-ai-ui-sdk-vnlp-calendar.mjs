import * as i0 from '@angular/core';
import { forwardRef, Component, ViewChild, Input, HostListener, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { isSameDay, isSameMonth, isSameYear, getDate, getMonth, getYear, isToday, format, addMonths, subMonths, isAfter, setYear, setMonth, startOfMonth, endOfMonth, eachDayOfInterval, getDay, subDays, addDays, setDay, isBefore } from 'date-fns';
import vi from 'date-fns/locale/vi';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

const isSameDate = (date, current) => isSameDay(date, current) &&
    isSameMonth(date, current) &&
    isSameYear(date, current);
const createDateRange = (start, end) => ({
    start: new Date(start.getTime()),
    end: new Date(end.getTime()),
});

let counter = 0;
class VnlpCalendarComponent {
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
        var _a, _b;
        if (this.isOpened) {
            (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
        }
        else {
            (_b = this.inputElement) === null || _b === void 0 ? void 0 : _b.nativeElement.blur();
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
        this.currentOptions = Object.assign(Object.assign({}, this.currentOptions), options);
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
        var _a;
        this.viewingDate = setYear((_a = this.viewingDate) !== null && _a !== void 0 ? _a : 1, this.years[i].year);
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
        var _a;
        this.dayNames = [];
        const start = this.currentOptions.firstCalendarDay;
        for (let i = start !== null && start !== void 0 ? start : 1; i <= 6 + (start !== null && start !== void 0 ? start : 1); i++) {
            const date = setDay(new Date(), i !== null && i !== void 0 ? i : 1);
            this.dayNames.push(format(date, (_a = this.currentOptions.dayNamesFormat) !== null && _a !== void 0 ? _a : '', this.currentOptions.locale));
        }
    }
    //Switch view between day and year
    toggleView() {
        this.view = this.view === 'days' ? 'years' : 'days';
    }
    //Open, close calendar
    toggle() {
        var _a;
        this.isOpened = !this.isOpened;
        //Focus input when calendar open
        if (this.isOpened === true) {
            (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
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
        var _a, _b, _c;
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
                ((_a = e.target.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('day-unit')))) {
            return;
        }
        //Close calendar when user click outside calendar and input element
        if (((_b = this.calendarContainerElement) === null || _b === void 0 ? void 0 : _b.nativeElement) !== e.target &&
            !((_c = this.calendarContainerElement) === null || _c === void 0 ? void 0 : _c.nativeElement.contains(e.target)) &&
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
        var _a, _b;
        if (!this.range) {
            return '';
        }
        const formattedStartDate = format(this.range.start, (_a = this.currentOptions.displayFormat) !== null && _a !== void 0 ? _a : '', this.currentOptions.locale);
        //When calendar is pick range
        if (this.currentOptions.selectRange) {
            const formattedEndDate = format(this.range.end || this.range.start, (_b = this.currentOptions.displayFormat) !== null && _b !== void 0 ? _b : '', this.currentOptions.locale);
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

class VnlpCalendarModule {
}
VnlpCalendarModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCalendarModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
VnlpCalendarModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: VnlpCalendarModule, declarations: [VnlpCalendarComponent], imports: [CommonModule, FormsModule], exports: [VnlpCalendarComponent, CommonModule, FormsModule] });
VnlpCalendarModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCalendarModule, imports: [CommonModule, FormsModule, CommonModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: VnlpCalendarModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [VnlpCalendarComponent],
                    imports: [CommonModule, FormsModule],
                    exports: [VnlpCalendarComponent, CommonModule, FormsModule],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { VnlpCalendarComponent, VnlpCalendarModule };
//# sourceMappingURL=em-and-ai-ui-sdk-vnlp-calendar.mjs.map
