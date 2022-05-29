import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger, ValidationPipe} from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('APP');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*'
  });
  await app.listen(5000);
  logger.log(`Docs is exposed at http://localhost:5000/graphql`);
}
bootstrap();
