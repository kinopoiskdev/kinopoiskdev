import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class PaginatedQueryDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  page: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(250)
  limit: number;
}
