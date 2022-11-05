import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovieDto } from './dto/movie.dto';
import { MovieService } from './movie.service';
import { FindManyMovieDto } from './dto/find-many-movie.dto';
import { ParseDotNotationQuery } from '@common/pipes';

@ApiTags('Movies')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({ summary: 'Поиск фильмов' })
  @ApiResponse({ type: MovieDto, isArray: true })
  async finManyByQuery(
    @Query(ParseDotNotationQuery) query: FindManyMovieDto
  ): Promise<MovieDto[]> {
    return this.movieService.findMany(query);
  }

  @Get(':kpId')
  @ApiResponse({ type: MovieDto })
  async findByKpId(@Param('kpId') kpId: number) {
    return this.movieService.findOne(kpId);
  }
}
