import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'styles'));
  app.useStaticAssets(join(__dirname, '..', 'my-prisma-project','node_modules')); 
  app.useStaticAssets(join(__dirname, '..', 'scripts'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useStaticAssets(join(__dirname, '..', 'res'));
  app.setViewEngine('pug');
  await app.listen(3000);
}
bootstrap();
