import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');

  app.enableCors();

  await app.listen(3000).then(() => {
    logger.log('Server is running on port 3000');
  });
}
bootstrap();
