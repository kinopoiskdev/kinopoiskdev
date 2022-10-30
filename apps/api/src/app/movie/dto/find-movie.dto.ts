import { PartialType } from '@nestjs/mapped-types';
import { MovieDto } from './movie.dto';

export class FindMovieDto extends PartialType(MovieDto) {}
