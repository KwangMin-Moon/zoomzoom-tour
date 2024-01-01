import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

import { TourProduct } from "../entity/tour-product.entity";

@Injectable()
export class TourProductRepository extends Repository<TourProduct> {
  constructor(private dataSource: DataSource) {
    super(TourProduct, dataSource.createEntityManager());
  }
}
