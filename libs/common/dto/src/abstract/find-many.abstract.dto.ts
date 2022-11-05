import { IsOptional, ValidateNested } from 'class-validator';

export class FindManyAbstractDto<Q, S, P> {
  @IsOptional()
  @ValidateNested()
  query: Q;

  @IsOptional()
  @ValidateNested()
  sort: S;

  @IsOptional()
  @ValidateNested()
  pagination: P;

  constructor(partials: Partial<FindManyAbstractDto<Q, S, P>>) {
    Object.assign(this, partials);
  }
}
