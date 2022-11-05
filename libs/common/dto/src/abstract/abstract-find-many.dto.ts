import { IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

type Constructor<T> = new (...args: any[]) => T;

export function AbstractFindManyDto<TQueryDto, TSortDto, TPaginationDto>(
  QueryDto: Constructor<TQueryDto>,
  SortDto: Constructor<TSortDto>,
  PaginationDto: Constructor<TPaginationDto>
) {
  abstract class AbstractFindManyDto {
    @Type(() => QueryDto)
    @IsOptional()
    @ValidateNested({ each: true })
    query: TQueryDto;

    @Type(() => SortDto)
    @IsOptional()
    @ValidateNested({ each: true })
    sort: TSortDto;

    @Type(() => PaginationDto)
    @IsOptional()
    @ValidateNested()
    pagination: TPaginationDto;

    protected constructor(partials: Partial<AbstractFindManyDto>) {
      Object.assign(this, partials);
    }
  }

  return AbstractFindManyDto;
}
