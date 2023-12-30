import { Injectable } from "@nestjs/common";

import { GetAvaliableTourDateParams } from "./type/tour-holiday.type";
import { TourHoliday } from "./entity/tour-holiday.entity";
import { DateUtils } from "../../../utils/date-utils";

@Injectable()
export class TourHolidayService {
  constructor() {}

  getAvailableTourDate(params: GetAvaliableTourDateParams): string[] {
    const {
      tourProduct: { tourHolidays },
      year,
      month,
    } = params;

    const { dates, dayOfWeeks } =
      this.getHolidayDateAndDayofWeeks(tourHolidays);

    const allDatesInMonth = DateUtils.createAllDatesInMonth(
      Number(year),
      Number(month)
    );

    const availableDates = allDatesInMonth
      .filter(
        (date) =>
          !dayOfWeeks.includes(DateUtils.getDay(date)) &&
          !dates.includes(DateUtils.getFormatDate(date))
      )
      .map((date) => date.format("YYYY-MM-DD"));

    return availableDates;
  }

  private getHolidayDateAndDayofWeeks(tourHolidays: TourHoliday[]) {
    const dates = tourHolidays
      .filter((holiday) => holiday.date)
      .map((holiday) => DateUtils.getFormatDate(holiday.date));

    const dayOfWeeks = tourHolidays
      .filter((holiday) => holiday.dayOfWeek)
      .map((holiday) => holiday.dayOfWeek);

    return { dates, dayOfWeeks };
  }
}
