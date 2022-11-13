import { Prisma, PrismaService, ToWhere } from '@prisma';
import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';
import { FindManyMovieDto } from './dto/find-many-movie.dto';
import { MovieDocsResponseDto } from './dto/movie-docs.response.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: FindManyMovieDto): Promise<MovieDocsResponseDto> {
    const { query, pagination } = dto;
    const { page, limit } = pagination;
    const skip = limit * (page - 1);

    const where = ToWhere<MovieDto, Prisma.MovieWhereInput>(query);

    const [movies, count] = await Promise.all([
      this.prisma.movie.findMany({
        where,
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
    return this.prisma.movie.findUnique({
      where: {
        kpId,
      },
      include: {
        sequelsAndPrequels: {
          include: {
            movie: {
              select: {
                kpId: true,
                name: true,
                enName: true,
                rating: true,
                year: true,
              },
            },
          },
        },
        persons: {
          include: {
            person: true,
          },
        },
        similarMovies: {
          include: {
            movie: {
              select: {
                kpId: true,
                name: true,
                enName: true,
                rating: true,
                year: true,
              },
            },
          },
        },
        facts: true,
        images: {
          where: {
            type: {
              in: ['POSTER', 'BACKDROP'],
            },
            isMain: true,
          },
        },
      },
    });
  }
}
