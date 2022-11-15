import { MovieVotes } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieVotesDto implements MovieVotes {
  @ApiPropertyOptional()
  await: number;

  @ApiPropertyOptional()
  filmCritics: number;

  @ApiPropertyOptional()
  imdb: number;

  @ApiPropertyOptional()
  kp: number;

  @ApiPropertyOptional()
  russianFilmCritics: number;

  @ApiPropertyOptional()
  tmdb: number;
}
