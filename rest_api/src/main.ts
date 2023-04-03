import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // load environment variables from .env file
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();