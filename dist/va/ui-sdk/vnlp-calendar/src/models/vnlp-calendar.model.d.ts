export interface DateRange {
    start?: Date;
    end?: Date;
}
export interface Day {
    date: Date;
    day: number;
    month: number;
    year: number;
    inThisMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    isInRange: boolean;
    isSelectable: boolean;
    isStart: boolean;
    isEnd: boolean;
    isVisible: boolean;
}
export interface DatepickerOptions {
    includeDays?: 'none' | 'previous-month' | 'next-month' | 'all';
    includeNextMonthsFirstFullWeek?: boolean;
    minYear?: number;
    maxYear?: number;
    displayFormat?: string;
    barTitleFormat?: string;
    dayNamesFormat?: string;
    barTitleIfEmpty?: string;
    selectRange?: boolean;
    rangeSeparator?: string;
    firstCalendarDay?: number;
    locale?: object;
    minDate?: Date;
    maxDate?: Date;
    placeholder?: string;
    fieldId?: string;
    useEmptyBarTitle?: boolean;
}
export declare type AddClass = string | string[] | {
    [k: string]: boolean;
} | null;
