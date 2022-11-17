import { AbstractFindManyDto, PaginatedQueryDto } from '@common/dto';
import { MovieDto } from './movie.dto';
import { MovieSortDto } from './movie-sort.dto';

export class FindManyMovieDto extends AbstractFindManyDto(
  MovieDto,
  MovieSortDto,
  PaginatedQueryDto
) {
  constructor(partial: Partial<FindManyMovieDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
