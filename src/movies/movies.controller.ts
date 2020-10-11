import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "모든 영화 데이터를 반환할 것."
    }

    @Get("search")
    search(@Query("year") searchByYear:string){
        return `영화 데이터 검색 (year:${searchByYear})`
    }

    @Get("/:id")
    getOne(@Param("id") movieId:string){
        return `특정 영화 데이터를 반환 (id:${movieId})`
    }

    @Post()
    create(@Body() movieData){
        console.log(movieData)
        return movieData
    }

    @Delete("/:id")
    remove(@Param("id") movieId:string) {
        return `영화 데이터를 삭제 (id:${movieId})`
    }

    @Patch("/:id")
    patch(@Param("id") movieId:string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        }
    }

}
