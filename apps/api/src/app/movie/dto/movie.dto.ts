import {
  MovieBudget,
  MovieDistributors,
  MovieExternalId,
  MovieFees,
  MovieFeesItem,
  MovieLogo,
  MovieNameItem,
  MoviePremiere,
  MovieRating,
  MovieReleaseYears,
  MovieStatus,
  MovieTechnology,
  MovieType,
  MovieVotes,
  MovieWatchability,
  MovieWatchabilityItems,
} from '@prisma';
import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiModelPropertyOptional } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class MovieBudgetDto implements MovieBudget {
  @ApiPropertyOptional()
  currency: string;

  @ApiPropertyOptional()
  value: string;
}

export class MovieDistributorsDto implements MovieDistributors {
  @ApiPropertyOptional()
  distributor: string;

  @ApiPropertyOptional()
  distributorRelease: string;
}

export class MovieExternalIdDto implements MovieExternalId {
  @ApiPropertyOptional()
  imdb: string;

  @ApiPropertyOptional()
  tmdb: number;

  @ApiPropertyOptional()
  kpHD: string;

  constructor(partial: Partial<MovieExternalIdDto>) {
    Object.assign(this, partial);
  }
}

export class MovieFeesItemDto implements MovieFeesItem {
  @ApiPropertyOptional()
  currency: string;

  @ApiPropertyOptional()
  value: number;
}

export class MovieNameItemDto implements MovieNameItem {
  @ApiPropertyOptional()
  name: string;
}

export class MovieReleaseYearsDto implements MovieReleaseYears {
  @ApiModelPropertyOptional({})
  start: number;
  @ApiPropertyOptional()
  end: number | null;
}

export class MovieLogoDto implements MovieLogo {
  @ApiPropertyOptional()
  url: string | null;
}

export class MovieWatchabilityItemsDto implements MovieWatchabilityItems {
  @ApiModelPropertyOptional({ type: MovieLogoDto })
  logo: MovieLogoDto;

  @ApiModelPropertyOptional()
  name: string;

  @ApiModelPropertyOptional()
  url: string;
}

export class MovieWatchabilityDto implements MovieWatchability {
  @ApiModelPropertyOptional({ type: MovieWatchabilityItemsDto })
  items: MovieWatchabilityItems[];
}

export class MovieFeesDto implements MovieFees {
  @ApiModelPropertyOptional({ type: MovieFeesItemDto })
  usa: MovieFeesItemDto;

  @ApiModelPropertyOptional({ type: MovieFeesItemDto })
  world: MovieFeesItemDto;

  @ApiModelPropertyOptional({ type: MovieFeesItemDto })
  russia: MovieFeesItemDto;
}

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

export class MovieRatingDto implements MovieRating {
  @ApiPropertyOptional()
  kp: number;

  @ApiPropertyOptional()
  imdb: number;

  @ApiPropertyOptional()
  await: number;

  @ApiPropertyOptional()
  filmCritics: number;

  @ApiPropertyOptional()
  russianFilmCritics: number;

  @ApiPropertyOptional()
  tmdb: number;
}

export class MovieTechnologyDto implements MovieTechnology {
  @ApiPropertyOptional()
  has3D: boolean;

  @ApiPropertyOptional()
  hasImax: boolean;
}

export class MovieVotesDto implements MovieVotes {
  @ApiPropertyOptional()
  await: number;

  @ApiPropertyOptional()
  filmCritics: number;

  @ApiPropertyOptional()
  imdb: number;

  @ApiPropertyOptional()
  kp: number;

  @ApiPropertyOptional()
  russianFilmCritics: number;

  @ApiPropertyOptional()
  tmdb: number;
}

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
