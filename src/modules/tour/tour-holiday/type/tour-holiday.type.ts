import { TourProduct } from "../../tour-product/entity/tour-product.entity";
import { TourHoliday } from "../entity/tour-holiday.entity";

export type GetAvaliableTourDateParams = {
  tourProduct: TourProduct;
  year: string;
  month: string;
};

export type CreateHolidayParams = Pick<
  TourHoliday,
  "date" | "dayOfWeek" | "tourProduct"
>;
