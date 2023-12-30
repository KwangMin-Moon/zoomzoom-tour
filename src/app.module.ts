import { Module } from "@nestjs/common";
import { TourModule } from "./modules/tour/tour.module";
import { ReservationModule } from "./modules/reservation/reservation.module";

@Module({
  imports: [TourModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
