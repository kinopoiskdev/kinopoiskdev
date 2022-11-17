import { MoviePremiere } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class MoviePremiereDto implements MoviePremiere {
  @ApiPropertyOptional()
  country: string;

  @ApiModelPropertyOptional({ type: Date })
  bluray: Date;

  @ApiModelPropertyOptional({ type: Date })
  cinema: Date;

  @ApiModelPropertyOptional({ type: Date })
  digital: Date;

  @ApiModelPropertyOptional({ type: Date })
  dvd: Date;

  @ApiModelPropertyOptional({ type: Date })
  russia: Date;

  @ApiModelPropertyOptional({ type: Date })
  world: Date;
}
