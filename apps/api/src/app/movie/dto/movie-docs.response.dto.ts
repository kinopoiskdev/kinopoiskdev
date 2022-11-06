import { AbstractDocsResponseDto } from '@common/dto';
import { MovieDto } from './movie.dto';

export class MovieDocsResponseDto extends AbstractDocsResponseDto(MovieDto) {
  constructor(partial: Partial<MovieDocsResponseDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
