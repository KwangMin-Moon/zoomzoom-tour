import { Entity, OneToMany } from "typeorm";
import { Base } from "../../../common/entity/base.entity";
import { TourProduct } from "../../tour/entity/tour-product.entity";

@Entity()
export class Partner extends Base {
  @OneToMany(() => TourProduct, (tourProduct) => tourProduct.partner, {
    nullable: true,
  })
  tourProducts: TourProduct[];
}
