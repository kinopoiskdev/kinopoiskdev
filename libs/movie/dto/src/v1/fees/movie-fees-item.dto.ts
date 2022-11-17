import {MovieFeesItem} from "@prisma";
import {ApiPropertyOptional} from "@nestjs/swagger";

export class MovieFeesItemDto implements MovieFeesItem {
  @ApiPropertyOptional()
  currency: string;

  @ApiPropertyOptional()
  value: number;
}
