import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
//import * as morgan from 'morgan';

async function bootstrap() {
  dotenv.config(); // load environment variables from .env file
  const app = await NestFactory.create(AppModule);
  app.use(cors({origin:'*'}));
  // app.use(morgan('dev'));
  await app.listen(8080);
}
bootstrap();
