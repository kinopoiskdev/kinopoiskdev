import { MovieRating } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieRatingDto implements MovieRating {
  @ApiPropertyOptional()
  kp: number;

  @ApiPropertyOptional()
  imdb: number;

  @ApiPropertyOptional()
  await: number;

  @ApiPropertyOptional()
  filmCritics: number;

  @ApiPropertyOptional()
  russianFilmCritics: number;

  @ApiPropertyOptional()
  tmdb: number;
}
