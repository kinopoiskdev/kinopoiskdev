import { Controller, Get, Param, Query } from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import { FindMovieDto } from './dto/find-movie.dto';
import { MovieDto } from './dto/movie.dto';
import { MovieService } from './movie.service';

@ApiTags('Movies')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async finManyByParams(@Query() query: FindMovieDto) {
    return this.movieService.findMany(query);
  }

  @Get(':kpId')
  @ApiResponse({type: MovieDto})
  async findByKpId(@Param('kpId') kpId: number) {
    return this.movieService.findOne(kpId);
  }
}
