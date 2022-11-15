import { MovieLogo } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieLogoDto implements MovieLogo {
  @ApiPropertyOptional()
  url: string | null;
}
