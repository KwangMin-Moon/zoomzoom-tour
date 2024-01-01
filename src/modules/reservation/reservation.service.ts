import { Injectable } from "@nestjs/common";

import { Tour } from "../tour/entity/tour.entity";
import { User } from "../user/entity/user.entity";
import { ReservationRepository } from "./repository/reservation.repository";

@Injectable()
export class ReservationService {
  constructor(private readonly reservationRepository: ReservationRepository) {}

  async createReservation(user: User, tour: Tour) {
    return await this.reservationRepository.save({ user, tour });
  }
}
