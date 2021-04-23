import { NestApplicationOptions } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

const appOptions: NestApplicationOptions = {
  cors: false,
  bodyParser: true,
};

const config = new DocumentBuilder()
  .setTitle('Cats example')
  .setDescription('The cats API description')
  .setBasePath('docs')
  .setVersion('1.0')
  .addTag('cats')
  .build();

(async () => {
  const app = await NestFactory.create(AppModule, appOptions);

  //Middlewares
  app.use(helmet());

  //Swagger
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
})();
