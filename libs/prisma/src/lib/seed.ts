import * as dotenv from 'dotenv';
import { EntityEnum, PrismaClient } from './generated/prisma-client/index';
import { Logger } from '@nestjs/common';
import { join } from 'path';
import {
  images,
  movieFacts,
  movies,
  persons,
  personsFacts,
  seasons,
  videos,
} from './mocks/movies.mock';

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
    const foundSeries = await prisma.movie.findFirst({
      where: { kpId: 464963 },
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
    await prisma.season.createMany({
      data: seasons.map((season) => ({
        ...season,
        movieId: foundSeries.id,
        movieKpId: foundSeries.kpId,
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
          movieKpId: foundMovie.kpId,
          movie: { connect: { id: foundMovie.id } },
          person: { connect: { id: foundPerson.id } },
          description: 'description',
          profession: ['ACTOR'],
        },
      });
    }
    logger.log('Person relations updated');

    logger.log('Images run...');
    await prisma.image.createMany({
      data: images
        .filter((image) => image.entityType === EntityEnum.MOVIE)
        .map((image) => ({
          ...image,
          movieKpId: foundMovie.kpId,
          movieId: foundMovie.id,
        })),
    });
    await prisma.image.createMany({
      data: images
        .filter((image) => image.entityType === EntityEnum.PERSON)
        .map((image) => ({
          ...image,
          personKpId: savedPerson.kpId,
          personId: savedPerson.id,
        })),
    });

    logger.log('Images done');

    logger.log('Videos run...');
    await prisma.video.createMany({
      data: videos.map((video) => ({
        ...video,
        movieKpId: foundMovie.kpId,
        movieId: foundMovie.id,
      })),
    });
    logger.log('Videos done');

    logger.log('Finish');
  }
}

main()
  .catch((e) => logger.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
