import { IsDate, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

export class HolidayRequestDto {
  @IsString()
  tourProductId: string;

  @IsDate()
  @IsOptional()
  date?: Date;

  @IsInt()
  @Max(6)
  @Min(0)
  @IsOptional()
  dayOfWeek?: number;
}
