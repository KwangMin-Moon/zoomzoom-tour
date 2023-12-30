import { Module } from "@nestjs/common";

import { ReservationModule } from "../reservation/reservation.module";
import { TourController } from "./tour.controller";
import { TourService } from "./tour.service";
import { TourProductService } from "./tour-product/tour-product.service";
import { TourHolidayService } from "./tour-holiday/tour-holiday.service";

@Module({
  imports: [ReservationModule],
  controllers: [TourController],
  providers: [TourService, TourHolidayService, TourProductService],
})
export class TourModule {}
