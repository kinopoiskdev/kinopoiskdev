import { AbstractDocsResponseDto } from '@common/dto';
import { MovieDto } from '../movie.dto';
import { PartialType } from '@nestjs/swagger';

export class MovieDocsResponseDto extends AbstractDocsResponseDto(
  PartialType(MovieDto)
) {
  constructor(partial: Partial<MovieDocsResponseDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
