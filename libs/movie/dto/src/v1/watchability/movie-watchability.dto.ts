import { MovieWatchability, MovieWatchabilityItems } from '@prisma';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { MovieWatchabilityItemsDto } from './movie-watchability-items.dto';

export class MovieWatchabilityDto implements MovieWatchability {
  @ApiModelPropertyOptional({ type: MovieWatchabilityItemsDto })
  items: MovieWatchabilityItems[];
}
