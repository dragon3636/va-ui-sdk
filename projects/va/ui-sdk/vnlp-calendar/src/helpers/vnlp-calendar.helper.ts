import { isSameDay, isSameMonth, isSameYear } from 'date-fns';
import { DateRange } from '../models/vnlp-calendar.model';

export const isSameDate = (date: Date, current: Date): boolean =>
  isSameDay(date, current) &&
  isSameMonth(date, current) &&
  isSameYear(date, current);

export const createDateRange = (start: Date, end: Date): DateRange => ({
  start: new Date(start.getTime()),
  end: new Date(end.getTime()),
});
