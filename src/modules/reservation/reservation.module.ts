import { Module } from "@nestjs/common";
import { ReservationService } from "./reservation.service";
import { ReservationPolicyService } from "./reservation-policy/reservation-policy.service";

@Module({
  providers: [ReservationService, ReservationPolicyService],
  exports: [ReservationService],
})
export class ReservationModule {}
