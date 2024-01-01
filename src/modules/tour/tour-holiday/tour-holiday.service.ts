import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";

import {
  CreateHolidayParams,
  GetAvaliableTourDateParams,
} from "./type/tour-holiday.type";
import { TourHoliday } from "./entity/tour-holiday.entity";
import { DateUtils } from "../../../utils/date-utils";
import { TourHolidayRepository } from "./repository/tour-holiday.repository";

@Injectable()
export class TourHolidayService {
  constructor(private readonly tourHolidayRepository: TourHolidayRepository) {}

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

  async createHoliday({ date, dayOfWeek, tourProduct }: CreateHolidayParams) {
    this.validateCreateHoliday(date, dayOfWeek);

    await this.tourHolidayRepository.save({ date, dayOfWeek, tourProduct });
  }

  private validateCreateHoliday(date: Date, dayOfWeek: number) {
    if (date === null && dayOfWeek === null) {
      throw new BadRequestException(
        "date, dayOfWeek 둘 중 하나는 제공되어야 합니다."
      );
    }

    if (date !== null && dayOfWeek !== null) {
      throw new BadRequestException(
        "date, dayOfWeek 둘 중 하나만 제공되어야 합니다."
      );
    }
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
