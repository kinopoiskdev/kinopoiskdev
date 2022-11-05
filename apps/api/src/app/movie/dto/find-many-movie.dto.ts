import { AbstractFindManyDto, PaginatedQueryDto } from '@common/dto';
import { MovieDto } from './movie.dto';

export class FindManyMovieDto extends AbstractFindManyDto(
  MovieDto,
  MovieDto,
  PaginatedQueryDto
) {}
