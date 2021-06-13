import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// 모듈에는 컨트롤러와 프로바이더있다.
// 컨트롤러는 기본적으로 url을 가져오고 함수를 실행 ~ 라우터같은 존재

@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
