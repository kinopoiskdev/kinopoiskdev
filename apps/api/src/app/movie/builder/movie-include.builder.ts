import { ImageType, Prisma } from '@prisma';
import { plainToInstance } from 'class-transformer';
import { Includes, MovieInclude } from './movie-include';

export class MovieIncludeBuilder implements MovieInclude {
  public relatedMovie?: Prisma.MovieArgs;
  public sequelsAndPrequels?: Prisma.SequelsAndPrequelFindManyArgs;
  public similarMovies?: Prisma.SimilarMovieFindManyArgs;
  public persons?: Prisma.MovieOnPersonFindManyArgs;
  public images?: Prisma.ImageFindManyArgs;
  public videos?: Prisma.VideoFindManyArgs | boolean;

  public readonly _relatedMovie: Prisma.MovieArgs = {
    select: {
      kpId: true,
      name: true,
      enName: true,
      rating: true,
      year: true,
      images: this.imagesByTypes(ImageType.POSTER),
    },
  };
  private readonly _sequelsAndPrequels: Prisma.SequelsAndPrequelFindManyArgs = {
    include: { movie: this._relatedMovie },
  };
  private readonly _similarMovies: Prisma.SimilarMovieFindManyArgs = {
    include: { movie: this._relatedMovie },
  };
  private readonly _persons: Prisma.MovieOnPersonFindManyArgs = {
    include: {
      person: {
        include: {
          photos: this.imagesByTypes(ImageType.PHOTO),
        },
      },
    },
  };
  private readonly _images: Prisma.ImageFindManyArgs = this.imagesByTypes(
    ImageType.POSTER,
    ImageType.BACKDROP
  );

  private imagesByTypes(...types: ImageType[]): Prisma.ImageFindManyArgs {
    const where: Prisma.ImageWhereInput = { isMain: true };
    if (types.length > 1) where.type = { in: types };
    else where.type = types[0];
    return { where };
  }

  set(key: Includes) {
    return Object.assign(this, { [key]: this[`_${key}`] || true });
  }

  get toInstance(): MovieInclude {
    return plainToInstance(MovieInclude, this, {
      excludePrefixes: ['_'],
    });
  }

  build() {
    return new MovieInclude(this.toInstance);
  }
}
