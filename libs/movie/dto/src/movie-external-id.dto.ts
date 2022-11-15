import { MovieExternalId } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieExternalIdDto implements MovieExternalId {
  @ApiPropertyOptional()
  imdb: string;

  @ApiPropertyOptional()
  tmdb: number;

  @ApiPropertyOptional()
  kpHD: string;

  constructor(partial: Partial<MovieExternalIdDto>) {
    Object.assign(this, partial);
  }
}
