import * as dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma-client/index';
import { Logger } from '@nestjs/common';
import { movies } from './mocks/movies.mock';
import { join } from 'path';

const prisma = new PrismaClient();

const logger = new Logger('Seed');

async function main() {
  dotenv.config({ path: join(__dirname, '..', '..', '..', '..', '.env') });
  logger.log('Movies run...');
  await prisma.movie.createMany({ data: movies });
  logger.log('Finish');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch((e) => logger.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
