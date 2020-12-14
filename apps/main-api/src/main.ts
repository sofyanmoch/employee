/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

//swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  //swagger
  const options = new DocumentBuilder()
  .setTitle('Employee API')
  .setDescription('Description ')
  .setVersion('1.0')
  .addTag('example')
  .build();
const document = SwaggerModule.createDocument(app, options);
const swagger = 'swagger'
SwaggerModule.setup(swagger, app, document);

// port
  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    console.log('server Listen at http://localhost:' + port + '/' + globalPrefix);
  });

  console.log(`Swagger Running on: ${port}/${swagger} `)
}

bootstrap();
