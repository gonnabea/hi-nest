import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ // pipe: express의 미들웨어같은 것
      whitelist: true, // 오브젝트에 지정되지 않은 프로퍼타는 보내지지 않음
      forbidNonWhitelisted: true, //위와 같은 상황에 에러 출력, 리퀘스트 중지
      transform: true // 요청 시 자동으로 올바른 타입으로 변환 ex) "1" => 1
    })
  )
  await app.listen(3000);
}
bootstrap();
