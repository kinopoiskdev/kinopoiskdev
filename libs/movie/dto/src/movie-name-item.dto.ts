import { ApiPropertyOptional } from '@nestjs/swagger';
import { MovieNameItem } from '@prisma';

export class MovieNameItemDto implements MovieNameItem {
  @ApiPropertyOptional()
  name: string;
}
