import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

import { Base } from "../../../../common/entity/base.entity";
import { TourHoliday } from "../../tour-holiday/entity/tour-holiday.entity";
import { Tour } from "../../entity/tour.entity";
import { Partner } from "../../../partner/entity/partner.entity";

@Entity()
export class TourProduct extends Base {
  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => TourHoliday, (tourHoliday) => tourHoliday.tourProduct, {
    nullable: true,
  })
  tourHolidays?: TourHoliday[];

  @OneToMany(() => Tour, (tour) => tour.tourProduct, {
    nullable: true,
  })
  tour?: Tour[];

  @ManyToOne(() => Partner, (partner) => partner.tourProducts)
  partner: Partner;

  static of(
    title: string,
    description: string,
    tourHolidays: TourHoliday[]
  ): TourProduct {
    const tourProduct = new TourProduct();
    tourProduct.title = title;
    tourProduct.description = description;
    tourProduct.tourHolidays = tourHolidays;
    return tourProduct;
  }
}
