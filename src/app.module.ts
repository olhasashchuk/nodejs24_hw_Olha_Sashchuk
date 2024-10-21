import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogIpMiddleware } from './logIp/middleware';
import { RequestController } from './request/request.controller';

@Module({
  imports: [],
  controllers: [AppController, RequestController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer
      .apply(LogIpMiddleware)
      .forRoutes('*');
  }
}
