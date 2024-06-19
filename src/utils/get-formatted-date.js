import { format, parseISO } from 'date-fns';

export const getFormattedDate = (date) => format(parseISO(date), 'MMM dd, yyyy');
