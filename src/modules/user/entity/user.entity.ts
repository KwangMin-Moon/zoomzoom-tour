import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "../../../common/entity/base.entity";
import { Reservation } from "../../reservation/entity/reservation.entity";

@Entity()
export class User extends Base {
  @OneToMany(() => Reservation, (reservation) => reservation.user, {
    nullable: true,
  })
  reservations: Reservation[];
}
