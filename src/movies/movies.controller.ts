import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll() {
        return "모든 영화 데이터를 반환할 것."
    }
    @Get("/:id")
    getOne(@Param("id") movieId:string){
        return `특정 영화 데이터를 반환 (id:${movieId})`
    }

    @Post("/:id")
    create(@Param("id") movieId:string){
        return `영화 데이터를 생성 (id:${movieId})`
    }

    @Delete("/:id")
    remove(@Param("id") movieId:string) {
        return `영화 데이터를 삭제 (id:${movieId})`
    }

    @Patch("/:id")
    patch(@Param("id") movieId:string) {
        return `특정 영화 데이터를 패치(업데이트) (id:${movieId})`
    }

}
