import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // 기본 주소
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {

    }

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll()
    }

    // @Get("search")
    // search(@Query("year") searchByYear:string){
    //     return `영화 데이터 검색 (year:${searchByYear})`
    // }

    @Get("/:id")
    getOne(@Param("id") movieId:number): Movie{
        console.log(typeof movieId)
        return this.moviesService.getOne(movieId)
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
       return this.moviesService.create(movieData)
    }

    @Delete("/:id")
    remove(@Param("id") movieId:number) {
        return this.moviesService.deleteOne(movieId)
    }

    @Patch("/:id")
    patch(@Param("id") movieId:number, @Body() updateData) {
        return this.moviesService.update(movieId, updateData)
    }

}
