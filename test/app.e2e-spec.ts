import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({ // pipe: express의 미들웨어같은 것
        whitelist: true, // 오브젝트에 지정되지 않은 프로퍼타는 보내지지 않음
        forbidNonWhitelisted: true, //위와 같은 상황에 에러 출력, 리퀘스트 중지
        transform: true // 요청 시 자동으로 올바른 타입으로 변환 ex) "1" => 1
      })
    )
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe("/movies", () => {
    it("GET", () => {
      return request(app.getHttpServer())
      .get("/movies")
      .expect(200)
      .expect([])
       
    })
  })
 
  it("POST", () => {
    return request(app.getHttpServer()).post("/movies").send({
      title:"Test",
      year:2000,
      genres: ['test']
    }).expect(201)
  })

  it("POST 400", () => {
    return request(app.getHttpServer()).post("/movies").send({
      title:"Test",
      year:2000,
      genres: ['test'],
      other: "thing"
    }).expect(400)
  })


  it("DELETE", () => {
    return request(app.getHttpServer()).delete("/movies").expect(404)
  })

  describe("/movies/:id", () => {
    it("GET 200", () => {
      return request(app.getHttpServer()).get("/movies/1").expect(200)
    })
    it("GET 404", () => {
      return request(app.getHttpServer()).get("/movies/999").expect(404)
    })
    it("PATCH 200", () => {
      return request(app.getHttpServer()).patch("/movies/1").send({title: "Updated Test"}).expect(200)
    })
    it("DELETE 200", () => {
      return request(app.getHttpServer()).delete("/movies/1").expect(200)
    })

  })
}); 
