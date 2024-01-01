import { Injectable, NotFoundException } from "@nestjs/common";
import { TourHolidayService } from "./tour-holiday/tour-holiday.service";
import { HolidayRequestDto } from "./dto/HolidayRequestDto";
import { TourProductService } from "./tour-product/tour-product.service";

@Injectable()
export class TourService {
  constructor(
    private readonly tourHolidayService: TourHolidayService,
    private readonly tourProductService: TourProductService
  ) {}

  async createTourHoliday({
    tourProductId,
    date,
    dayOfWeek,
  }: HolidayRequestDto) {
    const tourProduct = await this.tourProductService.getTourProductById(
      tourProductId
    );

    if (!tourProduct) {
      throw new NotFoundException(
        `id: ${tourProductId}에 해당하는 tourProduct는 없습니다.`
      );
    }

    return await this.tourHolidayService.createHoliday({
      tourProduct,
      date,
      dayOfWeek,
    });
  }
}
