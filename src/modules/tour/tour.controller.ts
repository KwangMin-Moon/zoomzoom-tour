import { Body, Controller, Post } from "@nestjs/common";
import { TourService } from "./tour.service";
import { HolidayRequestDto } from "./dto/HolidayRequestDto";
import { ReservationRequestDto } from "./dto/ReservationRequestDto";
import { GetUser } from "../../common/decorator/get-user.decorator";
import { User } from "../user/entity/user.entity";

@Controller("tour")
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post("/reservation")
  async reserveTour(
    @GetUser() user: User,
    @Body() reservationRequestDto: ReservationRequestDto
  ) {
    try {
      const result = await this.tourService.reserveTour(
        user,
        reservationRequestDto
      );
      return { success: true, data: result };
    } catch (error) {
      throw error;
    }
  }

  @Post("/holiday")
  async createTourHoliday(@Body() holidayRequestDto: HolidayRequestDto) {
    try {
      const result = await this.tourService.createTourHoliday(
        holidayRequestDto
      );
      return { success: true, data: result };
    } catch (error) {
      throw error;
    }
  }
}
