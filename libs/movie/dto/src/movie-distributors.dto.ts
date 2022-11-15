import { MovieDistributors } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieDistributorsDto implements MovieDistributors {
  @ApiPropertyOptional()
  distributor: string;

  @ApiPropertyOptional()
  distributorRelease: string;
}
