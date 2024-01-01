import { Injectable, NotFoundException } from "@nestjs/common";
import { TourHolidayService } from "./tour-holiday/tour-holiday.service";
import { HolidayRequestDto } from "./dto/HolidayRequestDto";
import { TourProductService } from "./tour-product/tour-product.service";
import { ReservationRequestDto } from "./dto/ReservationRequestDto";
import { ReservationService } from "../reservation/reservation.service";
import { TourRepository } from "./repository/tour.repository";
import { User } from "../user/entity/user.entity";

@Injectable()
export class TourService {
  constructor(
    private readonly tourHolidayService: TourHolidayService,
    private readonly tourProductService: TourProductService,
    private readonly reservationService: ReservationService,
    private readonly tourRepository: TourRepository
  ) {}

  async reserveTour(user: User, { tourProductId }: ReservationRequestDto) {
    const tourProduct = await this.getExistingTourProduct(tourProductId);
    const tour = await this.tourRepository.save({ tourProduct });

    return await this.reservationService.createReservation(user, tour);
  }

  async createTourHoliday({
    tourProductId,
    date,
    dayOfWeek,
  }: HolidayRequestDto) {
    const tourProduct = await this.getExistingTourProduct(tourProductId);

    return await this.tourHolidayService.createHoliday({
      tourProduct,
      date,
      dayOfWeek,
    });
  }

  private async getExistingTourProduct(tourProductId: string) {
    const tourProduct = await this.tourProductService.getTourProductById(
      tourProductId
    );

    if (!tourProduct) {
      throw new NotFoundException(
        `id: ${tourProductId}에 해당하는 tourProduct는 없습니다.`
      );
    }

    return tourProduct;
  }
}
