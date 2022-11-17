import { MovieReleaseYears } from '@prisma';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieReleaseYearsDto implements MovieReleaseYears {
  @ApiModelPropertyOptional({})
  start: number;
  @ApiPropertyOptional()
  end: number | null;
}
