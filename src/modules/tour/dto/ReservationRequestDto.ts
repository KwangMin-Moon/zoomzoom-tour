import { IsString } from "class-validator";

export class ReservationRequestDto {
  @IsString()
  tourProductId: string;
}
