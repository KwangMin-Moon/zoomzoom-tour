import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

import { TourHoliday } from "../entity/tour-holiday.entity";

@Injectable()
export class TourHolidayRepository extends Repository<TourHoliday> {
  constructor(private dataSource: DataSource) {
    super(TourHoliday, dataSource.createEntityManager());
  }
}
