import { Dayjs } from "dayjs";

export const formatDate = (date: Dayjs) => date.format("MMM D");

export const formatTime = (date: Dayjs) => date.format("hh:mm A");

export const formatDateTime = (date: Dayjs) => date.format("MMM D, hh:mm A");

export const isSameDate = (d1: Dayjs, d2: Dayjs) => {
  return d1.month() === d2.month() && d1.date() === d2.date();
};

export const formatDateTimeRange = (d1: Dayjs, d2: Dayjs) => {
  if (isSameDate(d1, d2)) return `${formatDate(d1)}, ${formatTime(d1)} - ${formatTime(d2)}`;
  return `${formatDateTime(d1)} - ${formatDateTime(d2)}`;
};
