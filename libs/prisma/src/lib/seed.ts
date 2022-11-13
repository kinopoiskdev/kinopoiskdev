import * as dotenv from 'dotenv';
import { PrismaClient, EntityEnum } from './generated/prisma-client/index';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import { movieFacts, movies, persons, personsFacts } from './mocks/movies.mock';

const prisma = new PrismaClient();

const logger = new Logger('Seed');

async function main() {
  dotenv.config({ path: join(__dirname, '..', '..', '..', '..', '.env') });
  if (process.env.NODE_ENV === 'development') {
    logger.log('Movies run...');
    await prisma.movie.createMany({ data: movies });

    const foundMovie = await prisma.movie.findFirst({ where: { kpId: 666 } });
    const foundRelationMovie = await prisma.movie.findFirst({
      where: { kpId: 435 },
    });

    logger.log('Update movie relations...');
    await prisma.sequelsAndPrequel.create({
      data: {
        relationType: 'AFTER',
        movie: {
          connect: {
            id: foundMovie.id,
          },
        },
        relatedMovie: {
          connect: {
            id: foundRelationMovie.id,
          },
        },
      },
    });
    await prisma.similarMovie.create({
      data: {
        movie: {
          connect: {
            id: foundMovie.id,
          },
        },
        relatedMovie: {
          connect: {
            id: foundRelationMovie.id,
          },
        },
      },
    });
    await prisma.fact.createMany({
      data: movieFacts.map((fact) => ({
        ...fact,
        entityType: EntityEnum.MOVIE,
        movieKpId: foundMovie.kpId,
        movieId: foundMovie.id,
      })),
    });
    logger.log('Movies relations updated');
    logger.log('Movies done');

    logger.log('Persons run...');
    const savedPerson = await prisma.person.create({ data: persons[0] });
    logger.log('Persons done');

    logger.log('PersonsFacts run...');
    await prisma.fact.createMany({
      data: personsFacts.map((f) => ({
        ...f,
        entityType: EntityEnum.PERSON,
        personId: savedPerson.id,
      })),
    });
    logger.log('PersonsFacts done');
    logger.log('Person relations run...');
    const foundPersons = await prisma.person.findMany({ where: {} });

    for (const foundPerson of foundPersons) {
      await prisma.movieOnPerson.create({
        data: {
          kpId: foundPerson.kpId,
          kpMovieId: foundMovie.kpId,
          movie: { connect: { id: foundMovie.id } },
          person: { connect: { id: foundPerson.id } },
          description: 'description',
          profession: ['ACTOR'],
        },
      });
    }
    logger.log('Person relations updated');

    logger.log('Images run...');

    logger.log('Finish');
  }
}

main()
  .catch((e) => logger.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
