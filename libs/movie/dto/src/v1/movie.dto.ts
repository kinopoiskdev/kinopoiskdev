import { MovieStatus, MovieType } from '@prisma';
import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
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

export class MovieDto {
  // Id properties
  @ApiModelPropertyOptional()
  id: string;

  @ApiModelPropertyOptional({ description: 'Id фильма с кинопоиска' })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  kpId: number;

  @ApiModelPropertyOptional({
    type: () => MovieExternalIdDto,
    description: 'Остальные известные id фильма',
  })
  externalId: MovieExternalIdDto;

  // String properties
  @ApiPropertyOptional()
  name: string;

  @ApiModelPropertyOptional({ isArray: true })
  names: string[];

  @ApiPropertyOptional()
  enName: string;

  @ApiPropertyOptional()
  alternativeName: string;

  @ApiPropertyOptional()
  description: string;

  @ApiPropertyOptional()
  ratingMpaa: string;

  @ApiPropertyOptional()
  shortDescription: string;

  @ApiPropertyOptional()
  slogan: string;

  //Int properties
  @ApiPropertyOptional()
  year: number;

  @ApiPropertyOptional()
  movieLength: number;

  @ApiPropertyOptional()
  ageRating: number;

  @ApiModelPropertyOptional()
  top10: number | null;

  @ApiModelPropertyOptional()
  top250: number | null;

  // Enum properties
  @ApiPropertyOptional({
    enum: MovieType,
    type: () => MovieType,
    required: false,
  })
  type: MovieType;

  @ApiPropertyOptional({
    enum: MovieStatus,
    type: () => MovieStatus,
    required: false,
  })
  status: MovieStatus;

  // Type properties
  @ApiModelPropertyOptional({ type: () => MovieRatingDto })
  rating: MovieRatingDto;

  @ApiModelPropertyOptional({ type: () => MovieBudgetDto })
  budget: MovieBudgetDto;

  @ApiModelPropertyOptional({ type: () => MovieDistributorsDto })
  distributors: MovieDistributorsDto;

  @ApiModelPropertyOptional({ type: () => MovieVotesDto })
  votes: MovieVotesDto;

  @ApiModelPropertyOptional({ type: () => MovieFeesDto })
  fees: MovieFeesDto;

  @ApiModelPropertyOptional({ type: () => MoviePremiereDto })
  premiere: MoviePremiereDto;

  @ApiModelPropertyOptional({ type: () => MovieTechnologyDto })
  technology: MovieTechnologyDto;

  @ApiModelPropertyOptional({ type: () => MovieNameItemDto })
  countries: MovieNameItemDto[];

  @ApiModelPropertyOptional({ type: () => MovieNameItemDto })
  genres: MovieNameItemDto[];

  @ApiModelPropertyOptional({ type: () => MovieReleaseYearsDto })
  releaseYears: MovieReleaseYearsDto[];

  @ApiModelPropertyOptional({ type: () => MovieWatchabilityDto })
  watchability: MovieWatchabilityDto | null;

  // Date properties
  @ApiPropertyOptional({ type: Date })
  createdAt: Date;

  @ApiPropertyOptional({ type: Date })
  updatedAt: Date;

  constructor(partial: Partial<MovieDto>) {
    Object.assign(this, partial);
  }
}
