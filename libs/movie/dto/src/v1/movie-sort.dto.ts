import { MovieType } from '@prisma';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { SortTypeEnum } from '@common/enum';

// Пока тестирую, думаю над тем, чтобы создать генератор из призмы
export class MovieSortDto {
  // Id properties
  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  id: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  kpId: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  externalId: SortTypeEnum;

  // String properties
  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  name: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  names: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  enName: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  alternativeName: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  description: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  ratingMpaa: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  shortDescription: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  slogan: SortTypeEnum;

  //Int properties
  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  year: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  movieLength: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  ageRating: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  top10: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  top250: SortTypeEnum;

  // Enum properties
  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  type: MovieType;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  status: SortTypeEnum;

  // Type properties
  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  rating: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  budget: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  distributors: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  votes: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  fees: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  premiere: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  technology: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  countries: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  genres: SortTypeEnum[];

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  releaseYears: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  watchability: SortTypeEnum;

  // Date properties
  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  createdAt: SortTypeEnum;

  @ApiPropertyOptional({
    enum: SortTypeEnum,
    type: () => SortTypeEnum,
    required: false,
  })
  updatedAt: SortTypeEnum;

  constructor(partial: Partial<MovieSortDto>) {
    Object.assign(this, partial);
  }
}
