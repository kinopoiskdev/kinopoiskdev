import {MovieBudget} from "@prisma";
import {ApiPropertyOptional} from "@nestjs/swagger";

export class MovieBudgetDto implements MovieBudget {
  @ApiPropertyOptional()
  currency: string;

  @ApiPropertyOptional()
  value: string;
}
