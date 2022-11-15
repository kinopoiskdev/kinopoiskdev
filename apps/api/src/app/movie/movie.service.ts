import { Prisma, PrismaService, ToWhere } from '@prisma';
import { Injectable } from '@nestjs/common';

import { FindManyMovieDto, MovieDocsResponseDto, MovieDto } from '@movie/dto';
import { MovieIncludeBuilder } from './builder/movie-include.builder';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: FindManyMovieDto): Promise<MovieDocsResponseDto> {
    const { query, pagination } = dto;
    const { page, limit } = pagination;
    const skip = limit * (page - 1);

    const include = new MovieIncludeBuilder()
      .set('sequelsAndPrequels')
      .set('similarMovies')
      .set('persons')
      .set('images')
      .set('videos')
      .set('seasons')
      .build();

    const where = ToWhere<MovieDto, Prisma.MovieWhereInput>(query);

    const [movies, count] = await Promise.all([
      this.prisma.movie.findMany({
        where,
        include,
        skip: skip,
        take: limit,
      }),
      this.prisma.movie.count({
        where,
      }),
    ]);

    return {
      docs: movies,
      total: count,
      limit,
      page,
      pages: 1,
    };
  }

  async findOne(kpId: number): Promise<MovieDto> {
    const include = new MovieIncludeBuilder()
      .set('sequelsAndPrequels')
      .set('similarMovies')
      .set('persons')
      .set('images')
      .set('videos')
      .set('seasons')
      .build();

    return this.prisma.movie.findUnique({
      where: { kpId },
      include,
    });
  }
}
