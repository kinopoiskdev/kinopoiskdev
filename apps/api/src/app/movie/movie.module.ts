import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { loggingMiddleware, PrismaModule } from '@prisma';

@Module({
  imports: [
    PrismaModule.forRoot({
      prismaServiceOptions: {
        explicitConnect: true,
        prismaOptions: {
          log: ['query', 'info', 'warn', 'error'],
        },
        middlewares: [loggingMiddleware()],
      },
    }),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
