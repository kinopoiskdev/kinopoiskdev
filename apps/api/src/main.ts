import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpAdapterHost, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastifyHelmet from '@fastify/helmet';
import compression from '@fastify/compress';
import { PrismaClientExceptionFilter, PrismaService } from '@prisma';

async function bootstrap() {
  const docGlobalPrefix = 'documentation';

  // Init logger
  const logger = new Logger('Main');
  // Init fastify adapter
  const adapter = new FastifyAdapter({
    trustProxy: true,
  });

  // Set global helmet
  adapter.register(fastifyHelmet, { global: true });
  // Set global gzip compression
  adapter.register(compression, {
    global: true,
    encodings: ['gzip', 'deflate'],
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
    { bufferLogs: true }
  );

  // Set global version
  app.enableVersioning({ defaultVersion: '1', type: VersioningType.URI });
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  // enable shutdown hook
  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // prisma exception filter
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  const config = new DocumentBuilder()
    .setTitle('API documentation')
    .setDescription(
      'Документация для API kinopoisk.dev. API позволяет получать максимум информации с кинопоиска о фильмах, сериалах и персонах и т.д.'
    )
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(docGlobalPrefix, app, document);

  const port = process.env.PORT || 3333;
  const appEnv = process.env.APP_ENV;
  await app.listen(port);
  logger.log(`🚀 API app is running on: http://localhost:${port}/`);
  logger.log(`🌚 ENV: ${appEnv}`);
  logger.log(
    `📑 API Documentation is running on: http://localhost:${port}/${docGlobalPrefix}`
  );
}

bootstrap();
