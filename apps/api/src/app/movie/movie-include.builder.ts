import { ImageType, Prisma } from '@prisma';

type ValueOf<T> = keyof T;
type MovieInclude = ValueOf<Omit<Prisma.MovieInclude, '_count'>>;

export class MovieIncludeBuilder implements Prisma.MovieInclude {
  private readonly include: Prisma.MovieInclude = {};

  private imagesByTypes(...types: ImageType[]): Prisma.ImageFindManyArgs {
    const where: Prisma.ImageWhereInput = { isMain: true };
    if (types.length > 1) where.type = { in: types };
    else where.type = types[0];
    return { where };
  }

  public get relatedMovie(): Prisma.MovieArgs {
    return {
      select: {
        kpId: true,
        name: true,
        enName: true,
        rating: true,
        year: true,
        images: this.imagesByTypes(ImageType.POSTER),
      },
    };
  }

  public get sequelsAndPrequels(): Prisma.SequelsAndPrequelFindManyArgs {
    return { include: { movie: this.relatedMovie } };
  }

  public get similarMovies() {
    return { include: { movie: this.relatedMovie } };
  }

  public get persons() {
    return {
      include: {
        person: {
          include: {
            photos: this.imagesByTypes(ImageType.PHOTO),
          },
        },
      },
    };
  }

  public get images() {
    return this.imagesByTypes(ImageType.POSTER, ImageType.BACKDROP);
  }

  public set(key: MovieInclude) {
    this.include[key] = this[key];
  }

  build(): Prisma.MovieInclude {
    return this.include;
  }
}
