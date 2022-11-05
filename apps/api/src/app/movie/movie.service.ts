import { Prisma, PrismaService, ToWhere } from '@prisma';
import { Injectable } from '@nestjs/common';
import { MovieDto } from './dto/movie.dto';
import { FindManyMovieDto } from './dto/find-many-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(dto: FindManyMovieDto): Promise<MovieDto[]> {
    const where = ToWhere<MovieDto, Prisma.MovieWhereInput>(dto.query);
    return this.prisma.movie.findMany({
      where,
    });
  }

  async findOne(kpId: number): Promise<MovieDto> {
    return this.prisma.movie.findUnique({
      where: {
        kpId,
      },
    });
  }
}
