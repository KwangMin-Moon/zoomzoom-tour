import { Column, Entity, ManyToOne } from "typeorm";

import { Base } from "../../../../common/entity/base.entity";
import { TourProduct } from "../../tour-product/entity/tour-product.entity";

@Entity()
export class TourHoliday extends Base {
  @Column({ nullable: true })
  date: Date;

  @Column({ type: "int", nullable: true })
  dayOfWeek: number;

  @ManyToOne(() => TourProduct, (tourProduct) => tourProduct.tourHolidays)
  tourProduct: TourProduct;
}
