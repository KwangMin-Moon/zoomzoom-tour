import { TourProduct } from "../../tour-product/entity/tour-product.entity";

export type GetAvaliableTourDateParams = {
  tourProduct: TourProduct;
  year: string;
  month: string;
};
