import { Module } from "@nestjs/common";

import { ReservationModule } from "../reservation/reservation.module";
import { TourController } from "./tour.controller";
import { TourService } from "./tour.service";
import { TourProductService } from "./tour-product/tour-product.service";
import { TourHolidayService } from "./tour-holiday/tour-holiday.service";
import { TourHolidayRepository } from "./tour-holiday/repository/tour-holiday.repository";
import { TourProductRepository } from "./tour-product/repository/tour-product.repository";
import { TourRepository } from "./repository/tour.repository";

@Module({
  imports: [ReservationModule],
  controllers: [TourController],
  providers: [
    TourService,
    TourRepository,
    TourHolidayService,
    TourHolidayRepository,
    TourProductService,
    TourProductRepository,
  ],
})
export class TourModule {}
