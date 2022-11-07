import { IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ParseNumber, SetDefaultValue } from '@common/decorators';
import { Expose } from 'class-transformer';

export class PaginatedQueryDto {
  @ApiPropertyOptional({
    description: 'Страница выборки',
    minimum: 1,
    default: 1,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @ParseNumber()
  @SetDefaultValue(1)
  @Expose()
  page: number;

  @ApiPropertyOptional({
    description: 'Количество элементов на странице',
    minimum: 1,
    maximum: 250,
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(250)
  @ParseNumber()
  @SetDefaultValue(10)
  @Expose()
  limit: number;
}
