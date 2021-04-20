import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const appOptions: NestApplicationOptions = {
  cors: false,
  bodyParser: true,
};

(async () => {
  const app = await NestFactory.create(AppModule, appOptions);
  await app.listen(3000);
})();
