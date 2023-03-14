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
  // isPreviousStart: boolean;
  // isPreviousEnd: boolean
}

export interface DatepickerOptions {
  includeDays?: 'none' | 'previous-month' | 'next-month' | 'all';
  includeNextMonthsFirstFullWeek?: boolean;
  minYear?: number; // default: current year - 30
  maxYear?: number; // default: current year + 30
  displayFormat?: string; // default: 'MMM D[,] YYYY'
  barTitleFormat?: string; // default: 'MMMM YYYY'
  dayNamesFormat?: string; // default 'ddd'
  barTitleIfEmpty?: string;
  selectRange?: boolean;
  rangeSeparator?: string; // default '-'
  firstCalendarDay?: number; // 0 = Sunday (default), 1 = Monday, ..
  locale?: object;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  fieldId?: string;
  useEmptyBarTitle?: boolean;
}

export type AddClass = string | string[] | { [k: string]: boolean } | null;
