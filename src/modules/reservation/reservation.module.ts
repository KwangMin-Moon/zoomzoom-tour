import { Module } from "@nestjs/common";
import { ReservationService } from "./reservation.service";
import { ReservationPolicyService } from "./reservation-policy/reservation-policy.service";
import { ReservationRepository } from "./repository/reservation.repository";

@Module({
  providers: [
    ReservationService,
    ReservationRepository,
    ReservationPolicyService,
  ],
  exports: [
    ReservationService,
    ReservationRepository,
    ReservationPolicyService,
  ],
})
export class ReservationModule {}
