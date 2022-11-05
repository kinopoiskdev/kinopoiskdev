import {
  Movie,
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
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';

export class MovieBudgetDto implements MovieBudget {
  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: false })
  value: string;
}

export class MovieDistributorsDto implements MovieDistributors {
  @ApiProperty({ required: false })
  distributor: string;

  @ApiProperty({ required: false })
  distributorRelease: string;
}

export class MovieExternalIdDto implements MovieExternalId {
  @ApiProperty({ required: false })
  imdb: string;

  @ApiProperty({ required: false })
  tmdb: number;

  @ApiProperty({ required: false })
  kpHD: string;
}

export class MovieFeesItemDto implements MovieFeesItem {
  @ApiProperty({ required: false })
  currency: string;

  @ApiProperty({ required: false })
  value: number;
}

export class MovieNameItemDto implements MovieNameItem {
  @ApiProperty({ required: false })
  name: string;
}

export class MovieReleaseYearsDto implements MovieReleaseYears {
  @ApiProperty({})
  start: number;
  @ApiProperty({ required: false })
  end: number | null;
}

export class MovieLogoDto implements MovieLogo {
  @ApiProperty({ required: false })
  url: string | null;
}

export class MovieWatchabilityItemsDto implements MovieWatchabilityItems {
  @ApiProperty({ type: MovieLogoDto })
  logo: MovieLogoDto;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string;
}

export class MovieWatchabilityDto implements MovieWatchability {
  @ApiProperty({ type: MovieWatchabilityItemsDto })
  items: MovieWatchabilityItems[];
}

export class MovieFeesDto implements MovieFees {
  @ApiProperty({ required: false, type: MovieFeesItemDto })
  usa: MovieFeesItemDto;

  @ApiProperty({ required: false, type: MovieFeesItemDto })
  world: MovieFeesItemDto;

  @ApiProperty({ required: false, type: MovieFeesItemDto })
  russia: MovieFeesItemDto;
}

export class MoviePremiereDto implements MoviePremiere {
  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false, type: Date })
  bluray: Date;

  @ApiProperty({ required: false, type: Date })
  cinema: Date;

  @ApiProperty({ required: false, type: Date })
  digital: Date;

  @ApiProperty({ required: false, type: Date })
  dvd: Date;

  @ApiProperty({ required: false, type: Date })
  russia: Date;

  @ApiProperty({ required: false, type: Date })
  world: Date;
}

export class MovieRatingDto implements MovieRating {
  @ApiProperty({ required: false })
  kp: number;

  @ApiProperty({ required: false })
  imdb: number;

  @ApiProperty({ required: false })
  await: number;

  @ApiProperty({ required: false })
  filmCritics: number;

  @ApiProperty({ required: false })
  russianFilmCritics: number;

  @ApiProperty({ required: false })
  tmdb: number;
}

export class MovieTechnologyDto implements MovieTechnology {
  @ApiProperty({ required: false })
  has3D: boolean;

  @ApiProperty({ required: false })
  hasImax: boolean;
}

export class MovieVotesDto implements MovieVotes {
  @ApiProperty({ required: false })
  await: number;

  @ApiProperty({ required: false })
  filmCritics: number;

  @ApiProperty({ required: false })
  imdb: number;

  @ApiProperty({ required: false })
  kp: number;

  @ApiProperty({ required: false })
  russianFilmCritics: number;

  @ApiProperty({ required: false })
  tmdb: number;
}

export class MovieDto implements Movie {
  // Id properties
  @ApiProperty()
  id: string;

  @ApiProperty({ description: 'Id фильма с кинопоиска' })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value))
  kpId: number;

  @ApiProperty({
    description: 'Остальные известные id фильма',
  })
  externalId: MovieExternalIdDto;

  // String properties
  @ApiProperty({ required: false })
  name: string;

  @ApiProperty({ required: false, isArray: true })
  names: string[];

  @ApiProperty({ required: false })
  enName: string;

  @ApiProperty({ required: false })
  alternativeName: string;

  @ApiProperty({ required: false })
  description: string;

  @ApiProperty({ required: false })
  ratingMpaa: string;

  @ApiProperty({ required: false })
  shortDescription: string;

  @ApiProperty({ required: false })
  slogan: string;

  //Int properties
  @ApiProperty({ required: false })
  year: number;

  @ApiProperty({ required: false })
  movieLength: number;

  @ApiProperty({ required: false })
  ageRating: number;

  @ApiProperty()
  top10: number | null;

  @ApiProperty()
  top250: number | null;

  // Enum properties
  @ApiProperty({ required: false })
  type: MovieType;

  @ApiProperty({ required: false })
  status: MovieStatus;

  // Type properties
  @ApiProperty({ type: MovieRatingDto })
  rating: MovieRatingDto;

  @ApiProperty({ type: MovieBudgetDto })
  budget: MovieBudgetDto;

  @ApiProperty({ type: MovieDistributorsDto })
  distributors: MovieDistributorsDto;

  @ApiProperty({ type: MovieVotesDto })
  votes: MovieVotesDto;

  @ApiProperty({ type: MovieFeesDto })
  fees: MovieFeesDto;

  @ApiProperty({ type: MoviePremiereDto })
  premiere: MoviePremiereDto;

  @ApiProperty({ type: MovieTechnologyDto })
  technology: MovieTechnologyDto;

  @ApiProperty({ type: MovieNameItemDto })
  countries: MovieNameItemDto[];

  @ApiProperty({ type: MovieNameItemDto })
  genres: MovieNameItemDto[];

  @ApiProperty({ type: MovieReleaseYearsDto })
  releaseYears: MovieReleaseYearsDto[];

  @ApiProperty({ type: MovieWatchabilityDto })
  watchability: MovieWatchabilityDto | null;

  // Date properties
  @ApiProperty({ required: false, type: Date })
  createdAt: Date;

  @ApiProperty({ required: false, type: Date })
  updatedAt: Date;
}
