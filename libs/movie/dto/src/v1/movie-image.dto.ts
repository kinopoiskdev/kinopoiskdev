import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieImageDto {
  @ApiPropertyOptional()
  url: string | null;

  @ApiPropertyOptional()
  previewUrl: string | null;
}
