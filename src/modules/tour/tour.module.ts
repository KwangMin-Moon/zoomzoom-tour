import { Module } from "@nestjs/common";

import { ReservationModule } from "../reservation/reservation.module";
import { TourController } from "./tour.controller";
import { TourService } from "./tour.service";
import { TourProductService } from "./tour-product.service";
import { TourHolidayService } from "./tour-holiday.service";
import { TourHolidayRepository } from "./repository/tour-holiday.repository";
import { TourProductRepository } from "./repository/tour-product.repository";
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
