import { Module } from "@nestjs/common";
import { TourController } from "./tour.controller";
import { TourService } from "./tour.service";
import { TourScheduleService } from "./tour-schedule/tour-schedule.service";
import { TourProductService } from "./tour-product/tour-product.service";
import { ReservationModule } from "../reservation/reservation.module";

@Module({
  imports: [ReservationModule],
  controllers: [TourController],
  providers: [TourService, TourScheduleService, TourProductService],
})
export class TourModule {}
