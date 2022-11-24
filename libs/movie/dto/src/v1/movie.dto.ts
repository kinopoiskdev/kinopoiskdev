import { ImageType, MovieStatus, MovieType } from '@prisma';
import { IsNumber, IsOptional } from 'class-validator';
import { Expose, Type } from 'class-transformer';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { MovieWatchabilityDto } from './watchability';
import { MovieExternalIdDto } from './movie-external-id.dto';
import { MovieTechnologyDto } from './movie-technology.dto';
import { MovieDistributorsDto } from './movie-distributors.dto';
import { MovieNameItemDto } from './movie-name-item.dto';
import { MovieRatingDto } from './movie-rating.dto';
import { MoviePremiereDto } from './movie-premiere.dto';
import { MovieBudgetDto } from './movie-budget.dto';
import { MovieVotesDto } from './movie-votes.dto';
import { MovieFeesDto } from './fees';
import { MovieReleaseYearsDto } from './movie-release-years.dto';
import {
  ParseImageByType,
  ParseNumber,
  ValuesToObjects,
} from '@common/decorators';
import { MovieImageDto } from './movie-image.dto';

export class MovieDto {
  // Id properties

  @Expose({ name: 'id' })
  @ApiModelPropertyOptional({ description: 'Id фильма с кинопоиска' })
  @IsOptional()
  @IsNumber()
  @ParseNumber()
  kpId: number;

  @Expose()
  @ApiModelPropertyOptional({
    type: () => MovieExternalIdDto,
    description: 'Остальные известные id фильма',
  })
  externalId: MovieExternalIdDto;

  // String properties
  @Expose()
  @ApiPropertyOptional()
  name: string;

  @Expose()
  @ApiModelPropertyOptional({ isArray: true })
  @ValuesToObjects('name')
  names: string[];

  @Expose()
  @ApiPropertyOptional()
  enName: string;

  @Expose()
  @ApiPropertyOptional()
  alternativeName: string;

  @Expose()
  @ApiPropertyOptional()
  description: string;

  @Expose()
  @ApiPropertyOptional()
  ratingMpaa: string;

  @Expose()
  @ApiPropertyOptional()
  shortDescription: string;

  @Expose()
  @ApiPropertyOptional()
  slogan: string;

  //Int properties
  @Expose()
  @ApiPropertyOptional()
  year: number;

  @Expose()
  @ApiPropertyOptional()
  movieLength: number;

  @Expose()
  @ApiPropertyOptional()
  ageRating: number;

  @Expose()
  @ApiModelPropertyOptional()
  top10: number | null;

  @Expose()
  @ApiModelPropertyOptional()
  top250: number | null;

  // Enum properties
  @Expose()
  @ApiPropertyOptional({
    enum: MovieType,
    type: () => MovieType,
    required: false,
  })
  type: MovieType;

  @Expose()
  @ApiPropertyOptional({
    enum: MovieStatus,
    type: () => MovieStatus,
    required: false,
  })
  status: MovieStatus;

  // Type properties
  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieImageDto })
  @ParseImageByType(ImageType.POSTER)
  @Type(() => MovieImageDto)
  poster: MovieImageDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieImageDto })
  @ParseImageByType(ImageType.BACKDROP)
  @Type(() => MovieImageDto)
  backdrop: MovieImageDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieRatingDto })
  rating: MovieRatingDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieBudgetDto })
  budget: MovieBudgetDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieDistributorsDto })
  distributors: MovieDistributorsDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieVotesDto })
  votes: MovieVotesDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieFeesDto })
  fees: MovieFeesDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MoviePremiereDto })
  premiere: MoviePremiereDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieTechnologyDto })
  technology: MovieTechnologyDto;

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieNameItemDto })
  countries: MovieNameItemDto[];

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieNameItemDto })
  genres: MovieNameItemDto[];

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieReleaseYearsDto })
  releaseYears: MovieReleaseYearsDto[];

  @Expose()
  @ApiModelPropertyOptional({ type: () => MovieWatchabilityDto })
  watchability: MovieWatchabilityDto | null;

  // Date properties
  @Expose()
  @ApiPropertyOptional({ type: Date })
  createdAt: Date;

  @Expose()
  @ApiPropertyOptional({ type: Date })
  updatedAt: Date;

  constructor(partial: Partial<MovieDto>) {
    Object.assign(this, partial);
  }
}
