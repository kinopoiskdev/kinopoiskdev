import * as dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma-client/index';
import { Logger } from '@nestjs/common';
import { movies, persons, personsFacts } from './mocks/movies.mock';
import { join } from 'path';

const prisma = new PrismaClient();

const logger = new Logger('Seed');

async function main() {
  dotenv.config({ path: join(__dirname, '..', '..', '..', '..', '.env') });
  logger.log('Movies run...');
  await prisma.movie.createMany({ data: movies });
  logger.log('Movies done');
  logger.log('Persons run...');
  const savedPerson = await prisma.person.create({ data: persons[0] });
  logger.log('Persons done');
  logger.log('PersonsFacts run...');
  await prisma.personFact.createMany({
    data: personsFacts.map((f) => ({ ...f, personId: savedPerson.id })),
  });
  logger.log('PersonsFacts done');
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
