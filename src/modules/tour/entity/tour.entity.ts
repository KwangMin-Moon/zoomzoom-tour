import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { Base } from "../../../common/entity/base.entity";
import { TourProduct } from "../tour-product/entity/tour-product.entity";
import { Reservation } from "../../reservation/entity/reservation.entity";

@Entity()
export class Tour extends Base {
  @OneToMany(() => Reservation, (reservation) => reservation.tour)
  reservations: Reservation[];

  @ManyToOne(() => TourProduct, (tourProduct) => tourProduct.tour)
  tourProduct: TourProduct;
}
