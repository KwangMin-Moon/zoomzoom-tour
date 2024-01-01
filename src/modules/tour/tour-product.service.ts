import { Injectable } from "@nestjs/common";
import { TourProductRepository } from "./repository/tour-product.repository";

@Injectable()
export class TourProductService {
  constructor(private readonly tourProductRepository: TourProductRepository) {}

  async getTourProductById(tourProductId: string) {
    return await this.tourProductRepository.findOne({
      where: { id: tourProductId },
      relations: { tourHolidays: true },
    });
  }
}
