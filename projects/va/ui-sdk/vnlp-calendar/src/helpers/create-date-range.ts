import { DateRange } from '../models/vnlp-calendar.model';

export const createDateRange = (start: Date, end: Date): DateRange => ({
  start: new Date(start.getTime()),
  end: new Date(end.getTime()),
});
