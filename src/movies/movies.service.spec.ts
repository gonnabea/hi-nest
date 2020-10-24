import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it("test: 1+3 = 4", () => {
    expect(1+3).toEqual(4)
  })

  describe("getAll", () => {
    it("배열 반환", () => {
      
      const result = service.getAll()
      expect(result).toBeInstanceOf(Array)
    })
  })

  describe("getOne", () => {
    
    it("should return a movie", () => {
      service.create({
        title: "테스트 영화",
        genres: ['test'],
        year: 2000
      })
      
      const movie = service.getOne(1)
      expect(movie).toBeDefined()
      expect(movie.id).toEqual(1)
    })

    it("404 에러 던지기", () => {
      try{
        service.getOne(999)
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException)
        expect(e.message).toEqual('Movie with ID: 999 not found')
      }
    })
  })
});
