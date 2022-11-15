import { MovieTechnology } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieTechnologyDto implements MovieTechnology {
  @ApiPropertyOptional()
  has3D: boolean;

  @ApiPropertyOptional()
  hasImax: boolean;
}
