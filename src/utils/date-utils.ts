import * as dayjs from "dayjs";

type DateParams = string | number | Date | dayjs.Dayjs;

export class DateUtils {
  static getFormatDate(date?: DateParams) {
    return dayjs(date).format("YYYY-MM-DD");
  }
  static getDay(date?: DateParams) {
    return dayjs(date).day();
  }

  static createAllDatesInMonth(year: number, month: number) {
    const totalDays = dayjs(new Date(year, month - 1)).daysInMonth();
    const dates = Array.from({ length: totalDays }, (_, i) =>
      dayjs(new Date(year, month - 1, i + 1))
    );
    return dates;
  }

  static isSameDate(date1: DateParams, date2: DateParams) {
    return dayjs(date1).diff(dayjs(date2), "date") === 0;
  }
}
