import { Prisma } from '@prisma';

type ValueOf<T> = keyof T;
export type MovieIncludes = Omit<Prisma.MovieInclude, '_count'>;
export type Includes = ValueOf<Omit<Prisma.MovieInclude, '_count'>>;

export class MovieInclude implements MovieIncludes {
  constructor(partial: MovieInclude) {
    Object.assign(this, partial);
  }
}
