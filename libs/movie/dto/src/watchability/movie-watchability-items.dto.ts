import { MovieWatchabilityItems } from '@prisma';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { MovieLogoDto } from '../movie-logo.dto';

export class MovieWatchabilityItemsDto implements MovieWatchabilityItems {
  @ApiModelPropertyOptional({ type: MovieLogoDto })
  logo: MovieLogoDto;

  @ApiModelPropertyOptional()
  name: string;

  @ApiModelPropertyOptional()
  url: string;
}
