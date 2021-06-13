import { Query } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

//2.1
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear) {
    return `we are searching ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this will return one movie : id:${movieId}`;
  }

  @Post()
  create(@Body() moviedata) {
    // console.log(moviedata);
    return moviedata;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete a movie ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}
