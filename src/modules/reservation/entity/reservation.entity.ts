import { Entity, ManyToOne } from "typeorm";

import { Base } from "../../../common/entity/base.entity";
import { User } from "../../user/entity/user.entity";
import { Tour } from "../../tour/entity/tour.entity";

@Entity()
export class Reservation extends Base {
  @ManyToOne(() => Tour, (tour) => tour.reservations)
  tour: Tour;

  @ManyToOne(() => User, (user) => user.reservations)
  user: User;
}
