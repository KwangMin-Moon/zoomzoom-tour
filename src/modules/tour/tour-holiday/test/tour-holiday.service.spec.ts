import { TestingModule, Test } from "@nestjs/testing";
import { TourHolidayService } from "../tour-holiday.service";
import { TourProduct } from "../../tour-product/entity/tour-product.entity";
import { TourHoliday } from "../entity/tour-holiday.entity";

describe("TourHolidayService", () => {
  let tourHolidayService: TourHolidayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TourHolidayService],
    }).compile();
    tourHolidayService = module.get<TourHolidayService>(TourHolidayService);
  });

  it("should be defined", () => {
    expect(tourHolidayService).toBeDefined();
  });

  describe("getAvailableTourDate", () => {
    it("투어 가능한 날짜들을 반환한다.", () => {
      const year = "2024";
      const month = "1";
      const tourHoildays = [
        TourHoliday.of(new Date("2024-01-01")),
        TourHoliday.of(new Date("2024-01-02")),
      ];
      const tourProduct = TourProduct.of("tour", "tour desc", tourHoildays);

      const days: string[] = tourHolidayService.getAvailableTourDate({
        tourProduct,
        year,
        month,
      });

      expect(days[0]).toBe("2024-01-03");
      expect(days.length).toBe(31 - tourHoildays.length);
    });

    it("특정 요일을 휴일로 지정하면 해당 요일을 뺀 날짜를 반환한다.", () => {
      const year = "2024";
      const month = "1";
      const tourHoildays = [TourHoliday.of(null, 1)];
      const tourProduct = TourProduct.of("tour", "tour desc", tourHoildays);

      const days: string[] = tourHolidayService.getAvailableTourDate({
        tourProduct,
        year,
        month,
      });

      //NOTE: 24년 1월 1일은 월요일이다. dayOfWeek이 1(월)이므로 01/01, 01/08 ... 제외된다.
      expect(days[0]).toBe("2024-01-02");
      expect(days[6]).toBe("2024-01-09");
    });
  });
});
