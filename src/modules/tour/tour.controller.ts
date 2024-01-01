import { Body, Controller, Post } from "@nestjs/common";
import { TourService } from "./tour.service";
import { HolidayRequestDto } from "./dto/HolidayRequestDto";

@Controller("tour")
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post("/holiday")
  async createTourHoliday(@Body() holidayRequestDto: HolidayRequestDto) {
    try {
      return await this.tourService.createTourHoliday(holidayRequestDto);
    } catch (error) {
      throw new Error(`투어 휴일 등록에 실패했습니다. ${error.message}`);
    }
  }
}
