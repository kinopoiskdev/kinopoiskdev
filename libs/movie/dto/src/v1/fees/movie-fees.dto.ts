import { MovieFees } from '@prisma';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { MovieFeesItemDto } from './movie-fees-item.dto';

export class MovieFeesDto implements MovieFees {
  @ApiModelPropertyOptional({ type: MovieFeesItemDto })
  usa: MovieFeesItemDto;

  @ApiModelPropertyOptional({ type: MovieFeesItemDto })
  world: MovieFeesItemDto;

  @ApiModelPropertyOptional({ type: MovieFeesItemDto })
  russia: MovieFeesItemDto;
}
