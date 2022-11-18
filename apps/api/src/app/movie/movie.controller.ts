import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Query,
  SerializeOptions,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovieService } from './movie.service';
import { ParseDotNotationQuery } from '@common/pipes';
import { PaginatedQueryDto } from '@common/dto';
import { ApiDotNotationQuery } from '@common/decorators';
import {
  FindManyMovieDto,
  MovieDocsResponseDto,
  MovieDto,
  MovieSortDto,
} from '@movie/dto';

@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ excludeExtraneousValues: true })
@ApiTags('Movies')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  @ApiOperation({ summary: 'Поиск фильмов' })
  @ApiDotNotationQuery(MovieDto, MovieSortDto, PaginatedQueryDto)
  @ApiResponse({ type: MovieDocsResponseDto, isArray: true })
  async finManyByQuery(
    @Query(ParseDotNotationQuery, ValidationPipe) dto: FindManyMovieDto
  ): Promise<MovieDocsResponseDto> {
    return this.movieService.findMany(dto);
  }

  @Get(':kpId')
  @ApiResponse({ type: MovieDto })
  async findByKpId(@Param('kpId') kpId: number): Promise<MovieDto> {
    return this.movieService.findOne(kpId);
  }
}
