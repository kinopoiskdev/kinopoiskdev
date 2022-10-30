
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model MovieLogo
 * 
 */
export type MovieLogo = {
  url: string | null
}

/**
 * Model MovieBudget
 * 
 */
export type MovieBudget = {
  currency: string | null
  value: string
}

/**
 * Model MovieNameItem
 * 
 */
export type MovieNameItem = {
  name: string
}

/**
 * Model MovieDistributors
 * 
 */
export type MovieDistributors = {
  distributor: string | null
  distributorRelease: string | null
}

/**
 * Model MovieExternalId
 * 
 */
export type MovieExternalId = {
  imdb: string | null
  tmdb: number | null
  kpHD: string | null
}

/**
 * Model MovieFees
 * 
 */
export type MovieFees = {
  usa: MovieFeesItem | null
  world: MovieFeesItem | null
  russia: MovieFeesItem | null
}

/**
 * Model MovieFeesItem
 * 
 */
export type MovieFeesItem = {
  currency: string
  value: number
}

/**
 * Model MoviePremiere
 * 
 */
export type MoviePremiere = {
  country: string | null
  bluray: Date | null
  cinema: Date | null
  digital: Date | null
  dvd: Date | null
  russia: Date | null
  world: Date | null
}

/**
 * Model MovieRating
 * 
 */
export type MovieRating = {
  kp: number
  imdb: number
  await: number | null
  filmCritics: number | null
  russianFilmCritics: number | null
  tmdb: number | null
}

/**
 * Model MovieTechnology
 * 
 */
export type MovieTechnology = {
  has3D: boolean
  hasImax: boolean
}

/**
 * Model MovieVotes
 * 
 */
export type MovieVotes = {
  await: number | null
  filmCritics: number | null
  imdb: number
  kp: number
  russianFilmCritics: number | null
  tmdb: number | null
}

/**
 * Model MovieWatchability
 * 
 */
export type MovieWatchability = {
  items: MovieWatchabilityItems[]
}

/**
 * Model MovieWatchabilityItems
 * 
 */
export type MovieWatchabilityItems = {
  logo: MovieLogo
  name: string
  url: string
}

/**
 * Model MovieReleaseYears
 * 
 */
export type MovieReleaseYears = {
  start: number
  end: number | null
}

/**
 * Model PersonSpouses
 * 
 */
export type PersonSpouses = {
  children: number
  divorced: boolean
  divorcedReason: DivorcedReason
  name: string
  relation: PersonRelation
  sex: PersonSex | null
}

/**
 * Model SeasonEpisode
 * 
 */
export type SeasonEpisode = {
  date: Date | null
  description: string | null
  enName: string | null
  name: string | null
  number: number
}

/**
 * Model Video
 * 
 */
export type Video = {
  id: string
  kpId: number
  name: string
  url: string
  size: number | null
  source: VideoSource
  type: VideoType | null
  movieId: string
}

/**
 * Model Image
 * 
 */
export type Image = {
  id: string
  movieKpId: number
  url: string
  language: string | null
  previewUrl: string
  kpMovieId: number
  height: number | null
  width: number | null
  type: ImageType
  createdAt: Date
  updatedAt: Date
  movieId: string
}

/**
 * Model Season
 * 
 */
export type Season = {
  id: string
  movieKpId: number
  episodesCount: number
  number: number
  episodes: SeasonEpisode[]
  createdAt: Date
  updatedAt: Date
  movieId: string
}

/**
 * Model Review
 * 
 */
export type Review = {
  id: string
  kpMovieId: number
  author: string
  review: string
  title: string | null
  reviewDislikes: number
  reviewLikes: number
  userRating: number
  date: Date
  createdAt: Date
  updatedAt: Date
  movieId: string
}

/**
 * Model Person
 * 
 */
export type Person = {
  id: string
  kpId: number
  enName: string | null
  name: string | null
  photo: string
  sex: PersonSex | null
  birthPlace: string[]
  deathPlace: string[]
  age: number | null
  countAwards: number | null
  growth: number | null
  profession: ProfessionType[]
  spouses: PersonSpouses[]
  birthday: Date | null
  death: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model MovieOnPerson
 * 
 */
export type MovieOnPerson = {
  id: string
  kpId: number
  kpMovieId: number
  description: string
  profession: ProfessionType[]
  assignedAt: Date
  updatedAt: Date
  movieId: string
  personId: string
}

/**
 * Model PersonFact
 * 
 */
export type PersonFact = {
  id: string
  personKpId: number
  value: string
  createdAt: Date
  updatedAt: Date
  personId: string
}

/**
 * Model MovieFact
 * 
 */
export type MovieFact = {
  id: string
  movieKpId: number
  spoiler: boolean | null
  type: string | null
  value: string
  createdAt: Date
  updatedAt: Date
  movieId: string
}

/**
 * Model Movie
 * 
 */
export type Movie = {
  id: string
  kpId: number
  externalId: MovieExternalId
  name: string | null
  names: string[]
  enName: string | null
  alternativeName: string | null
  description: string | null
  ratingMpaa: string | null
  shortDescription: string | null
  slogan: string | null
  year: number | null
  movieLength: number | null
  ageRating: number | null
  top10: number | null
  top250: number | null
  type: MovieType | null
  status: MovieStatus | null
  genres: MovieNameItem[]
  countries: MovieNameItem[]
  rating: MovieRating
  budget: MovieBudget | null
  distributors: MovieDistributors | null
  votes: MovieVotes
  fees: MovieFees | null
  premiere: MoviePremiere | null
  technology: MovieTechnology | null
  watchability: MovieWatchability | null
  releaseYears: MovieReleaseYears[]
  createdAt: Date
  updatedAt: Date
  movieId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const DivorcedReason: {
  ANNULLED: 'ANNULLED',
  DIVORCE: 'DIVORCE',
  DIED: 'DIED'
};

export type DivorcedReason = (typeof DivorcedReason)[keyof typeof DivorcedReason]


export const ImageType: {
  BACKDROP: 'BACKDROP',
  POSTER: 'POSTER',
  FRAME: 'FRAME',
  LOGO: 'LOGO',
  STILL: 'STILL',
  SHOOTING: 'SHOOTING',
  SCREENSHOT: 'SCREENSHOT'
};

export type ImageType = (typeof ImageType)[keyof typeof ImageType]


export const MovieStatus: {
  FILMING: 'FILMING',
  PRE_PRODUCTION: 'PRE_PRODUCTION',
  COMPLETED: 'COMPLETED',
  ANNOUNCED: 'ANNOUNCED',
  UNKNOWN: 'UNKNOWN',
  POST_PRODUCTION: 'POST_PRODUCTION'
};

export type MovieStatus = (typeof MovieStatus)[keyof typeof MovieStatus]


export const MovieType: {
  ANIMATED_SERIES: 'ANIMATED_SERIES',
  ANIME: 'ANIME',
  CARTOON: 'CARTOON',
  MINI_SERIES: 'MINI_SERIES',
  MOVIE: 'MOVIE',
  TV_SERIES: 'TV_SERIES',
  TV_SHOW: 'TV_SHOW',
  VIDEO: 'VIDEO'
};

export type MovieType = (typeof MovieType)[keyof typeof MovieType]


export const PersonRelation: {
  HUSBAND: 'HUSBAND',
  WIFE: 'WIFE'
};

export type PersonRelation = (typeof PersonRelation)[keyof typeof PersonRelation]


export const PersonSex: {
  Male: 'Male',
  Female: 'Female'
};

export type PersonSex = (typeof PersonSex)[keyof typeof PersonSex]


export const ProfessionType: {
  ACTOR: 'ACTOR',
  NOT_LISTED_IN_THE_CREDITS: 'NOT_LISTED_IN_THE_CREDITS',
  BAND_CHRONICLE: 'BAND_CHRONICLE',
  BAND_PLAYING_THEMSELVES: 'BAND_PLAYING_THEMSELVES',
  DIRECTOR: 'DIRECTOR',
  COMPOSER: 'COMPOSER',
  EDITOR: 'EDITOR',
  VOICE_DIRECTOR: 'VOICE_DIRECTOR',
  OPERATOR: 'OPERATOR',
  TRANSLATOR: 'TRANSLATOR',
  PRODUCER: 'PRODUCER',
  WRITER: 'WRITER',
  PRODUCTION_DESIGNER: 'PRODUCTION_DESIGNER',
  PRODUCER_USSR: 'PRODUCER_USSR'
};

export type ProfessionType = (typeof ProfessionType)[keyof typeof ProfessionType]


export const VideoSource: {
  YOUTUBE: 'YOUTUBE',
  YANDEX: 'YANDEX'
};

export type VideoSource = (typeof VideoSource)[keyof typeof VideoSource]


export const VideoType: {
  TRAILER: 'TRAILER',
  TEASER: 'TEASER'
};

export type VideoType = (typeof VideoType)[keyof typeof VideoType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Videos
 * const videos = await prisma.video.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Videos
   * const videos = await prisma.video.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number}): Promise<R>;

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): PrismaPromise<Prisma.JsonObject>;

      /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;

  /**
   * `prisma.season`: Exposes CRUD operations for the **Season** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seasons
    * const seasons = await prisma.season.findMany()
    * ```
    */
  get season(): Prisma.SeasonDelegate<GlobalReject>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<GlobalReject>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.movieOnPerson`: Exposes CRUD operations for the **MovieOnPerson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieOnPeople
    * const movieOnPeople = await prisma.movieOnPerson.findMany()
    * ```
    */
  get movieOnPerson(): Prisma.MovieOnPersonDelegate<GlobalReject>;

  /**
   * `prisma.personFact`: Exposes CRUD operations for the **PersonFact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonFacts
    * const personFacts = await prisma.personFact.findMany()
    * ```
    */
  get personFact(): Prisma.PersonFactDelegate<GlobalReject>;

  /**
   * `prisma.movieFact`: Exposes CRUD operations for the **MovieFact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieFacts
    * const movieFacts = await prisma.movieFact.findMany()
    * ```
    */
  get movieFact(): Prisma.MovieFactDelegate<GlobalReject>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Extensions
   */
  export type Extension = runtime.Extension 

  /**
   * Prisma Client JS version: 4.5.0
   * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Video: 'Video',
    Image: 'Image',
    Season: 'Season',
    Review: 'Review',
    Person: 'Person',
    MovieOnPerson: 'MovieOnPerson',
    PersonFact: 'PersonFact',
    MovieFact: 'MovieFact',
    Movie: 'Movie'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;


  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PersonCountOutputType
   */


  export type PersonCountOutputType = {
    movies: number
    facts: number
  }

  export type PersonCountOutputTypeSelect = {
    movies?: boolean
    facts?: boolean
  }

  export type PersonCountOutputTypeGetPayload<
    S extends boolean | null | undefined | PersonCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? PersonCountOutputType
    : S extends undefined
    ? never
    : S extends PersonCountOutputTypeArgs
    ?'include' extends U
    ? PersonCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PersonCountOutputType ? PersonCountOutputType[P] : never
  } 
    : PersonCountOutputType
  : PersonCountOutputType




  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     * 
    **/
    select?: PersonCountOutputTypeSelect | null
  }



  /**
   * Count Type MovieCountOutputType
   */


  export type MovieCountOutputType = {
    images: number
    videos: number
    seasons: number
    persons: number
    facts: number
    review: number
    sequelsAndPrequels: number
    similarMovies: number
  }

  export type MovieCountOutputTypeSelect = {
    images?: boolean
    videos?: boolean
    seasons?: boolean
    persons?: boolean
    facts?: boolean
    review?: boolean
    sequelsAndPrequels?: boolean
    similarMovies?: boolean
  }

  export type MovieCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MovieCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MovieCountOutputType
    : S extends undefined
    ? never
    : S extends MovieCountOutputTypeArgs
    ?'include' extends U
    ? MovieCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieCountOutputType ? MovieCountOutputType[P] : never
  } 
    : MovieCountOutputType
  : MovieCountOutputType




  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     * 
    **/
    select?: MovieCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model MovieLogo
   */





  export type MovieLogoSelect = {
    url?: boolean
  }

  export type MovieLogoGetPayload<
    S extends boolean | null | undefined | MovieLogoArgs,
    U = keyof S
      > = S extends true
        ? MovieLogo
    : S extends undefined
    ? never
    : S extends MovieLogoArgs
    ?'include' extends U
    ? MovieLogo 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieLogo ? MovieLogo[P] : never
  } 
    : MovieLogo
  : MovieLogo



  export interface MovieLogoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieLogo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieLogoClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieLogo without action
   */
  export type MovieLogoArgs = {
    /**
     * Select specific fields to fetch from the MovieLogo
     * 
    **/
    select?: MovieLogoSelect | null
  }



  /**
   * Model MovieBudget
   */





  export type MovieBudgetSelect = {
    currency?: boolean
    value?: boolean
  }

  export type MovieBudgetGetPayload<
    S extends boolean | null | undefined | MovieBudgetArgs,
    U = keyof S
      > = S extends true
        ? MovieBudget
    : S extends undefined
    ? never
    : S extends MovieBudgetArgs
    ?'include' extends U
    ? MovieBudget 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieBudget ? MovieBudget[P] : never
  } 
    : MovieBudget
  : MovieBudget



  export interface MovieBudgetDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieBudgetClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieBudget without action
   */
  export type MovieBudgetArgs = {
    /**
     * Select specific fields to fetch from the MovieBudget
     * 
    **/
    select?: MovieBudgetSelect | null
  }



  /**
   * Model MovieNameItem
   */





  export type MovieNameItemSelect = {
    name?: boolean
  }

  export type MovieNameItemGetPayload<
    S extends boolean | null | undefined | MovieNameItemArgs,
    U = keyof S
      > = S extends true
        ? MovieNameItem
    : S extends undefined
    ? never
    : S extends MovieNameItemArgs
    ?'include' extends U
    ? MovieNameItem 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieNameItem ? MovieNameItem[P] : never
  } 
    : MovieNameItem
  : MovieNameItem



  export interface MovieNameItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieNameItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieNameItemClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieNameItem without action
   */
  export type MovieNameItemArgs = {
    /**
     * Select specific fields to fetch from the MovieNameItem
     * 
    **/
    select?: MovieNameItemSelect | null
  }



  /**
   * Model MovieDistributors
   */





  export type MovieDistributorsSelect = {
    distributor?: boolean
    distributorRelease?: boolean
  }

  export type MovieDistributorsGetPayload<
    S extends boolean | null | undefined | MovieDistributorsArgs,
    U = keyof S
      > = S extends true
        ? MovieDistributors
    : S extends undefined
    ? never
    : S extends MovieDistributorsArgs
    ?'include' extends U
    ? MovieDistributors 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieDistributors ? MovieDistributors[P] : never
  } 
    : MovieDistributors
  : MovieDistributors



  export interface MovieDistributorsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieDistributors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieDistributorsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieDistributors without action
   */
  export type MovieDistributorsArgs = {
    /**
     * Select specific fields to fetch from the MovieDistributors
     * 
    **/
    select?: MovieDistributorsSelect | null
  }



  /**
   * Model MovieExternalId
   */





  export type MovieExternalIdSelect = {
    imdb?: boolean
    tmdb?: boolean
    kpHD?: boolean
  }

  export type MovieExternalIdGetPayload<
    S extends boolean | null | undefined | MovieExternalIdArgs,
    U = keyof S
      > = S extends true
        ? MovieExternalId
    : S extends undefined
    ? never
    : S extends MovieExternalIdArgs
    ?'include' extends U
    ? MovieExternalId 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieExternalId ? MovieExternalId[P] : never
  } 
    : MovieExternalId
  : MovieExternalId



  export interface MovieExternalIdDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieExternalId.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieExternalIdClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieExternalId without action
   */
  export type MovieExternalIdArgs = {
    /**
     * Select specific fields to fetch from the MovieExternalId
     * 
    **/
    select?: MovieExternalIdSelect | null
  }



  /**
   * Model MovieFees
   */





  export type MovieFeesSelect = {
    usa?: boolean | MovieFeesItemArgs
    world?: boolean | MovieFeesItemArgs
    russia?: boolean | MovieFeesItemArgs
  }

  export type MovieFeesInclude = {

  }

  export type MovieFeesGetPayload<
    S extends boolean | null | undefined | MovieFeesArgs,
    U = keyof S
      > = S extends true
        ? MovieFees
    : S extends undefined
    ? never
    : S extends MovieFeesArgs
    ?'include' extends U
    ? MovieFees 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'usa' ? MovieFeesItemGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'world' ? MovieFeesItemGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'russia' ? MovieFeesItemGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof MovieFees ? MovieFees[P] : never
  } 
    : MovieFees
  : MovieFees



  export interface MovieFeesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieFees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieFeesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    usa<T extends MovieFeesItemArgs = {}>(args?: Subset<T, MovieFeesItemArgs>): CheckSelect<T, Prisma__MovieFeesItemClient<MovieFeesItem | Null>, Prisma__MovieFeesItemClient<MovieFeesItemGetPayload<T> | Null>>;

    world<T extends MovieFeesItemArgs = {}>(args?: Subset<T, MovieFeesItemArgs>): CheckSelect<T, Prisma__MovieFeesItemClient<MovieFeesItem | Null>, Prisma__MovieFeesItemClient<MovieFeesItemGetPayload<T> | Null>>;

    russia<T extends MovieFeesItemArgs = {}>(args?: Subset<T, MovieFeesItemArgs>): CheckSelect<T, Prisma__MovieFeesItemClient<MovieFeesItem | Null>, Prisma__MovieFeesItemClient<MovieFeesItemGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieFees without action
   */
  export type MovieFeesArgs = {
    /**
     * Select specific fields to fetch from the MovieFees
     * 
    **/
    select?: MovieFeesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFeesInclude | null
  }



  /**
   * Model MovieFeesItem
   */





  export type MovieFeesItemSelect = {
    currency?: boolean
    value?: boolean
  }

  export type MovieFeesItemGetPayload<
    S extends boolean | null | undefined | MovieFeesItemArgs,
    U = keyof S
      > = S extends true
        ? MovieFeesItem
    : S extends undefined
    ? never
    : S extends MovieFeesItemArgs
    ?'include' extends U
    ? MovieFeesItem 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieFeesItem ? MovieFeesItem[P] : never
  } 
    : MovieFeesItem
  : MovieFeesItem



  export interface MovieFeesItemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieFeesItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieFeesItemClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieFeesItem without action
   */
  export type MovieFeesItemArgs = {
    /**
     * Select specific fields to fetch from the MovieFeesItem
     * 
    **/
    select?: MovieFeesItemSelect | null
  }



  /**
   * Model MoviePremiere
   */





  export type MoviePremiereSelect = {
    country?: boolean
    bluray?: boolean
    cinema?: boolean
    digital?: boolean
    dvd?: boolean
    russia?: boolean
    world?: boolean
  }

  export type MoviePremiereGetPayload<
    S extends boolean | null | undefined | MoviePremiereArgs,
    U = keyof S
      > = S extends true
        ? MoviePremiere
    : S extends undefined
    ? never
    : S extends MoviePremiereArgs
    ?'include' extends U
    ? MoviePremiere 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MoviePremiere ? MoviePremiere[P] : never
  } 
    : MoviePremiere
  : MoviePremiere



  export interface MoviePremiereDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MoviePremiere.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MoviePremiereClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MoviePremiere without action
   */
  export type MoviePremiereArgs = {
    /**
     * Select specific fields to fetch from the MoviePremiere
     * 
    **/
    select?: MoviePremiereSelect | null
  }



  /**
   * Model MovieRating
   */





  export type MovieRatingSelect = {
    kp?: boolean
    imdb?: boolean
    await?: boolean
    filmCritics?: boolean
    russianFilmCritics?: boolean
    tmdb?: boolean
  }

  export type MovieRatingGetPayload<
    S extends boolean | null | undefined | MovieRatingArgs,
    U = keyof S
      > = S extends true
        ? MovieRating
    : S extends undefined
    ? never
    : S extends MovieRatingArgs
    ?'include' extends U
    ? MovieRating 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieRating ? MovieRating[P] : never
  } 
    : MovieRating
  : MovieRating



  export interface MovieRatingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieRatingClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieRating without action
   */
  export type MovieRatingArgs = {
    /**
     * Select specific fields to fetch from the MovieRating
     * 
    **/
    select?: MovieRatingSelect | null
  }



  /**
   * Model MovieTechnology
   */





  export type MovieTechnologySelect = {
    has3D?: boolean
    hasImax?: boolean
  }

  export type MovieTechnologyGetPayload<
    S extends boolean | null | undefined | MovieTechnologyArgs,
    U = keyof S
      > = S extends true
        ? MovieTechnology
    : S extends undefined
    ? never
    : S extends MovieTechnologyArgs
    ?'include' extends U
    ? MovieTechnology 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieTechnology ? MovieTechnology[P] : never
  } 
    : MovieTechnology
  : MovieTechnology



  export interface MovieTechnologyDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieTechnology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieTechnologyClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieTechnology without action
   */
  export type MovieTechnologyArgs = {
    /**
     * Select specific fields to fetch from the MovieTechnology
     * 
    **/
    select?: MovieTechnologySelect | null
  }



  /**
   * Model MovieVotes
   */





  export type MovieVotesSelect = {
    await?: boolean
    filmCritics?: boolean
    imdb?: boolean
    kp?: boolean
    russianFilmCritics?: boolean
    tmdb?: boolean
  }

  export type MovieVotesGetPayload<
    S extends boolean | null | undefined | MovieVotesArgs,
    U = keyof S
      > = S extends true
        ? MovieVotes
    : S extends undefined
    ? never
    : S extends MovieVotesArgs
    ?'include' extends U
    ? MovieVotes 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieVotes ? MovieVotes[P] : never
  } 
    : MovieVotes
  : MovieVotes



  export interface MovieVotesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieVotes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieVotesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieVotes without action
   */
  export type MovieVotesArgs = {
    /**
     * Select specific fields to fetch from the MovieVotes
     * 
    **/
    select?: MovieVotesSelect | null
  }



  /**
   * Model MovieWatchability
   */





  export type MovieWatchabilitySelect = {
    items?: boolean | MovieWatchabilityItemsArgs
  }

  export type MovieWatchabilityInclude = {

  }

  export type MovieWatchabilityGetPayload<
    S extends boolean | null | undefined | MovieWatchabilityArgs,
    U = keyof S
      > = S extends true
        ? MovieWatchability
    : S extends undefined
    ? never
    : S extends MovieWatchabilityArgs
    ?'include' extends U
    ? MovieWatchability 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'items' ? Array < MovieWatchabilityItemsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :  P extends keyof MovieWatchability ? MovieWatchability[P] : never
  } 
    : MovieWatchability
  : MovieWatchability



  export interface MovieWatchabilityDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieWatchability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieWatchabilityClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    items<T extends MovieWatchabilityItemsArgs = {}>(args?: Subset<T, MovieWatchabilityItemsArgs>): CheckSelect<T, PrismaPromise<Array<MovieWatchabilityItems>| Null>, PrismaPromise<Array<MovieWatchabilityItemsGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieWatchability without action
   */
  export type MovieWatchabilityArgs = {
    /**
     * Select specific fields to fetch from the MovieWatchability
     * 
    **/
    select?: MovieWatchabilitySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieWatchabilityInclude | null
  }



  /**
   * Model MovieWatchabilityItems
   */





  export type MovieWatchabilityItemsSelect = {
    logo?: boolean | MovieLogoArgs
    name?: boolean
    url?: boolean
  }

  export type MovieWatchabilityItemsInclude = {

  }

  export type MovieWatchabilityItemsGetPayload<
    S extends boolean | null | undefined | MovieWatchabilityItemsArgs,
    U = keyof S
      > = S extends true
        ? MovieWatchabilityItems
    : S extends undefined
    ? never
    : S extends MovieWatchabilityItemsArgs
    ?'include' extends U
    ? MovieWatchabilityItems 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'logo' ? MovieLogoGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof MovieWatchabilityItems ? MovieWatchabilityItems[P] : never
  } 
    : MovieWatchabilityItems
  : MovieWatchabilityItems



  export interface MovieWatchabilityItemsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieWatchabilityItems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieWatchabilityItemsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    logo<T extends MovieLogoArgs = {}>(args?: Subset<T, MovieLogoArgs>): CheckSelect<T, Prisma__MovieLogoClient<MovieLogo | Null>, Prisma__MovieLogoClient<MovieLogoGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieWatchabilityItems without action
   */
  export type MovieWatchabilityItemsArgs = {
    /**
     * Select specific fields to fetch from the MovieWatchabilityItems
     * 
    **/
    select?: MovieWatchabilityItemsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieWatchabilityItemsInclude | null
  }



  /**
   * Model MovieReleaseYears
   */





  export type MovieReleaseYearsSelect = {
    start?: boolean
    end?: boolean
  }

  export type MovieReleaseYearsGetPayload<
    S extends boolean | null | undefined | MovieReleaseYearsArgs,
    U = keyof S
      > = S extends true
        ? MovieReleaseYears
    : S extends undefined
    ? never
    : S extends MovieReleaseYearsArgs
    ?'include' extends U
    ? MovieReleaseYears 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieReleaseYears ? MovieReleaseYears[P] : never
  } 
    : MovieReleaseYears
  : MovieReleaseYears



  export interface MovieReleaseYearsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieReleaseYears.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieReleaseYearsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieReleaseYears without action
   */
  export type MovieReleaseYearsArgs = {
    /**
     * Select specific fields to fetch from the MovieReleaseYears
     * 
    **/
    select?: MovieReleaseYearsSelect | null
  }



  /**
   * Model PersonSpouses
   */





  export type PersonSpousesSelect = {
    children?: boolean
    divorced?: boolean
    divorcedReason?: boolean
    name?: boolean
    relation?: boolean
    sex?: boolean
  }

  export type PersonSpousesGetPayload<
    S extends boolean | null | undefined | PersonSpousesArgs,
    U = keyof S
      > = S extends true
        ? PersonSpouses
    : S extends undefined
    ? never
    : S extends PersonSpousesArgs
    ?'include' extends U
    ? PersonSpouses 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof PersonSpouses ? PersonSpouses[P] : never
  } 
    : PersonSpouses
  : PersonSpouses



  export interface PersonSpousesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonSpouses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonSpousesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PersonSpouses without action
   */
  export type PersonSpousesArgs = {
    /**
     * Select specific fields to fetch from the PersonSpouses
     * 
    **/
    select?: PersonSpousesSelect | null
  }



  /**
   * Model SeasonEpisode
   */





  export type SeasonEpisodeSelect = {
    date?: boolean
    description?: boolean
    enName?: boolean
    name?: boolean
    number?: boolean
  }

  export type SeasonEpisodeGetPayload<
    S extends boolean | null | undefined | SeasonEpisodeArgs,
    U = keyof S
      > = S extends true
        ? SeasonEpisode
    : S extends undefined
    ? never
    : S extends SeasonEpisodeArgs
    ?'include' extends U
    ? SeasonEpisode 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof SeasonEpisode ? SeasonEpisode[P] : never
  } 
    : SeasonEpisode
  : SeasonEpisode



  export interface SeasonEpisodeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {






  }

  /**
   * The delegate class that acts as a "Promise-like" for SeasonEpisode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SeasonEpisodeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SeasonEpisode without action
   */
  export type SeasonEpisodeArgs = {
    /**
     * Select specific fields to fetch from the SeasonEpisode
     * 
    **/
    select?: SeasonEpisodeSelect | null
  }



  /**
   * Model Video
   */


  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    kpId: number | null
    size: number | null
  }

  export type VideoSumAggregateOutputType = {
    kpId: number | null
    size: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    kpId: number | null
    name: string | null
    url: string | null
    size: number | null
    source: VideoSource | null
    type: VideoType | null
    movieId: string | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    kpId: number | null
    name: string | null
    url: string | null
    size: number | null
    source: VideoSource | null
    type: VideoType | null
    movieId: string | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    kpId: number
    name: number
    url: number
    size: number
    source: number
    type: number
    movieId: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    kpId?: true
    size?: true
  }

  export type VideoSumAggregateInputType = {
    kpId?: true
    size?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    kpId?: true
    name?: true
    url?: true
    size?: true
    source?: true
    type?: true
    movieId?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    kpId?: true
    name?: true
    url?: true
    size?: true
    source?: true
    type?: true
    movieId?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    kpId?: true
    name?: true
    url?: true
    size?: true
    source?: true
    type?: true
    movieId?: true
    _all?: true
  }

  export type VideoAggregateArgs = {
    /**
     * Filter which Video to aggregate.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs = {
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithAggregationInput>
    by: Array<VideoScalarFieldEnum>
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }


  export type VideoGroupByOutputType = {
    id: string
    kpId: number
    name: string
    url: string
    size: number | null
    source: VideoSource
    type: VideoType | null
    movieId: string
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect = {
    id?: boolean
    kpId?: boolean
    name?: boolean
    url?: boolean
    size?: boolean
    source?: boolean
    type?: boolean
    movie?: boolean | MovieArgs
    movieId?: boolean
  }

  export type VideoInclude = {
    movie?: boolean | MovieArgs
  }

  export type VideoGetPayload<
    S extends boolean | null | undefined | VideoArgs,
    U = keyof S
      > = S extends true
        ? Video
    : S extends undefined
    ? never
    : S extends VideoArgs | VideoFindManyArgs
    ?'include' extends U
    ? Video  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Video ? Video[P] : never
  } 
    : Video
  : Video


  type VideoCountArgs = Merge<
    Omit<VideoFindManyArgs, 'select' | 'include'> & {
      select?: VideoCountAggregateInputType | true
    }
  >

  export interface VideoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Video'> extends True ? CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>> : CheckSelect<T, Prisma__VideoClient<Video | null, null>, Prisma__VideoClient<VideoGetPayload<T> | null, null>>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Video'> extends True ? CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>> : CheckSelect<T, Prisma__VideoClient<Video | null, null>, Prisma__VideoClient<VideoGetPayload<T> | null, null>>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VideoFindManyArgs>(
      args?: SelectSubset<T, VideoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Video>>, PrismaPromise<Array<VideoGetPayload<T>>>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends VideoCreateArgs>(
      args: SelectSubset<T, VideoCreateArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Create many Videos.
     *     @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoCreateManyArgs>(
      args?: SelectSubset<T, VideoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends VideoDeleteArgs>(
      args: SelectSubset<T, VideoDeleteArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoUpdateArgs>(
      args: SelectSubset<T, VideoUpdateArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoDeleteManyArgs>(
      args?: SelectSubset<T, VideoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoUpdateManyArgs>(
      args: SelectSubset<T, VideoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends VideoUpsertArgs>(
      args: SelectSubset<T, VideoUpsertArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Find zero or more Videos that matches the filter.
     * @param {VideoFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const video = await prisma.video.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: VideoFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Video.
     * @param {VideoAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const video = await prisma.video.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: VideoAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Video that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VideoFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Find the first Video that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VideoFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Video base type for findUnique actions
   */
  export type VideoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     * 
    **/
    where: VideoWhereUniqueInput
  }

  /**
   * Video: findUnique
   */
  export interface VideoFindUniqueArgs extends VideoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video base type for findFirst actions
   */
  export type VideoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     * 
    **/
    distinct?: Enumerable<VideoScalarFieldEnum>
  }

  /**
   * Video: findFirst
   */
  export interface VideoFindFirstArgs extends VideoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video findMany
   */
  export type VideoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Videos to fetch.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video create
   */
  export type VideoCreateArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The data needed to create a Video.
     * 
    **/
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }


  /**
   * Video createMany
   */
  export type VideoCreateManyArgs = {
    /**
     * The data used to create many Videos.
     * 
    **/
    data: Enumerable<VideoCreateManyInput>
  }


  /**
   * Video update
   */
  export type VideoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The data needed to update a Video.
     * 
    **/
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs = {
    /**
     * The data used to update Videos.
     * 
    **/
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     * 
    **/
    where?: VideoWhereInput
  }


  /**
   * Video upsert
   */
  export type VideoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The filter to search for the Video to update in case it exists.
     * 
    **/
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     * 
    **/
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }


  /**
   * Video delete
   */
  export type VideoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter which Video to delete.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs = {
    /**
     * Filter which Videos to delete
     * 
    **/
    where?: VideoWhereInput
  }


  /**
   * Video findRaw
   */
  export type VideoFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Video aggregateRaw
   */
  export type VideoAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Video: findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs = VideoFindUniqueArgsBase
      

  /**
   * Video: findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs = VideoFindFirstArgsBase
      

  /**
   * Video without action
   */
  export type VideoArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    movieKpId: number | null
    kpMovieId: number | null
    height: number | null
    width: number | null
  }

  export type ImageSumAggregateOutputType = {
    movieKpId: number | null
    kpMovieId: number | null
    height: number | null
    width: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    movieKpId: number | null
    url: string | null
    language: string | null
    previewUrl: string | null
    kpMovieId: number | null
    height: number | null
    width: number | null
    type: ImageType | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    movieKpId: number | null
    url: string | null
    language: string | null
    previewUrl: string | null
    kpMovieId: number | null
    height: number | null
    width: number | null
    type: ImageType | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    movieKpId: number
    url: number
    language: number
    previewUrl: number
    kpMovieId: number
    height: number
    width: number
    type: number
    createdAt: number
    updatedAt: number
    movieId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    movieKpId?: true
    kpMovieId?: true
    height?: true
    width?: true
  }

  export type ImageSumAggregateInputType = {
    movieKpId?: true
    kpMovieId?: true
    height?: true
    width?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    movieKpId?: true
    url?: true
    language?: true
    previewUrl?: true
    kpMovieId?: true
    height?: true
    width?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    movieKpId?: true
    url?: true
    language?: true
    previewUrl?: true
    kpMovieId?: true
    height?: true
    width?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    movieKpId?: true
    url?: true
    language?: true
    previewUrl?: true
    kpMovieId?: true
    height?: true
    width?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: Array<ImageScalarFieldEnum>
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    id: string
    movieKpId: number
    url: string
    language: string | null
    previewUrl: string
    kpMovieId: number
    height: number | null
    width: number | null
    type: ImageType
    createdAt: Date
    updatedAt: Date
    movieId: string
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    id?: boolean
    movieKpId?: boolean
    url?: boolean
    language?: boolean
    previewUrl?: boolean
    kpMovieId?: boolean
    height?: boolean
    width?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieArgs
    movieId?: boolean
  }

  export type ImageInclude = {
    movie?: boolean | MovieArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Image ? Image[P] : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null, null>, Prisma__ImageClient<ImageGetPayload<T> | null, null>>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null, null>, Prisma__ImageClient<ImageGetPayload<T> | null, null>>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Find zero or more Images that matches the filter.
     * @param {ImageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const image = await prisma.image.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ImageFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Image.
     * @param {ImageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const image = await prisma.image.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ImageAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Image that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Find the first Image that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Image base type for findUnique actions
   */
  export type ImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where: ImageWhereUniqueInput
  }

  /**
   * Image: findUnique
   */
  export interface ImageFindUniqueArgs extends ImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image base type for findFirst actions
   */
  export type ImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }

  /**
   * Image: findFirst
   */
  export interface ImageFindFirstArgs extends ImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     * 
    **/
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs = {
    /**
     * The data used to create many Images.
     * 
    **/
    data: Enumerable<ImageCreateManyInput>
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     * 
    **/
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    /**
     * The data used to update Images.
     * 
    **/
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     * 
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     * 
    **/
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    /**
     * Filter which Images to delete
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image findRaw
   */
  export type ImageFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Image aggregateRaw
   */
  export type ImageAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Image: findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs = ImageFindUniqueArgsBase
      

  /**
   * Image: findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs = ImageFindFirstArgsBase
      

  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
  }



  /**
   * Model Season
   */


  export type AggregateSeason = {
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  export type SeasonAvgAggregateOutputType = {
    movieKpId: number | null
    episodesCount: number | null
    number: number | null
  }

  export type SeasonSumAggregateOutputType = {
    movieKpId: number | null
    episodesCount: number | null
    number: number | null
  }

  export type SeasonMinAggregateOutputType = {
    id: string | null
    movieKpId: number | null
    episodesCount: number | null
    number: number | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type SeasonMaxAggregateOutputType = {
    id: string | null
    movieKpId: number | null
    episodesCount: number | null
    number: number | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type SeasonCountAggregateOutputType = {
    id: number
    movieKpId: number
    episodesCount: number
    number: number
    createdAt: number
    updatedAt: number
    movieId: number
    _all: number
  }


  export type SeasonAvgAggregateInputType = {
    movieKpId?: true
    episodesCount?: true
    number?: true
  }

  export type SeasonSumAggregateInputType = {
    movieKpId?: true
    episodesCount?: true
    number?: true
  }

  export type SeasonMinAggregateInputType = {
    id?: true
    movieKpId?: true
    episodesCount?: true
    number?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type SeasonMaxAggregateInputType = {
    id?: true
    movieKpId?: true
    episodesCount?: true
    number?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type SeasonCountAggregateInputType = {
    id?: true
    movieKpId?: true
    episodesCount?: true
    number?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    _all?: true
  }

  export type SeasonAggregateArgs = {
    /**
     * Filter which Season to aggregate.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seasons
    **/
    _count?: true | SeasonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeasonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeasonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeasonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeasonMaxAggregateInputType
  }

  export type GetSeasonAggregateType<T extends SeasonAggregateArgs> = {
        [P in keyof T & keyof AggregateSeason]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeason[P]>
      : GetScalarType<T[P], AggregateSeason[P]>
  }




  export type SeasonGroupByArgs = {
    where?: SeasonWhereInput
    orderBy?: Enumerable<SeasonOrderByWithAggregationInput>
    by: Array<SeasonScalarFieldEnum>
    having?: SeasonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeasonCountAggregateInputType | true
    _avg?: SeasonAvgAggregateInputType
    _sum?: SeasonSumAggregateInputType
    _min?: SeasonMinAggregateInputType
    _max?: SeasonMaxAggregateInputType
  }


  export type SeasonGroupByOutputType = {
    id: string
    movieKpId: number
    episodesCount: number
    number: number
    createdAt: Date
    updatedAt: Date
    movieId: string
    _count: SeasonCountAggregateOutputType | null
    _avg: SeasonAvgAggregateOutputType | null
    _sum: SeasonSumAggregateOutputType | null
    _min: SeasonMinAggregateOutputType | null
    _max: SeasonMaxAggregateOutputType | null
  }

  type GetSeasonGroupByPayload<T extends SeasonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SeasonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeasonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeasonGroupByOutputType[P]>
            : GetScalarType<T[P], SeasonGroupByOutputType[P]>
        }
      >
    >


  export type SeasonSelect = {
    id?: boolean
    movieKpId?: boolean
    episodesCount?: boolean
    number?: boolean
    episodes?: boolean | SeasonEpisodeArgs
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieArgs
    movieId?: boolean
  }

  export type SeasonInclude = {
    movie?: boolean | MovieArgs
  }

  export type SeasonGetPayload<
    S extends boolean | null | undefined | SeasonArgs,
    U = keyof S
      > = S extends true
        ? Season
    : S extends undefined
    ? never
    : S extends SeasonArgs | SeasonFindManyArgs
    ?'include' extends U
    ? Season  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'episodes' ? Array < SeasonEpisodeGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'movie' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Season ? Season[P] : never
  } 
    : Season
  : Season


  type SeasonCountArgs = Merge<
    Omit<SeasonFindManyArgs, 'select' | 'include'> & {
      select?: SeasonCountAggregateInputType | true
    }
  >

  export interface SeasonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Season that matches the filter.
     * @param {SeasonFindUniqueArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeasonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SeasonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Season'> extends True ? CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>> : CheckSelect<T, Prisma__SeasonClient<Season | null, null>, Prisma__SeasonClient<SeasonGetPayload<T> | null, null>>

    /**
     * Find the first Season that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeasonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SeasonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Season'> extends True ? CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>> : CheckSelect<T, Prisma__SeasonClient<Season | null, null>, Prisma__SeasonClient<SeasonGetPayload<T> | null, null>>

    /**
     * Find zero or more Seasons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seasons
     * const seasons = await prisma.season.findMany()
     * 
     * // Get first 10 Seasons
     * const seasons = await prisma.season.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seasonWithIdOnly = await prisma.season.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeasonFindManyArgs>(
      args?: SelectSubset<T, SeasonFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Season>>, PrismaPromise<Array<SeasonGetPayload<T>>>>

    /**
     * Create a Season.
     * @param {SeasonCreateArgs} args - Arguments to create a Season.
     * @example
     * // Create one Season
     * const Season = await prisma.season.create({
     *   data: {
     *     // ... data to create a Season
     *   }
     * })
     * 
    **/
    create<T extends SeasonCreateArgs>(
      args: SelectSubset<T, SeasonCreateArgs>
    ): CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>>

    /**
     * Create many Seasons.
     *     @param {SeasonCreateManyArgs} args - Arguments to create many Seasons.
     *     @example
     *     // Create many Seasons
     *     const season = await prisma.season.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeasonCreateManyArgs>(
      args?: SelectSubset<T, SeasonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Season.
     * @param {SeasonDeleteArgs} args - Arguments to delete one Season.
     * @example
     * // Delete one Season
     * const Season = await prisma.season.delete({
     *   where: {
     *     // ... filter to delete one Season
     *   }
     * })
     * 
    **/
    delete<T extends SeasonDeleteArgs>(
      args: SelectSubset<T, SeasonDeleteArgs>
    ): CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>>

    /**
     * Update one Season.
     * @param {SeasonUpdateArgs} args - Arguments to update one Season.
     * @example
     * // Update one Season
     * const season = await prisma.season.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeasonUpdateArgs>(
      args: SelectSubset<T, SeasonUpdateArgs>
    ): CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>>

    /**
     * Delete zero or more Seasons.
     * @param {SeasonDeleteManyArgs} args - Arguments to filter Seasons to delete.
     * @example
     * // Delete a few Seasons
     * const { count } = await prisma.season.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeasonDeleteManyArgs>(
      args?: SelectSubset<T, SeasonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seasons
     * const season = await prisma.season.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeasonUpdateManyArgs>(
      args: SelectSubset<T, SeasonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Season.
     * @param {SeasonUpsertArgs} args - Arguments to update or create a Season.
     * @example
     * // Update or create a Season
     * const season = await prisma.season.upsert({
     *   create: {
     *     // ... data to create a Season
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Season we want to update
     *   }
     * })
    **/
    upsert<T extends SeasonUpsertArgs>(
      args: SelectSubset<T, SeasonUpsertArgs>
    ): CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>>

    /**
     * Find zero or more Seasons that matches the filter.
     * @param {SeasonFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const season = await prisma.season.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: SeasonFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Season.
     * @param {SeasonAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const season = await prisma.season.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: SeasonAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Season that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SeasonFindUniqueOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeasonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SeasonFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>>

    /**
     * Find the first Season that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonFindFirstOrThrowArgs} args - Arguments to find a Season
     * @example
     * // Get one Season
     * const season = await prisma.season.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeasonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SeasonFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SeasonClient<Season>, Prisma__SeasonClient<SeasonGetPayload<T>>>

    /**
     * Count the number of Seasons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonCountArgs} args - Arguments to filter Seasons to count.
     * @example
     * // Count the number of Seasons
     * const count = await prisma.season.count({
     *   where: {
     *     // ... the filter for the Seasons we want to count
     *   }
     * })
    **/
    count<T extends SeasonCountArgs>(
      args?: Subset<T, SeasonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeasonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeasonAggregateArgs>(args: Subset<T, SeasonAggregateArgs>): PrismaPromise<GetSeasonAggregateType<T>>

    /**
     * Group by Season.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeasonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeasonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeasonGroupByArgs['orderBy'] }
        : { orderBy?: SeasonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeasonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeasonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Season.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SeasonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    episodes<T extends SeasonEpisodeArgs = {}>(args?: Subset<T, SeasonEpisodeArgs>): CheckSelect<T, PrismaPromise<Array<SeasonEpisode>| Null>, PrismaPromise<Array<SeasonEpisodeGetPayload<T>>| Null>>;

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Season base type for findUnique actions
   */
  export type SeasonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Season to fetch.
     * 
    **/
    where: SeasonWhereUniqueInput
  }

  /**
   * Season: findUnique
   */
  export interface SeasonFindUniqueArgs extends SeasonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Season base type for findFirst actions
   */
  export type SeasonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Season to fetch.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seasons.
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seasons.
     * 
    **/
    distinct?: Enumerable<SeasonScalarFieldEnum>
  }

  /**
   * Season: findFirst
   */
  export interface SeasonFindFirstArgs extends SeasonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Season findMany
   */
  export type SeasonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter, which Seasons to fetch.
     * 
    **/
    where?: SeasonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seasons to fetch.
     * 
    **/
    orderBy?: Enumerable<SeasonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seasons.
     * 
    **/
    cursor?: SeasonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seasons from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seasons.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SeasonScalarFieldEnum>
  }


  /**
   * Season create
   */
  export type SeasonCreateArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * The data needed to create a Season.
     * 
    **/
    data: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
  }


  /**
   * Season createMany
   */
  export type SeasonCreateManyArgs = {
    /**
     * The data used to create many Seasons.
     * 
    **/
    data: Enumerable<SeasonCreateManyInput>
  }


  /**
   * Season update
   */
  export type SeasonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * The data needed to update a Season.
     * 
    **/
    data: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
    /**
     * Choose, which Season to update.
     * 
    **/
    where: SeasonWhereUniqueInput
  }


  /**
   * Season updateMany
   */
  export type SeasonUpdateManyArgs = {
    /**
     * The data used to update Seasons.
     * 
    **/
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyInput>
    /**
     * Filter which Seasons to update
     * 
    **/
    where?: SeasonWhereInput
  }


  /**
   * Season upsert
   */
  export type SeasonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * The filter to search for the Season to update in case it exists.
     * 
    **/
    where: SeasonWhereUniqueInput
    /**
     * In case the Season found by the `where` argument doesn't exist, create a new Season with this data.
     * 
    **/
    create: XOR<SeasonCreateInput, SeasonUncheckedCreateInput>
    /**
     * In case the Season was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SeasonUpdateInput, SeasonUncheckedUpdateInput>
  }


  /**
   * Season delete
   */
  export type SeasonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
    /**
     * Filter which Season to delete.
     * 
    **/
    where: SeasonWhereUniqueInput
  }


  /**
   * Season deleteMany
   */
  export type SeasonDeleteManyArgs = {
    /**
     * Filter which Seasons to delete
     * 
    **/
    where?: SeasonWhereInput
  }


  /**
   * Season findRaw
   */
  export type SeasonFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Season aggregateRaw
   */
  export type SeasonAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Season: findUniqueOrThrow
   */
  export type SeasonFindUniqueOrThrowArgs = SeasonFindUniqueArgsBase
      

  /**
   * Season: findFirstOrThrow
   */
  export type SeasonFindFirstOrThrowArgs = SeasonFindFirstArgsBase
      

  /**
   * Season without action
   */
  export type SeasonArgs = {
    /**
     * Select specific fields to fetch from the Season
     * 
    **/
    select?: SeasonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeasonInclude | null
  }



  /**
   * Model Review
   */


  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    kpMovieId: number | null
    reviewDislikes: number | null
    reviewLikes: number | null
    userRating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    kpMovieId: number | null
    reviewDislikes: number | null
    reviewLikes: number | null
    userRating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    kpMovieId: number | null
    author: string | null
    review: string | null
    title: string | null
    reviewDislikes: number | null
    reviewLikes: number | null
    userRating: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    kpMovieId: number | null
    author: string | null
    review: string | null
    title: string | null
    reviewDislikes: number | null
    reviewLikes: number | null
    userRating: number | null
    date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    kpMovieId: number
    author: number
    review: number
    title: number
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: number
    createdAt: number
    updatedAt: number
    movieId: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    kpMovieId?: true
    reviewDislikes?: true
    reviewLikes?: true
    userRating?: true
  }

  export type ReviewSumAggregateInputType = {
    kpMovieId?: true
    reviewDislikes?: true
    reviewLikes?: true
    userRating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    kpMovieId?: true
    author?: true
    review?: true
    title?: true
    reviewDislikes?: true
    reviewLikes?: true
    userRating?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    kpMovieId?: true
    author?: true
    review?: true
    title?: true
    reviewDislikes?: true
    reviewLikes?: true
    userRating?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    kpMovieId?: true
    author?: true
    review?: true
    title?: true
    reviewDislikes?: true
    reviewLikes?: true
    userRating?: true
    date?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    _all?: true
  }

  export type ReviewAggregateArgs = {
    /**
     * Filter which Review to aggregate.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs = {
    where?: ReviewWhereInput
    orderBy?: Enumerable<ReviewOrderByWithAggregationInput>
    by: Array<ReviewScalarFieldEnum>
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }


  export type ReviewGroupByOutputType = {
    id: string
    kpMovieId: number
    author: string
    review: string
    title: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date
    createdAt: Date
    updatedAt: Date
    movieId: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect = {
    id?: boolean
    kpMovieId?: boolean
    author?: boolean
    review?: boolean
    title?: boolean
    reviewDislikes?: boolean
    reviewLikes?: boolean
    userRating?: boolean
    date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieArgs
    movieId?: boolean
  }

  export type ReviewInclude = {
    movie?: boolean | MovieArgs
  }

  export type ReviewGetPayload<
    S extends boolean | null | undefined | ReviewArgs,
    U = keyof S
      > = S extends true
        ? Review
    : S extends undefined
    ? never
    : S extends ReviewArgs | ReviewFindManyArgs
    ?'include' extends U
    ? Review  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Review ? Review[P] : never
  } 
    : Review
  : Review


  type ReviewCountArgs = Merge<
    Omit<ReviewFindManyArgs, 'select' | 'include'> & {
      select?: ReviewCountAggregateInputType | true
    }
  >

  export interface ReviewDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReviewFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReviewFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Review'> extends True ? CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>> : CheckSelect<T, Prisma__ReviewClient<Review | null, null>, Prisma__ReviewClient<ReviewGetPayload<T> | null, null>>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReviewFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReviewFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Review'> extends True ? CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>> : CheckSelect<T, Prisma__ReviewClient<Review | null, null>, Prisma__ReviewClient<ReviewGetPayload<T> | null, null>>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReviewFindManyArgs>(
      args?: SelectSubset<T, ReviewFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Review>>, PrismaPromise<Array<ReviewGetPayload<T>>>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
    **/
    create<T extends ReviewCreateArgs>(
      args: SelectSubset<T, ReviewCreateArgs>
    ): CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>>

    /**
     * Create many Reviews.
     *     @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     *     @example
     *     // Create many Reviews
     *     const review = await prisma.review.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReviewCreateManyArgs>(
      args?: SelectSubset<T, ReviewCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
    **/
    delete<T extends ReviewDeleteArgs>(
      args: SelectSubset<T, ReviewDeleteArgs>
    ): CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReviewUpdateArgs>(
      args: SelectSubset<T, ReviewUpdateArgs>
    ): CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReviewDeleteManyArgs>(
      args?: SelectSubset<T, ReviewDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReviewUpdateManyArgs>(
      args: SelectSubset<T, ReviewUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
    **/
    upsert<T extends ReviewUpsertArgs>(
      args: SelectSubset<T, ReviewUpsertArgs>
    ): CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>>

    /**
     * Find zero or more Reviews that matches the filter.
     * @param {ReviewFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const review = await prisma.review.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ReviewFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Review.
     * @param {ReviewAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const review = await prisma.review.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ReviewAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Review that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>>

    /**
     * Find the first Review that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ReviewFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ReviewClient<Review>, Prisma__ReviewClient<ReviewGetPayload<T>>>

    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReviewClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Review base type for findUnique actions
   */
  export type ReviewFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     * 
    **/
    where: ReviewWhereUniqueInput
  }

  /**
   * Review: findUnique
   */
  export interface ReviewFindUniqueArgs extends ReviewFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review base type for findFirst actions
   */
  export type ReviewFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Review to fetch.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     * 
    **/
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }

  /**
   * Review: findFirst
   */
  export interface ReviewFindFirstArgs extends ReviewFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter, which Reviews to fetch.
     * 
    **/
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     * 
    **/
    orderBy?: Enumerable<ReviewOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     * 
    **/
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ReviewScalarFieldEnum>
  }


  /**
   * Review create
   */
  export type ReviewCreateArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * The data needed to create a Review.
     * 
    **/
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }


  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs = {
    /**
     * The data used to create many Reviews.
     * 
    **/
    data: Enumerable<ReviewCreateManyInput>
  }


  /**
   * Review update
   */
  export type ReviewUpdateArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * The data needed to update a Review.
     * 
    **/
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     * 
    **/
    where: ReviewWhereUniqueInput
  }


  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs = {
    /**
     * The data used to update Reviews.
     * 
    **/
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     * 
    **/
    where?: ReviewWhereInput
  }


  /**
   * Review upsert
   */
  export type ReviewUpsertArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * The filter to search for the Review to update in case it exists.
     * 
    **/
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     * 
    **/
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }


  /**
   * Review delete
   */
  export type ReviewDeleteArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
    /**
     * Filter which Review to delete.
     * 
    **/
    where: ReviewWhereUniqueInput
  }


  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs = {
    /**
     * Filter which Reviews to delete
     * 
    **/
    where?: ReviewWhereInput
  }


  /**
   * Review findRaw
   */
  export type ReviewFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Review aggregateRaw
   */
  export type ReviewAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Review: findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs = ReviewFindUniqueArgsBase
      

  /**
   * Review: findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs = ReviewFindFirstArgsBase
      

  /**
   * Review without action
   */
  export type ReviewArgs = {
    /**
     * Select specific fields to fetch from the Review
     * 
    **/
    select?: ReviewSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ReviewInclude | null
  }



  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    kpId: number | null
    age: number | null
    countAwards: number | null
    growth: number | null
  }

  export type PersonSumAggregateOutputType = {
    kpId: number | null
    age: number | null
    countAwards: number | null
    growth: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    kpId: number | null
    enName: string | null
    name: string | null
    photo: string | null
    sex: PersonSex | null
    age: number | null
    countAwards: number | null
    growth: number | null
    birthday: Date | null
    death: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    kpId: number | null
    enName: string | null
    name: string | null
    photo: string | null
    sex: PersonSex | null
    age: number | null
    countAwards: number | null
    growth: number | null
    birthday: Date | null
    death: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    kpId: number
    enName: number
    name: number
    photo: number
    sex: number
    birthPlace: number
    deathPlace: number
    age: number
    countAwards: number
    growth: number
    profession: number
    birthday: number
    death: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    kpId?: true
    age?: true
    countAwards?: true
    growth?: true
  }

  export type PersonSumAggregateInputType = {
    kpId?: true
    age?: true
    countAwards?: true
    growth?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    kpId?: true
    enName?: true
    name?: true
    photo?: true
    sex?: true
    age?: true
    countAwards?: true
    growth?: true
    birthday?: true
    death?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    kpId?: true
    enName?: true
    name?: true
    photo?: true
    sex?: true
    age?: true
    countAwards?: true
    growth?: true
    birthday?: true
    death?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    kpId?: true
    enName?: true
    name?: true
    photo?: true
    sex?: true
    birthPlace?: true
    deathPlace?: true
    age?: true
    countAwards?: true
    growth?: true
    profession?: true
    birthday?: true
    death?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which Person to aggregate.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithAggregationInput>
    by: Array<PersonScalarFieldEnum>
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: string
    kpId: number
    enName: string | null
    name: string | null
    photo: string
    sex: PersonSex | null
    birthPlace: string[]
    deathPlace: string[]
    age: number | null
    countAwards: number | null
    growth: number | null
    profession: ProfessionType[]
    birthday: Date | null
    death: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect = {
    id?: boolean
    kpId?: boolean
    enName?: boolean
    name?: boolean
    photo?: boolean
    sex?: boolean
    birthPlace?: boolean
    deathPlace?: boolean
    age?: boolean
    countAwards?: boolean
    growth?: boolean
    profession?: boolean
    spouses?: boolean | PersonSpousesArgs
    birthday?: boolean
    death?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movies?: boolean | MovieOnPersonFindManyArgs
    facts?: boolean | PersonFactFindManyArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonInclude = {
    movies?: boolean | MovieOnPersonFindManyArgs
    facts?: boolean | PersonFactFindManyArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonGetPayload<
    S extends boolean | null | undefined | PersonArgs,
    U = keyof S
      > = S extends true
        ? Person
    : S extends undefined
    ? never
    : S extends PersonArgs | PersonFindManyArgs
    ?'include' extends U
    ? Person  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movies' ? Array < MovieOnPersonGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'facts' ? Array < PersonFactGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'spouses' ? Array < PersonSpousesGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'movies' ? Array < MovieOnPersonGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'facts' ? Array < PersonFactGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Person ? Person[P] : never
  } 
    : Person
  : Person


  type PersonCountArgs = Merge<
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }
  >

  export interface PersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Person'> extends True ? CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>> : CheckSelect<T, Prisma__PersonClient<Person | null, null>, Prisma__PersonClient<PersonGetPayload<T> | null, null>>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Person'> extends True ? CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>> : CheckSelect<T, Prisma__PersonClient<Person | null, null>, Prisma__PersonClient<PersonGetPayload<T> | null, null>>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs>(
      args?: SelectSubset<T, PersonFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Person>>, PrismaPromise<Array<PersonGetPayload<T>>>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs>(
      args: SelectSubset<T, PersonCreateArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs>(
      args?: SelectSubset<T, PersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs>(
      args: SelectSubset<T, PersonDeleteArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs>(
      args: SelectSubset<T, PersonUpdateArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs>(
      args?: SelectSubset<T, PersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs>(
      args: SelectSubset<T, PersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs>(
      args: SelectSubset<T, PersonUpsertArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Find zero or more People that matches the filter.
     * @param {PersonFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const person = await prisma.person.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PersonFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Person.
     * @param {PersonAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const person = await prisma.person.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PersonAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Person that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Find the first Person that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PersonClient<Person>, Prisma__PersonClient<PersonGetPayload<T>>>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    spouses<T extends PersonSpousesArgs = {}>(args?: Subset<T, PersonSpousesArgs>): CheckSelect<T, PrismaPromise<Array<PersonSpouses>| Null>, PrismaPromise<Array<PersonSpousesGetPayload<T>>| Null>>;

    movies<T extends MovieOnPersonFindManyArgs = {}>(args?: Subset<T, MovieOnPersonFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovieOnPerson>| Null>, PrismaPromise<Array<MovieOnPersonGetPayload<T>>| Null>>;

    facts<T extends PersonFactFindManyArgs = {}>(args?: Subset<T, PersonFactFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PersonFact>| Null>, PrismaPromise<Array<PersonFactGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Person base type for findUnique actions
   */
  export type PersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where: PersonWhereUniqueInput
  }

  /**
   * Person: findUnique
   */
  export interface PersonFindUniqueArgs extends PersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person base type for findFirst actions
   */
  export type PersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     * 
    **/
    distinct?: Enumerable<PersonScalarFieldEnum>
  }

  /**
   * Person: findFirst
   */
  export interface PersonFindFirstArgs extends PersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findMany
   */
  export type PersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter, which People to fetch.
     * 
    **/
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     * 
    **/
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person create
   */
  export type PersonCreateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to create a Person.
     * 
    **/
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs = {
    /**
     * The data used to create many People.
     * 
    **/
    data: Enumerable<PersonCreateManyInput>
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The data needed to update a Person.
     * 
    **/
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs = {
    /**
     * The data used to update People.
     * 
    **/
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     * 
    **/
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * The filter to search for the Person to update in case it exists.
     * 
    **/
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     * 
    **/
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
    /**
     * Filter which Person to delete.
     * 
    **/
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs = {
    /**
     * Filter which People to delete
     * 
    **/
    where?: PersonWhereInput
  }


  /**
   * Person findRaw
   */
  export type PersonFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Person aggregateRaw
   */
  export type PersonAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Person: findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs = PersonFindUniqueArgsBase
      

  /**
   * Person: findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs = PersonFindFirstArgsBase
      

  /**
   * Person without action
   */
  export type PersonArgs = {
    /**
     * Select specific fields to fetch from the Person
     * 
    **/
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonInclude | null
  }



  /**
   * Model MovieOnPerson
   */


  export type AggregateMovieOnPerson = {
    _count: MovieOnPersonCountAggregateOutputType | null
    _avg: MovieOnPersonAvgAggregateOutputType | null
    _sum: MovieOnPersonSumAggregateOutputType | null
    _min: MovieOnPersonMinAggregateOutputType | null
    _max: MovieOnPersonMaxAggregateOutputType | null
  }

  export type MovieOnPersonAvgAggregateOutputType = {
    kpId: number | null
    kpMovieId: number | null
  }

  export type MovieOnPersonSumAggregateOutputType = {
    kpId: number | null
    kpMovieId: number | null
  }

  export type MovieOnPersonMinAggregateOutputType = {
    id: string | null
    kpId: number | null
    kpMovieId: number | null
    description: string | null
    assignedAt: Date | null
    updatedAt: Date | null
    movieId: string | null
    personId: string | null
  }

  export type MovieOnPersonMaxAggregateOutputType = {
    id: string | null
    kpId: number | null
    kpMovieId: number | null
    description: string | null
    assignedAt: Date | null
    updatedAt: Date | null
    movieId: string | null
    personId: string | null
  }

  export type MovieOnPersonCountAggregateOutputType = {
    id: number
    kpId: number
    kpMovieId: number
    description: number
    profession: number
    assignedAt: number
    updatedAt: number
    movieId: number
    personId: number
    _all: number
  }


  export type MovieOnPersonAvgAggregateInputType = {
    kpId?: true
    kpMovieId?: true
  }

  export type MovieOnPersonSumAggregateInputType = {
    kpId?: true
    kpMovieId?: true
  }

  export type MovieOnPersonMinAggregateInputType = {
    id?: true
    kpId?: true
    kpMovieId?: true
    description?: true
    assignedAt?: true
    updatedAt?: true
    movieId?: true
    personId?: true
  }

  export type MovieOnPersonMaxAggregateInputType = {
    id?: true
    kpId?: true
    kpMovieId?: true
    description?: true
    assignedAt?: true
    updatedAt?: true
    movieId?: true
    personId?: true
  }

  export type MovieOnPersonCountAggregateInputType = {
    id?: true
    kpId?: true
    kpMovieId?: true
    description?: true
    profession?: true
    assignedAt?: true
    updatedAt?: true
    movieId?: true
    personId?: true
    _all?: true
  }

  export type MovieOnPersonAggregateArgs = {
    /**
     * Filter which MovieOnPerson to aggregate.
     * 
    **/
    where?: MovieOnPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieOnPeople to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOnPersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieOnPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieOnPeople from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieOnPeople.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieOnPeople
    **/
    _count?: true | MovieOnPersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieOnPersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieOnPersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieOnPersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieOnPersonMaxAggregateInputType
  }

  export type GetMovieOnPersonAggregateType<T extends MovieOnPersonAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieOnPerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieOnPerson[P]>
      : GetScalarType<T[P], AggregateMovieOnPerson[P]>
  }




  export type MovieOnPersonGroupByArgs = {
    where?: MovieOnPersonWhereInput
    orderBy?: Enumerable<MovieOnPersonOrderByWithAggregationInput>
    by: Array<MovieOnPersonScalarFieldEnum>
    having?: MovieOnPersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieOnPersonCountAggregateInputType | true
    _avg?: MovieOnPersonAvgAggregateInputType
    _sum?: MovieOnPersonSumAggregateInputType
    _min?: MovieOnPersonMinAggregateInputType
    _max?: MovieOnPersonMaxAggregateInputType
  }


  export type MovieOnPersonGroupByOutputType = {
    id: string
    kpId: number
    kpMovieId: number
    description: string
    profession: ProfessionType[]
    assignedAt: Date
    updatedAt: Date
    movieId: string
    personId: string
    _count: MovieOnPersonCountAggregateOutputType | null
    _avg: MovieOnPersonAvgAggregateOutputType | null
    _sum: MovieOnPersonSumAggregateOutputType | null
    _min: MovieOnPersonMinAggregateOutputType | null
    _max: MovieOnPersonMaxAggregateOutputType | null
  }

  type GetMovieOnPersonGroupByPayload<T extends MovieOnPersonGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieOnPersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieOnPersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieOnPersonGroupByOutputType[P]>
            : GetScalarType<T[P], MovieOnPersonGroupByOutputType[P]>
        }
      >
    >


  export type MovieOnPersonSelect = {
    id?: boolean
    kpId?: boolean
    kpMovieId?: boolean
    description?: boolean
    profession?: boolean
    assignedAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieArgs
    movieId?: boolean
    person?: boolean | PersonArgs
    personId?: boolean
  }

  export type MovieOnPersonInclude = {
    movie?: boolean | MovieArgs
    person?: boolean | PersonArgs
  }

  export type MovieOnPersonGetPayload<
    S extends boolean | null | undefined | MovieOnPersonArgs,
    U = keyof S
      > = S extends true
        ? MovieOnPerson
    : S extends undefined
    ? never
    : S extends MovieOnPersonArgs | MovieOnPersonFindManyArgs
    ?'include' extends U
    ? MovieOnPerson  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'person' ? PersonGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'person' ? PersonGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof MovieOnPerson ? MovieOnPerson[P] : never
  } 
    : MovieOnPerson
  : MovieOnPerson


  type MovieOnPersonCountArgs = Merge<
    Omit<MovieOnPersonFindManyArgs, 'select' | 'include'> & {
      select?: MovieOnPersonCountAggregateInputType | true
    }
  >

  export interface MovieOnPersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MovieOnPerson that matches the filter.
     * @param {MovieOnPersonFindUniqueArgs} args - Arguments to find a MovieOnPerson
     * @example
     * // Get one MovieOnPerson
     * const movieOnPerson = await prisma.movieOnPerson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieOnPersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieOnPersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MovieOnPerson'> extends True ? CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>> : CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson | null, null>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T> | null, null>>

    /**
     * Find the first MovieOnPerson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonFindFirstArgs} args - Arguments to find a MovieOnPerson
     * @example
     * // Get one MovieOnPerson
     * const movieOnPerson = await prisma.movieOnPerson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieOnPersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieOnPersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MovieOnPerson'> extends True ? CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>> : CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson | null, null>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T> | null, null>>

    /**
     * Find zero or more MovieOnPeople that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieOnPeople
     * const movieOnPeople = await prisma.movieOnPerson.findMany()
     * 
     * // Get first 10 MovieOnPeople
     * const movieOnPeople = await prisma.movieOnPerson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieOnPersonWithIdOnly = await prisma.movieOnPerson.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieOnPersonFindManyArgs>(
      args?: SelectSubset<T, MovieOnPersonFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MovieOnPerson>>, PrismaPromise<Array<MovieOnPersonGetPayload<T>>>>

    /**
     * Create a MovieOnPerson.
     * @param {MovieOnPersonCreateArgs} args - Arguments to create a MovieOnPerson.
     * @example
     * // Create one MovieOnPerson
     * const MovieOnPerson = await prisma.movieOnPerson.create({
     *   data: {
     *     // ... data to create a MovieOnPerson
     *   }
     * })
     * 
    **/
    create<T extends MovieOnPersonCreateArgs>(
      args: SelectSubset<T, MovieOnPersonCreateArgs>
    ): CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>>

    /**
     * Create many MovieOnPeople.
     *     @param {MovieOnPersonCreateManyArgs} args - Arguments to create many MovieOnPeople.
     *     @example
     *     // Create many MovieOnPeople
     *     const movieOnPerson = await prisma.movieOnPerson.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieOnPersonCreateManyArgs>(
      args?: SelectSubset<T, MovieOnPersonCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MovieOnPerson.
     * @param {MovieOnPersonDeleteArgs} args - Arguments to delete one MovieOnPerson.
     * @example
     * // Delete one MovieOnPerson
     * const MovieOnPerson = await prisma.movieOnPerson.delete({
     *   where: {
     *     // ... filter to delete one MovieOnPerson
     *   }
     * })
     * 
    **/
    delete<T extends MovieOnPersonDeleteArgs>(
      args: SelectSubset<T, MovieOnPersonDeleteArgs>
    ): CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>>

    /**
     * Update one MovieOnPerson.
     * @param {MovieOnPersonUpdateArgs} args - Arguments to update one MovieOnPerson.
     * @example
     * // Update one MovieOnPerson
     * const movieOnPerson = await prisma.movieOnPerson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieOnPersonUpdateArgs>(
      args: SelectSubset<T, MovieOnPersonUpdateArgs>
    ): CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>>

    /**
     * Delete zero or more MovieOnPeople.
     * @param {MovieOnPersonDeleteManyArgs} args - Arguments to filter MovieOnPeople to delete.
     * @example
     * // Delete a few MovieOnPeople
     * const { count } = await prisma.movieOnPerson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieOnPersonDeleteManyArgs>(
      args?: SelectSubset<T, MovieOnPersonDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieOnPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieOnPeople
     * const movieOnPerson = await prisma.movieOnPerson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieOnPersonUpdateManyArgs>(
      args: SelectSubset<T, MovieOnPersonUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieOnPerson.
     * @param {MovieOnPersonUpsertArgs} args - Arguments to update or create a MovieOnPerson.
     * @example
     * // Update or create a MovieOnPerson
     * const movieOnPerson = await prisma.movieOnPerson.upsert({
     *   create: {
     *     // ... data to create a MovieOnPerson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieOnPerson we want to update
     *   }
     * })
    **/
    upsert<T extends MovieOnPersonUpsertArgs>(
      args: SelectSubset<T, MovieOnPersonUpsertArgs>
    ): CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>>

    /**
     * Find zero or more MovieOnPeople that matches the filter.
     * @param {MovieOnPersonFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movieOnPerson = await prisma.movieOnPerson.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MovieOnPersonFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MovieOnPerson.
     * @param {MovieOnPersonAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movieOnPerson = await prisma.movieOnPerson.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MovieOnPersonAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one MovieOnPerson that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovieOnPersonFindUniqueOrThrowArgs} args - Arguments to find a MovieOnPerson
     * @example
     * // Get one MovieOnPerson
     * const movieOnPerson = await prisma.movieOnPerson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieOnPersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovieOnPersonFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>>

    /**
     * Find the first MovieOnPerson that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonFindFirstOrThrowArgs} args - Arguments to find a MovieOnPerson
     * @example
     * // Get one MovieOnPerson
     * const movieOnPerson = await prisma.movieOnPerson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieOnPersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieOnPersonFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieOnPersonClient<MovieOnPerson>, Prisma__MovieOnPersonClient<MovieOnPersonGetPayload<T>>>

    /**
     * Count the number of MovieOnPeople.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonCountArgs} args - Arguments to filter MovieOnPeople to count.
     * @example
     * // Count the number of MovieOnPeople
     * const count = await prisma.movieOnPerson.count({
     *   where: {
     *     // ... the filter for the MovieOnPeople we want to count
     *   }
     * })
    **/
    count<T extends MovieOnPersonCountArgs>(
      args?: Subset<T, MovieOnPersonCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieOnPersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieOnPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieOnPersonAggregateArgs>(args: Subset<T, MovieOnPersonAggregateArgs>): PrismaPromise<GetMovieOnPersonAggregateType<T>>

    /**
     * Group by MovieOnPerson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieOnPersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieOnPersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieOnPersonGroupByArgs['orderBy'] }
        : { orderBy?: MovieOnPersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieOnPersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieOnPersonGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieOnPerson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieOnPersonClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    person<T extends PersonArgs = {}>(args?: Subset<T, PersonArgs>): CheckSelect<T, Prisma__PersonClient<Person | Null>, Prisma__PersonClient<PersonGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieOnPerson base type for findUnique actions
   */
  export type MovieOnPersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * Filter, which MovieOnPerson to fetch.
     * 
    **/
    where: MovieOnPersonWhereUniqueInput
  }

  /**
   * MovieOnPerson: findUnique
   */
  export interface MovieOnPersonFindUniqueArgs extends MovieOnPersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovieOnPerson base type for findFirst actions
   */
  export type MovieOnPersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * Filter, which MovieOnPerson to fetch.
     * 
    **/
    where?: MovieOnPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieOnPeople to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOnPersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieOnPeople.
     * 
    **/
    cursor?: MovieOnPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieOnPeople from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieOnPeople.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieOnPeople.
     * 
    **/
    distinct?: Enumerable<MovieOnPersonScalarFieldEnum>
  }

  /**
   * MovieOnPerson: findFirst
   */
  export interface MovieOnPersonFindFirstArgs extends MovieOnPersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovieOnPerson findMany
   */
  export type MovieOnPersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * Filter, which MovieOnPeople to fetch.
     * 
    **/
    where?: MovieOnPersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieOnPeople to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOnPersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieOnPeople.
     * 
    **/
    cursor?: MovieOnPersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieOnPeople from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieOnPeople.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieOnPersonScalarFieldEnum>
  }


  /**
   * MovieOnPerson create
   */
  export type MovieOnPersonCreateArgs = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * The data needed to create a MovieOnPerson.
     * 
    **/
    data: XOR<MovieOnPersonCreateInput, MovieOnPersonUncheckedCreateInput>
  }


  /**
   * MovieOnPerson createMany
   */
  export type MovieOnPersonCreateManyArgs = {
    /**
     * The data used to create many MovieOnPeople.
     * 
    **/
    data: Enumerable<MovieOnPersonCreateManyInput>
  }


  /**
   * MovieOnPerson update
   */
  export type MovieOnPersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * The data needed to update a MovieOnPerson.
     * 
    **/
    data: XOR<MovieOnPersonUpdateInput, MovieOnPersonUncheckedUpdateInput>
    /**
     * Choose, which MovieOnPerson to update.
     * 
    **/
    where: MovieOnPersonWhereUniqueInput
  }


  /**
   * MovieOnPerson updateMany
   */
  export type MovieOnPersonUpdateManyArgs = {
    /**
     * The data used to update MovieOnPeople.
     * 
    **/
    data: XOR<MovieOnPersonUpdateManyMutationInput, MovieOnPersonUncheckedUpdateManyInput>
    /**
     * Filter which MovieOnPeople to update
     * 
    **/
    where?: MovieOnPersonWhereInput
  }


  /**
   * MovieOnPerson upsert
   */
  export type MovieOnPersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * The filter to search for the MovieOnPerson to update in case it exists.
     * 
    **/
    where: MovieOnPersonWhereUniqueInput
    /**
     * In case the MovieOnPerson found by the `where` argument doesn't exist, create a new MovieOnPerson with this data.
     * 
    **/
    create: XOR<MovieOnPersonCreateInput, MovieOnPersonUncheckedCreateInput>
    /**
     * In case the MovieOnPerson was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieOnPersonUpdateInput, MovieOnPersonUncheckedUpdateInput>
  }


  /**
   * MovieOnPerson delete
   */
  export type MovieOnPersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
    /**
     * Filter which MovieOnPerson to delete.
     * 
    **/
    where: MovieOnPersonWhereUniqueInput
  }


  /**
   * MovieOnPerson deleteMany
   */
  export type MovieOnPersonDeleteManyArgs = {
    /**
     * Filter which MovieOnPeople to delete
     * 
    **/
    where?: MovieOnPersonWhereInput
  }


  /**
   * MovieOnPerson findRaw
   */
  export type MovieOnPersonFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * MovieOnPerson aggregateRaw
   */
  export type MovieOnPersonAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * MovieOnPerson: findUniqueOrThrow
   */
  export type MovieOnPersonFindUniqueOrThrowArgs = MovieOnPersonFindUniqueArgsBase
      

  /**
   * MovieOnPerson: findFirstOrThrow
   */
  export type MovieOnPersonFindFirstOrThrowArgs = MovieOnPersonFindFirstArgsBase
      

  /**
   * MovieOnPerson without action
   */
  export type MovieOnPersonArgs = {
    /**
     * Select specific fields to fetch from the MovieOnPerson
     * 
    **/
    select?: MovieOnPersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieOnPersonInclude | null
  }



  /**
   * Model PersonFact
   */


  export type AggregatePersonFact = {
    _count: PersonFactCountAggregateOutputType | null
    _avg: PersonFactAvgAggregateOutputType | null
    _sum: PersonFactSumAggregateOutputType | null
    _min: PersonFactMinAggregateOutputType | null
    _max: PersonFactMaxAggregateOutputType | null
  }

  export type PersonFactAvgAggregateOutputType = {
    personKpId: number | null
  }

  export type PersonFactSumAggregateOutputType = {
    personKpId: number | null
  }

  export type PersonFactMinAggregateOutputType = {
    id: string | null
    personKpId: number | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    personId: string | null
  }

  export type PersonFactMaxAggregateOutputType = {
    id: string | null
    personKpId: number | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    personId: string | null
  }

  export type PersonFactCountAggregateOutputType = {
    id: number
    personKpId: number
    value: number
    createdAt: number
    updatedAt: number
    personId: number
    _all: number
  }


  export type PersonFactAvgAggregateInputType = {
    personKpId?: true
  }

  export type PersonFactSumAggregateInputType = {
    personKpId?: true
  }

  export type PersonFactMinAggregateInputType = {
    id?: true
    personKpId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    personId?: true
  }

  export type PersonFactMaxAggregateInputType = {
    id?: true
    personKpId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    personId?: true
  }

  export type PersonFactCountAggregateInputType = {
    id?: true
    personKpId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    personId?: true
    _all?: true
  }

  export type PersonFactAggregateArgs = {
    /**
     * Filter which PersonFact to aggregate.
     * 
    **/
    where?: PersonFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonFacts to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonFactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PersonFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonFacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonFacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonFacts
    **/
    _count?: true | PersonFactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonFactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonFactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonFactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonFactMaxAggregateInputType
  }

  export type GetPersonFactAggregateType<T extends PersonFactAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonFact[P]>
      : GetScalarType<T[P], AggregatePersonFact[P]>
  }




  export type PersonFactGroupByArgs = {
    where?: PersonFactWhereInput
    orderBy?: Enumerable<PersonFactOrderByWithAggregationInput>
    by: Array<PersonFactScalarFieldEnum>
    having?: PersonFactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonFactCountAggregateInputType | true
    _avg?: PersonFactAvgAggregateInputType
    _sum?: PersonFactSumAggregateInputType
    _min?: PersonFactMinAggregateInputType
    _max?: PersonFactMaxAggregateInputType
  }


  export type PersonFactGroupByOutputType = {
    id: string
    personKpId: number
    value: string
    createdAt: Date
    updatedAt: Date
    personId: string
    _count: PersonFactCountAggregateOutputType | null
    _avg: PersonFactAvgAggregateOutputType | null
    _sum: PersonFactSumAggregateOutputType | null
    _min: PersonFactMinAggregateOutputType | null
    _max: PersonFactMaxAggregateOutputType | null
  }

  type GetPersonFactGroupByPayload<T extends PersonFactGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PersonFactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonFactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonFactGroupByOutputType[P]>
            : GetScalarType<T[P], PersonFactGroupByOutputType[P]>
        }
      >
    >


  export type PersonFactSelect = {
    id?: boolean
    personKpId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personId?: boolean
    person?: boolean | PersonArgs
  }

  export type PersonFactInclude = {
    person?: boolean | PersonArgs
  }

  export type PersonFactGetPayload<
    S extends boolean | null | undefined | PersonFactArgs,
    U = keyof S
      > = S extends true
        ? PersonFact
    : S extends undefined
    ? never
    : S extends PersonFactArgs | PersonFactFindManyArgs
    ?'include' extends U
    ? PersonFact  & {
    [P in TrueKeys<S['include']>]:
        P extends 'person' ? PersonGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'person' ? PersonGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof PersonFact ? PersonFact[P] : never
  } 
    : PersonFact
  : PersonFact


  type PersonFactCountArgs = Merge<
    Omit<PersonFactFindManyArgs, 'select' | 'include'> & {
      select?: PersonFactCountAggregateInputType | true
    }
  >

  export interface PersonFactDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one PersonFact that matches the filter.
     * @param {PersonFactFindUniqueArgs} args - Arguments to find a PersonFact
     * @example
     * // Get one PersonFact
     * const personFact = await prisma.personFact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFactFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFactFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PersonFact'> extends True ? CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>> : CheckSelect<T, Prisma__PersonFactClient<PersonFact | null, null>, Prisma__PersonFactClient<PersonFactGetPayload<T> | null, null>>

    /**
     * Find the first PersonFact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactFindFirstArgs} args - Arguments to find a PersonFact
     * @example
     * // Get one PersonFact
     * const personFact = await prisma.personFact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFactFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFactFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PersonFact'> extends True ? CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>> : CheckSelect<T, Prisma__PersonFactClient<PersonFact | null, null>, Prisma__PersonFactClient<PersonFactGetPayload<T> | null, null>>

    /**
     * Find zero or more PersonFacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonFacts
     * const personFacts = await prisma.personFact.findMany()
     * 
     * // Get first 10 PersonFacts
     * const personFacts = await prisma.personFact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personFactWithIdOnly = await prisma.personFact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFactFindManyArgs>(
      args?: SelectSubset<T, PersonFactFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PersonFact>>, PrismaPromise<Array<PersonFactGetPayload<T>>>>

    /**
     * Create a PersonFact.
     * @param {PersonFactCreateArgs} args - Arguments to create a PersonFact.
     * @example
     * // Create one PersonFact
     * const PersonFact = await prisma.personFact.create({
     *   data: {
     *     // ... data to create a PersonFact
     *   }
     * })
     * 
    **/
    create<T extends PersonFactCreateArgs>(
      args: SelectSubset<T, PersonFactCreateArgs>
    ): CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>>

    /**
     * Create many PersonFacts.
     *     @param {PersonFactCreateManyArgs} args - Arguments to create many PersonFacts.
     *     @example
     *     // Create many PersonFacts
     *     const personFact = await prisma.personFact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonFactCreateManyArgs>(
      args?: SelectSubset<T, PersonFactCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PersonFact.
     * @param {PersonFactDeleteArgs} args - Arguments to delete one PersonFact.
     * @example
     * // Delete one PersonFact
     * const PersonFact = await prisma.personFact.delete({
     *   where: {
     *     // ... filter to delete one PersonFact
     *   }
     * })
     * 
    **/
    delete<T extends PersonFactDeleteArgs>(
      args: SelectSubset<T, PersonFactDeleteArgs>
    ): CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>>

    /**
     * Update one PersonFact.
     * @param {PersonFactUpdateArgs} args - Arguments to update one PersonFact.
     * @example
     * // Update one PersonFact
     * const personFact = await prisma.personFact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonFactUpdateArgs>(
      args: SelectSubset<T, PersonFactUpdateArgs>
    ): CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>>

    /**
     * Delete zero or more PersonFacts.
     * @param {PersonFactDeleteManyArgs} args - Arguments to filter PersonFacts to delete.
     * @example
     * // Delete a few PersonFacts
     * const { count } = await prisma.personFact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonFactDeleteManyArgs>(
      args?: SelectSubset<T, PersonFactDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonFacts
     * const personFact = await prisma.personFact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonFactUpdateManyArgs>(
      args: SelectSubset<T, PersonFactUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PersonFact.
     * @param {PersonFactUpsertArgs} args - Arguments to update or create a PersonFact.
     * @example
     * // Update or create a PersonFact
     * const personFact = await prisma.personFact.upsert({
     *   create: {
     *     // ... data to create a PersonFact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonFact we want to update
     *   }
     * })
    **/
    upsert<T extends PersonFactUpsertArgs>(
      args: SelectSubset<T, PersonFactUpsertArgs>
    ): CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>>

    /**
     * Find zero or more PersonFacts that matches the filter.
     * @param {PersonFactFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const personFact = await prisma.personFact.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PersonFactFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PersonFact.
     * @param {PersonFactAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const personFact = await prisma.personFact.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PersonFactAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one PersonFact that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PersonFactFindUniqueOrThrowArgs} args - Arguments to find a PersonFact
     * @example
     * // Get one PersonFact
     * const personFact = await prisma.personFact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFactFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PersonFactFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>>

    /**
     * Find the first PersonFact that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactFindFirstOrThrowArgs} args - Arguments to find a PersonFact
     * @example
     * // Get one PersonFact
     * const personFact = await prisma.personFact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFactFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PersonFactFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PersonFactClient<PersonFact>, Prisma__PersonFactClient<PersonFactGetPayload<T>>>

    /**
     * Count the number of PersonFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactCountArgs} args - Arguments to filter PersonFacts to count.
     * @example
     * // Count the number of PersonFacts
     * const count = await prisma.personFact.count({
     *   where: {
     *     // ... the filter for the PersonFacts we want to count
     *   }
     * })
    **/
    count<T extends PersonFactCountArgs>(
      args?: Subset<T, PersonFactCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonFactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonFactAggregateArgs>(args: Subset<T, PersonFactAggregateArgs>): PrismaPromise<GetPersonFactAggregateType<T>>

    /**
     * Group by PersonFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonFactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonFactGroupByArgs['orderBy'] }
        : { orderBy?: PersonFactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonFactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonFactGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonFact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonFactClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    person<T extends PersonArgs = {}>(args?: Subset<T, PersonArgs>): CheckSelect<T, Prisma__PersonClient<Person | Null>, Prisma__PersonClient<PersonGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PersonFact base type for findUnique actions
   */
  export type PersonFactFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * Filter, which PersonFact to fetch.
     * 
    **/
    where: PersonFactWhereUniqueInput
  }

  /**
   * PersonFact: findUnique
   */
  export interface PersonFactFindUniqueArgs extends PersonFactFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PersonFact base type for findFirst actions
   */
  export type PersonFactFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * Filter, which PersonFact to fetch.
     * 
    **/
    where?: PersonFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonFacts to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonFactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonFacts.
     * 
    **/
    cursor?: PersonFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonFacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonFacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonFacts.
     * 
    **/
    distinct?: Enumerable<PersonFactScalarFieldEnum>
  }

  /**
   * PersonFact: findFirst
   */
  export interface PersonFactFindFirstArgs extends PersonFactFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PersonFact findMany
   */
  export type PersonFactFindManyArgs = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * Filter, which PersonFacts to fetch.
     * 
    **/
    where?: PersonFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonFacts to fetch.
     * 
    **/
    orderBy?: Enumerable<PersonFactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonFacts.
     * 
    **/
    cursor?: PersonFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonFacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonFacts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PersonFactScalarFieldEnum>
  }


  /**
   * PersonFact create
   */
  export type PersonFactCreateArgs = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * The data needed to create a PersonFact.
     * 
    **/
    data: XOR<PersonFactCreateInput, PersonFactUncheckedCreateInput>
  }


  /**
   * PersonFact createMany
   */
  export type PersonFactCreateManyArgs = {
    /**
     * The data used to create many PersonFacts.
     * 
    **/
    data: Enumerable<PersonFactCreateManyInput>
  }


  /**
   * PersonFact update
   */
  export type PersonFactUpdateArgs = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * The data needed to update a PersonFact.
     * 
    **/
    data: XOR<PersonFactUpdateInput, PersonFactUncheckedUpdateInput>
    /**
     * Choose, which PersonFact to update.
     * 
    **/
    where: PersonFactWhereUniqueInput
  }


  /**
   * PersonFact updateMany
   */
  export type PersonFactUpdateManyArgs = {
    /**
     * The data used to update PersonFacts.
     * 
    **/
    data: XOR<PersonFactUpdateManyMutationInput, PersonFactUncheckedUpdateManyInput>
    /**
     * Filter which PersonFacts to update
     * 
    **/
    where?: PersonFactWhereInput
  }


  /**
   * PersonFact upsert
   */
  export type PersonFactUpsertArgs = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * The filter to search for the PersonFact to update in case it exists.
     * 
    **/
    where: PersonFactWhereUniqueInput
    /**
     * In case the PersonFact found by the `where` argument doesn't exist, create a new PersonFact with this data.
     * 
    **/
    create: XOR<PersonFactCreateInput, PersonFactUncheckedCreateInput>
    /**
     * In case the PersonFact was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PersonFactUpdateInput, PersonFactUncheckedUpdateInput>
  }


  /**
   * PersonFact delete
   */
  export type PersonFactDeleteArgs = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
    /**
     * Filter which PersonFact to delete.
     * 
    **/
    where: PersonFactWhereUniqueInput
  }


  /**
   * PersonFact deleteMany
   */
  export type PersonFactDeleteManyArgs = {
    /**
     * Filter which PersonFacts to delete
     * 
    **/
    where?: PersonFactWhereInput
  }


  /**
   * PersonFact findRaw
   */
  export type PersonFactFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * PersonFact aggregateRaw
   */
  export type PersonFactAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * PersonFact: findUniqueOrThrow
   */
  export type PersonFactFindUniqueOrThrowArgs = PersonFactFindUniqueArgsBase
      

  /**
   * PersonFact: findFirstOrThrow
   */
  export type PersonFactFindFirstOrThrowArgs = PersonFactFindFirstArgsBase
      

  /**
   * PersonFact without action
   */
  export type PersonFactArgs = {
    /**
     * Select specific fields to fetch from the PersonFact
     * 
    **/
    select?: PersonFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PersonFactInclude | null
  }



  /**
   * Model MovieFact
   */


  export type AggregateMovieFact = {
    _count: MovieFactCountAggregateOutputType | null
    _avg: MovieFactAvgAggregateOutputType | null
    _sum: MovieFactSumAggregateOutputType | null
    _min: MovieFactMinAggregateOutputType | null
    _max: MovieFactMaxAggregateOutputType | null
  }

  export type MovieFactAvgAggregateOutputType = {
    movieKpId: number | null
  }

  export type MovieFactSumAggregateOutputType = {
    movieKpId: number | null
  }

  export type MovieFactMinAggregateOutputType = {
    id: string | null
    movieKpId: number | null
    spoiler: boolean | null
    type: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type MovieFactMaxAggregateOutputType = {
    id: string | null
    movieKpId: number | null
    spoiler: boolean | null
    type: string | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type MovieFactCountAggregateOutputType = {
    id: number
    movieKpId: number
    spoiler: number
    type: number
    value: number
    createdAt: number
    updatedAt: number
    movieId: number
    _all: number
  }


  export type MovieFactAvgAggregateInputType = {
    movieKpId?: true
  }

  export type MovieFactSumAggregateInputType = {
    movieKpId?: true
  }

  export type MovieFactMinAggregateInputType = {
    id?: true
    movieKpId?: true
    spoiler?: true
    type?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type MovieFactMaxAggregateInputType = {
    id?: true
    movieKpId?: true
    spoiler?: true
    type?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type MovieFactCountAggregateInputType = {
    id?: true
    movieKpId?: true
    spoiler?: true
    type?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    _all?: true
  }

  export type MovieFactAggregateArgs = {
    /**
     * Filter which MovieFact to aggregate.
     * 
    **/
    where?: MovieFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieFacts to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieFactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieFacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieFacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieFacts
    **/
    _count?: true | MovieFactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieFactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieFactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieFactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieFactMaxAggregateInputType
  }

  export type GetMovieFactAggregateType<T extends MovieFactAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieFact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieFact[P]>
      : GetScalarType<T[P], AggregateMovieFact[P]>
  }




  export type MovieFactGroupByArgs = {
    where?: MovieFactWhereInput
    orderBy?: Enumerable<MovieFactOrderByWithAggregationInput>
    by: Array<MovieFactScalarFieldEnum>
    having?: MovieFactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieFactCountAggregateInputType | true
    _avg?: MovieFactAvgAggregateInputType
    _sum?: MovieFactSumAggregateInputType
    _min?: MovieFactMinAggregateInputType
    _max?: MovieFactMaxAggregateInputType
  }


  export type MovieFactGroupByOutputType = {
    id: string
    movieKpId: number
    spoiler: boolean | null
    type: string | null
    value: string
    createdAt: Date
    updatedAt: Date
    movieId: string
    _count: MovieFactCountAggregateOutputType | null
    _avg: MovieFactAvgAggregateOutputType | null
    _sum: MovieFactSumAggregateOutputType | null
    _min: MovieFactMinAggregateOutputType | null
    _max: MovieFactMaxAggregateOutputType | null
  }

  type GetMovieFactGroupByPayload<T extends MovieFactGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieFactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieFactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieFactGroupByOutputType[P]>
            : GetScalarType<T[P], MovieFactGroupByOutputType[P]>
        }
      >
    >


  export type MovieFactSelect = {
    id?: boolean
    movieKpId?: boolean
    spoiler?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    movie?: boolean | MovieArgs
    movieId?: boolean
  }

  export type MovieFactInclude = {
    movie?: boolean | MovieArgs
  }

  export type MovieFactGetPayload<
    S extends boolean | null | undefined | MovieFactArgs,
    U = keyof S
      > = S extends true
        ? MovieFact
    : S extends undefined
    ? never
    : S extends MovieFactArgs | MovieFactFindManyArgs
    ?'include' extends U
    ? MovieFact  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movie' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof MovieFact ? MovieFact[P] : never
  } 
    : MovieFact
  : MovieFact


  type MovieFactCountArgs = Merge<
    Omit<MovieFactFindManyArgs, 'select' | 'include'> & {
      select?: MovieFactCountAggregateInputType | true
    }
  >

  export interface MovieFactDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MovieFact that matches the filter.
     * @param {MovieFactFindUniqueArgs} args - Arguments to find a MovieFact
     * @example
     * // Get one MovieFact
     * const movieFact = await prisma.movieFact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFactFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFactFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MovieFact'> extends True ? CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>> : CheckSelect<T, Prisma__MovieFactClient<MovieFact | null, null>, Prisma__MovieFactClient<MovieFactGetPayload<T> | null, null>>

    /**
     * Find the first MovieFact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactFindFirstArgs} args - Arguments to find a MovieFact
     * @example
     * // Get one MovieFact
     * const movieFact = await prisma.movieFact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFactFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFactFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MovieFact'> extends True ? CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>> : CheckSelect<T, Prisma__MovieFactClient<MovieFact | null, null>, Prisma__MovieFactClient<MovieFactGetPayload<T> | null, null>>

    /**
     * Find zero or more MovieFacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieFacts
     * const movieFacts = await prisma.movieFact.findMany()
     * 
     * // Get first 10 MovieFacts
     * const movieFacts = await prisma.movieFact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieFactWithIdOnly = await prisma.movieFact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieFactFindManyArgs>(
      args?: SelectSubset<T, MovieFactFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MovieFact>>, PrismaPromise<Array<MovieFactGetPayload<T>>>>

    /**
     * Create a MovieFact.
     * @param {MovieFactCreateArgs} args - Arguments to create a MovieFact.
     * @example
     * // Create one MovieFact
     * const MovieFact = await prisma.movieFact.create({
     *   data: {
     *     // ... data to create a MovieFact
     *   }
     * })
     * 
    **/
    create<T extends MovieFactCreateArgs>(
      args: SelectSubset<T, MovieFactCreateArgs>
    ): CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>>

    /**
     * Create many MovieFacts.
     *     @param {MovieFactCreateManyArgs} args - Arguments to create many MovieFacts.
     *     @example
     *     // Create many MovieFacts
     *     const movieFact = await prisma.movieFact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieFactCreateManyArgs>(
      args?: SelectSubset<T, MovieFactCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MovieFact.
     * @param {MovieFactDeleteArgs} args - Arguments to delete one MovieFact.
     * @example
     * // Delete one MovieFact
     * const MovieFact = await prisma.movieFact.delete({
     *   where: {
     *     // ... filter to delete one MovieFact
     *   }
     * })
     * 
    **/
    delete<T extends MovieFactDeleteArgs>(
      args: SelectSubset<T, MovieFactDeleteArgs>
    ): CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>>

    /**
     * Update one MovieFact.
     * @param {MovieFactUpdateArgs} args - Arguments to update one MovieFact.
     * @example
     * // Update one MovieFact
     * const movieFact = await prisma.movieFact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieFactUpdateArgs>(
      args: SelectSubset<T, MovieFactUpdateArgs>
    ): CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>>

    /**
     * Delete zero or more MovieFacts.
     * @param {MovieFactDeleteManyArgs} args - Arguments to filter MovieFacts to delete.
     * @example
     * // Delete a few MovieFacts
     * const { count } = await prisma.movieFact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieFactDeleteManyArgs>(
      args?: SelectSubset<T, MovieFactDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieFacts
     * const movieFact = await prisma.movieFact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieFactUpdateManyArgs>(
      args: SelectSubset<T, MovieFactUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieFact.
     * @param {MovieFactUpsertArgs} args - Arguments to update or create a MovieFact.
     * @example
     * // Update or create a MovieFact
     * const movieFact = await prisma.movieFact.upsert({
     *   create: {
     *     // ... data to create a MovieFact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieFact we want to update
     *   }
     * })
    **/
    upsert<T extends MovieFactUpsertArgs>(
      args: SelectSubset<T, MovieFactUpsertArgs>
    ): CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>>

    /**
     * Find zero or more MovieFacts that matches the filter.
     * @param {MovieFactFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movieFact = await prisma.movieFact.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MovieFactFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a MovieFact.
     * @param {MovieFactAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movieFact = await prisma.movieFact.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MovieFactAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one MovieFact that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovieFactFindUniqueOrThrowArgs} args - Arguments to find a MovieFact
     * @example
     * // Get one MovieFact
     * const movieFact = await prisma.movieFact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFactFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovieFactFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>>

    /**
     * Find the first MovieFact that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactFindFirstOrThrowArgs} args - Arguments to find a MovieFact
     * @example
     * // Get one MovieFact
     * const movieFact = await prisma.movieFact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFactFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFactFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieFactClient<MovieFact>, Prisma__MovieFactClient<MovieFactGetPayload<T>>>

    /**
     * Count the number of MovieFacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactCountArgs} args - Arguments to filter MovieFacts to count.
     * @example
     * // Count the number of MovieFacts
     * const count = await prisma.movieFact.count({
     *   where: {
     *     // ... the filter for the MovieFacts we want to count
     *   }
     * })
    **/
    count<T extends MovieFactCountArgs>(
      args?: Subset<T, MovieFactCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieFactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieFactAggregateArgs>(args: Subset<T, MovieFactAggregateArgs>): PrismaPromise<GetMovieFactAggregateType<T>>

    /**
     * Group by MovieFact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieFactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieFactGroupByArgs['orderBy'] }
        : { orderBy?: MovieFactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieFactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieFactGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieFact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieFactClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MovieFact base type for findUnique actions
   */
  export type MovieFactFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * Filter, which MovieFact to fetch.
     * 
    **/
    where: MovieFactWhereUniqueInput
  }

  /**
   * MovieFact: findUnique
   */
  export interface MovieFactFindUniqueArgs extends MovieFactFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovieFact base type for findFirst actions
   */
  export type MovieFactFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * Filter, which MovieFact to fetch.
     * 
    **/
    where?: MovieFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieFacts to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieFactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieFacts.
     * 
    **/
    cursor?: MovieFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieFacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieFacts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieFacts.
     * 
    **/
    distinct?: Enumerable<MovieFactScalarFieldEnum>
  }

  /**
   * MovieFact: findFirst
   */
  export interface MovieFactFindFirstArgs extends MovieFactFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovieFact findMany
   */
  export type MovieFactFindManyArgs = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * Filter, which MovieFacts to fetch.
     * 
    **/
    where?: MovieFactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieFacts to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieFactOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieFacts.
     * 
    **/
    cursor?: MovieFactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieFacts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieFacts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieFactScalarFieldEnum>
  }


  /**
   * MovieFact create
   */
  export type MovieFactCreateArgs = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * The data needed to create a MovieFact.
     * 
    **/
    data: XOR<MovieFactCreateInput, MovieFactUncheckedCreateInput>
  }


  /**
   * MovieFact createMany
   */
  export type MovieFactCreateManyArgs = {
    /**
     * The data used to create many MovieFacts.
     * 
    **/
    data: Enumerable<MovieFactCreateManyInput>
  }


  /**
   * MovieFact update
   */
  export type MovieFactUpdateArgs = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * The data needed to update a MovieFact.
     * 
    **/
    data: XOR<MovieFactUpdateInput, MovieFactUncheckedUpdateInput>
    /**
     * Choose, which MovieFact to update.
     * 
    **/
    where: MovieFactWhereUniqueInput
  }


  /**
   * MovieFact updateMany
   */
  export type MovieFactUpdateManyArgs = {
    /**
     * The data used to update MovieFacts.
     * 
    **/
    data: XOR<MovieFactUpdateManyMutationInput, MovieFactUncheckedUpdateManyInput>
    /**
     * Filter which MovieFacts to update
     * 
    **/
    where?: MovieFactWhereInput
  }


  /**
   * MovieFact upsert
   */
  export type MovieFactUpsertArgs = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * The filter to search for the MovieFact to update in case it exists.
     * 
    **/
    where: MovieFactWhereUniqueInput
    /**
     * In case the MovieFact found by the `where` argument doesn't exist, create a new MovieFact with this data.
     * 
    **/
    create: XOR<MovieFactCreateInput, MovieFactUncheckedCreateInput>
    /**
     * In case the MovieFact was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieFactUpdateInput, MovieFactUncheckedUpdateInput>
  }


  /**
   * MovieFact delete
   */
  export type MovieFactDeleteArgs = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
    /**
     * Filter which MovieFact to delete.
     * 
    **/
    where: MovieFactWhereUniqueInput
  }


  /**
   * MovieFact deleteMany
   */
  export type MovieFactDeleteManyArgs = {
    /**
     * Filter which MovieFacts to delete
     * 
    **/
    where?: MovieFactWhereInput
  }


  /**
   * MovieFact findRaw
   */
  export type MovieFactFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * MovieFact aggregateRaw
   */
  export type MovieFactAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * MovieFact: findUniqueOrThrow
   */
  export type MovieFactFindUniqueOrThrowArgs = MovieFactFindUniqueArgsBase
      

  /**
   * MovieFact: findFirstOrThrow
   */
  export type MovieFactFindFirstOrThrowArgs = MovieFactFindFirstArgsBase
      

  /**
   * MovieFact without action
   */
  export type MovieFactArgs = {
    /**
     * Select specific fields to fetch from the MovieFact
     * 
    **/
    select?: MovieFactSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieFactInclude | null
  }



  /**
   * Model Movie
   */


  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    kpId: number | null
    year: number | null
    movieLength: number | null
    ageRating: number | null
    top10: number | null
    top250: number | null
  }

  export type MovieSumAggregateOutputType = {
    kpId: number | null
    year: number | null
    movieLength: number | null
    ageRating: number | null
    top10: number | null
    top250: number | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    kpId: number | null
    name: string | null
    enName: string | null
    alternativeName: string | null
    description: string | null
    ratingMpaa: string | null
    shortDescription: string | null
    slogan: string | null
    year: number | null
    movieLength: number | null
    ageRating: number | null
    top10: number | null
    top250: number | null
    type: MovieType | null
    status: MovieStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    kpId: number | null
    name: string | null
    enName: string | null
    alternativeName: string | null
    description: string | null
    ratingMpaa: string | null
    shortDescription: string | null
    slogan: string | null
    year: number | null
    movieLength: number | null
    ageRating: number | null
    top10: number | null
    top250: number | null
    type: MovieType | null
    status: MovieStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    movieId: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    kpId: number
    name: number
    names: number
    enName: number
    alternativeName: number
    description: number
    ratingMpaa: number
    shortDescription: number
    slogan: number
    year: number
    movieLength: number
    ageRating: number
    top10: number
    top250: number
    type: number
    status: number
    createdAt: number
    updatedAt: number
    movieId: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    kpId?: true
    year?: true
    movieLength?: true
    ageRating?: true
    top10?: true
    top250?: true
  }

  export type MovieSumAggregateInputType = {
    kpId?: true
    year?: true
    movieLength?: true
    ageRating?: true
    top10?: true
    top250?: true
  }

  export type MovieMinAggregateInputType = {
    id?: true
    kpId?: true
    name?: true
    enName?: true
    alternativeName?: true
    description?: true
    ratingMpaa?: true
    shortDescription?: true
    slogan?: true
    year?: true
    movieLength?: true
    ageRating?: true
    top10?: true
    top250?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    kpId?: true
    name?: true
    enName?: true
    alternativeName?: true
    description?: true
    ratingMpaa?: true
    shortDescription?: true
    slogan?: true
    year?: true
    movieLength?: true
    ageRating?: true
    top10?: true
    top250?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    kpId?: true
    name?: true
    names?: true
    enName?: true
    alternativeName?: true
    description?: true
    ratingMpaa?: true
    shortDescription?: true
    slogan?: true
    year?: true
    movieLength?: true
    ageRating?: true
    top10?: true
    top250?: true
    type?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    movieId?: true
    _all?: true
  }

  export type MovieAggregateArgs = {
    /**
     * Filter which Movie to aggregate.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs = {
    where?: MovieWhereInput
    orderBy?: Enumerable<MovieOrderByWithAggregationInput>
    by: Array<MovieScalarFieldEnum>
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }


  export type MovieGroupByOutputType = {
    id: string
    kpId: number
    name: string | null
    names: string[]
    enName: string | null
    alternativeName: string | null
    description: string | null
    ratingMpaa: string | null
    shortDescription: string | null
    slogan: string | null
    year: number | null
    movieLength: number | null
    ageRating: number | null
    top10: number | null
    top250: number | null
    type: MovieType | null
    status: MovieStatus | null
    createdAt: Date
    updatedAt: Date
    movieId: string
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect = {
    id?: boolean
    kpId?: boolean
    externalId?: boolean | MovieExternalIdArgs
    name?: boolean
    names?: boolean
    enName?: boolean
    alternativeName?: boolean
    description?: boolean
    ratingMpaa?: boolean
    shortDescription?: boolean
    slogan?: boolean
    year?: boolean
    movieLength?: boolean
    ageRating?: boolean
    top10?: boolean
    top250?: boolean
    type?: boolean
    status?: boolean
    genres?: boolean | MovieNameItemArgs
    countries?: boolean | MovieNameItemArgs
    rating?: boolean | MovieRatingArgs
    budget?: boolean | MovieBudgetArgs
    distributors?: boolean | MovieDistributorsArgs
    votes?: boolean | MovieVotesArgs
    fees?: boolean | MovieFeesArgs
    premiere?: boolean | MoviePremiereArgs
    technology?: boolean | MovieTechnologyArgs
    watchability?: boolean | MovieWatchabilityArgs
    releaseYears?: boolean | MovieReleaseYearsArgs
    createdAt?: boolean
    updatedAt?: boolean
    movieId?: boolean
    images?: boolean | ImageFindManyArgs
    videos?: boolean | VideoFindManyArgs
    seasons?: boolean | SeasonFindManyArgs
    persons?: boolean | MovieOnPersonFindManyArgs
    facts?: boolean | MovieFactFindManyArgs
    review?: boolean | ReviewFindManyArgs
    movieHavingSequelsAndPrequels?: boolean | MovieArgs
    sequelsAndPrequels?: boolean | MovieFindManyArgs
    movieHavingSimilar?: boolean | MovieArgs
    similarMovies?: boolean | MovieFindManyArgs
    _count?: boolean | MovieCountOutputTypeArgs
  }

  export type MovieInclude = {
    images?: boolean | ImageFindManyArgs
    videos?: boolean | VideoFindManyArgs
    seasons?: boolean | SeasonFindManyArgs
    persons?: boolean | MovieOnPersonFindManyArgs
    facts?: boolean | MovieFactFindManyArgs
    review?: boolean | ReviewFindManyArgs
    movieHavingSequelsAndPrequels?: boolean | MovieArgs
    sequelsAndPrequels?: boolean | MovieFindManyArgs
    movieHavingSimilar?: boolean | MovieArgs
    similarMovies?: boolean | MovieFindManyArgs
    _count?: boolean | MovieCountOutputTypeArgs
  }

  export type MovieGetPayload<
    S extends boolean | null | undefined | MovieArgs,
    U = keyof S
      > = S extends true
        ? Movie
    : S extends undefined
    ? never
    : S extends MovieArgs | MovieFindManyArgs
    ?'include' extends U
    ? Movie  & {
    [P in TrueKeys<S['include']>]:
        P extends 'images' ? Array < ImageGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'videos' ? Array < VideoGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'seasons' ? Array < SeasonGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'persons' ? Array < MovieOnPersonGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'facts' ? Array < MovieFactGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'review' ? Array < ReviewGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'movieHavingSequelsAndPrequels' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'sequelsAndPrequels' ? Array < MovieGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'movieHavingSimilar' ? MovieGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'similarMovies' ? Array < MovieGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? MovieCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'externalId' ? MovieExternalIdGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'genres' ? Array < MovieNameItemGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'countries' ? Array < MovieNameItemGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'rating' ? MovieRatingGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'budget' ? MovieBudgetGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'distributors' ? MovieDistributorsGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'votes' ? MovieVotesGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'fees' ? MovieFeesGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'premiere' ? MoviePremiereGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'technology' ? MovieTechnologyGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'watchability' ? MovieWatchabilityGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends 'releaseYears' ? Array < MovieReleaseYearsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'images' ? Array < ImageGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'videos' ? Array < VideoGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'seasons' ? Array < SeasonGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'persons' ? Array < MovieOnPersonGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'facts' ? Array < MovieFactGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'review' ? Array < ReviewGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'movieHavingSequelsAndPrequels' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'sequelsAndPrequels' ? Array < MovieGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'movieHavingSimilar' ? MovieGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'similarMovies' ? Array < MovieGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? MovieCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Movie ? Movie[P] : never
  } 
    : Movie
  : Movie


  type MovieCountArgs = Merge<
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }
  >

  export interface MovieDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null, null>, Prisma__MovieClient<MovieGetPayload<T> | null, null>>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null, null>, Prisma__MovieClient<MovieGetPayload<T> | null, null>>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Find zero or more Movies that matches the filter.
     * @param {MovieFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const movie = await prisma.movie.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: MovieFindRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Movie.
     * @param {MovieAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const movie = await prisma.movie.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: MovieAggregateRawArgs
    ): PrismaPromise<JsonObject>

    /**
     * Find one Movie that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Find the first Movie that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    externalId<T extends MovieExternalIdArgs = {}>(args?: Subset<T, MovieExternalIdArgs>): CheckSelect<T, Prisma__MovieExternalIdClient<MovieExternalId | Null>, Prisma__MovieExternalIdClient<MovieExternalIdGetPayload<T> | Null>>;

    genres<T extends MovieNameItemArgs = {}>(args?: Subset<T, MovieNameItemArgs>): CheckSelect<T, PrismaPromise<Array<MovieNameItem>| Null>, PrismaPromise<Array<MovieNameItemGetPayload<T>>| Null>>;

    countries<T extends MovieNameItemArgs = {}>(args?: Subset<T, MovieNameItemArgs>): CheckSelect<T, PrismaPromise<Array<MovieNameItem>| Null>, PrismaPromise<Array<MovieNameItemGetPayload<T>>| Null>>;

    rating<T extends MovieRatingArgs = {}>(args?: Subset<T, MovieRatingArgs>): CheckSelect<T, Prisma__MovieRatingClient<MovieRating | Null>, Prisma__MovieRatingClient<MovieRatingGetPayload<T> | Null>>;

    budget<T extends MovieBudgetArgs = {}>(args?: Subset<T, MovieBudgetArgs>): CheckSelect<T, Prisma__MovieBudgetClient<MovieBudget | Null>, Prisma__MovieBudgetClient<MovieBudgetGetPayload<T> | Null>>;

    distributors<T extends MovieDistributorsArgs = {}>(args?: Subset<T, MovieDistributorsArgs>): CheckSelect<T, Prisma__MovieDistributorsClient<MovieDistributors | Null>, Prisma__MovieDistributorsClient<MovieDistributorsGetPayload<T> | Null>>;

    votes<T extends MovieVotesArgs = {}>(args?: Subset<T, MovieVotesArgs>): CheckSelect<T, Prisma__MovieVotesClient<MovieVotes | Null>, Prisma__MovieVotesClient<MovieVotesGetPayload<T> | Null>>;

    fees<T extends MovieFeesArgs = {}>(args?: Subset<T, MovieFeesArgs>): CheckSelect<T, Prisma__MovieFeesClient<MovieFees | Null>, Prisma__MovieFeesClient<MovieFeesGetPayload<T> | Null>>;

    premiere<T extends MoviePremiereArgs = {}>(args?: Subset<T, MoviePremiereArgs>): CheckSelect<T, Prisma__MoviePremiereClient<MoviePremiere | Null>, Prisma__MoviePremiereClient<MoviePremiereGetPayload<T> | Null>>;

    technology<T extends MovieTechnologyArgs = {}>(args?: Subset<T, MovieTechnologyArgs>): CheckSelect<T, Prisma__MovieTechnologyClient<MovieTechnology | Null>, Prisma__MovieTechnologyClient<MovieTechnologyGetPayload<T> | Null>>;

    watchability<T extends MovieWatchabilityArgs = {}>(args?: Subset<T, MovieWatchabilityArgs>): CheckSelect<T, Prisma__MovieWatchabilityClient<MovieWatchability | Null>, Prisma__MovieWatchabilityClient<MovieWatchabilityGetPayload<T> | Null>>;

    releaseYears<T extends MovieReleaseYearsArgs = {}>(args?: Subset<T, MovieReleaseYearsArgs>): CheckSelect<T, PrismaPromise<Array<MovieReleaseYears>| Null>, PrismaPromise<Array<MovieReleaseYearsGetPayload<T>>| Null>>;

    images<T extends ImageFindManyArgs = {}>(args?: Subset<T, ImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Image>| Null>, PrismaPromise<Array<ImageGetPayload<T>>| Null>>;

    videos<T extends VideoFindManyArgs = {}>(args?: Subset<T, VideoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Video>| Null>, PrismaPromise<Array<VideoGetPayload<T>>| Null>>;

    seasons<T extends SeasonFindManyArgs = {}>(args?: Subset<T, SeasonFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Season>| Null>, PrismaPromise<Array<SeasonGetPayload<T>>| Null>>;

    persons<T extends MovieOnPersonFindManyArgs = {}>(args?: Subset<T, MovieOnPersonFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovieOnPerson>| Null>, PrismaPromise<Array<MovieOnPersonGetPayload<T>>| Null>>;

    facts<T extends MovieFactFindManyArgs = {}>(args?: Subset<T, MovieFactFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovieFact>| Null>, PrismaPromise<Array<MovieFactGetPayload<T>>| Null>>;

    review<T extends ReviewFindManyArgs = {}>(args?: Subset<T, ReviewFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Review>| Null>, PrismaPromise<Array<ReviewGetPayload<T>>| Null>>;

    movieHavingSequelsAndPrequels<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    sequelsAndPrequels<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>| Null>, PrismaPromise<Array<MovieGetPayload<T>>| Null>>;

    movieHavingSimilar<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | Null>, Prisma__MovieClient<MovieGetPayload<T> | Null>>;

    similarMovies<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>| Null>, PrismaPromise<Array<MovieGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Movie base type for findUnique actions
   */
  export type MovieFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }

  /**
   * Movie: findUnique
   */
  export interface MovieFindUniqueArgs extends MovieFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie base type for findFirst actions
   */
  export type MovieFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     * 
    **/
    distinct?: Enumerable<MovieScalarFieldEnum>
  }

  /**
   * Movie: findFirst
   */
  export interface MovieFindFirstArgs extends MovieFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movies to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to create a Movie.
     * 
    **/
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs = {
    /**
     * The data used to create many Movies.
     * 
    **/
    data: Enumerable<MovieCreateManyInput>
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to update a Movie.
     * 
    **/
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs = {
    /**
     * The data used to update Movies.
     * 
    **/
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The filter to search for the Movie to update in case it exists.
     * 
    **/
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     * 
    **/
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter which Movie to delete.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs = {
    /**
     * Filter which Movies to delete
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie findRaw
   */
  export type MovieFindRawArgs = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     * 
    **/
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Movie aggregateRaw
   */
  export type MovieAggregateRawArgs = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     * 
    **/
    pipeline?: Array<InputJsonValue>
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     * 
    **/
    options?: InputJsonValue
  }


  /**
   * Movie: findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs = MovieFindUniqueArgsBase
      

  /**
   * Movie: findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs = MovieFindFirstArgsBase
      

  /**
   * Movie without action
   */
  export type MovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ImageScalarFieldEnum: {
    id: 'id',
    movieKpId: 'movieKpId',
    url: 'url',
    language: 'language',
    previewUrl: 'previewUrl',
    kpMovieId: 'kpMovieId',
    height: 'height',
    width: 'width',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const MovieFactScalarFieldEnum: {
    id: 'id',
    movieKpId: 'movieKpId',
    spoiler: 'spoiler',
    type: 'type',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId'
  };

  export type MovieFactScalarFieldEnum = (typeof MovieFactScalarFieldEnum)[keyof typeof MovieFactScalarFieldEnum]


  export const MovieOnPersonScalarFieldEnum: {
    id: 'id',
    kpId: 'kpId',
    kpMovieId: 'kpMovieId',
    description: 'description',
    profession: 'profession',
    assignedAt: 'assignedAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId',
    personId: 'personId'
  };

  export type MovieOnPersonScalarFieldEnum = (typeof MovieOnPersonScalarFieldEnum)[keyof typeof MovieOnPersonScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    kpId: 'kpId',
    name: 'name',
    names: 'names',
    enName: 'enName',
    alternativeName: 'alternativeName',
    description: 'description',
    ratingMpaa: 'ratingMpaa',
    shortDescription: 'shortDescription',
    slogan: 'slogan',
    year: 'year',
    movieLength: 'movieLength',
    ageRating: 'ageRating',
    top10: 'top10',
    top250: 'top250',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const PersonFactScalarFieldEnum: {
    id: 'id',
    personKpId: 'personKpId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    personId: 'personId'
  };

  export type PersonFactScalarFieldEnum = (typeof PersonFactScalarFieldEnum)[keyof typeof PersonFactScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    kpId: 'kpId',
    enName: 'enName',
    name: 'name',
    photo: 'photo',
    sex: 'sex',
    birthPlace: 'birthPlace',
    deathPlace: 'deathPlace',
    age: 'age',
    countAwards: 'countAwards',
    growth: 'growth',
    profession: 'profession',
    birthday: 'birthday',
    death: 'death',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    kpMovieId: 'kpMovieId',
    author: 'author',
    review: 'review',
    title: 'title',
    reviewDislikes: 'reviewDislikes',
    reviewLikes: 'reviewLikes',
    userRating: 'userRating',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SeasonScalarFieldEnum: {
    id: 'id',
    movieKpId: 'movieKpId',
    episodesCount: 'episodesCount',
    number: 'number',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    movieId: 'movieId'
  };

  export type SeasonScalarFieldEnum = (typeof SeasonScalarFieldEnum)[keyof typeof SeasonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const VideoScalarFieldEnum: {
    id: 'id',
    kpId: 'kpId',
    name: 'name',
    url: 'url',
    size: 'size',
    source: 'source',
    type: 'type',
    movieId: 'movieId'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type VideoWhereInput = {
    AND?: Enumerable<VideoWhereInput>
    OR?: Enumerable<VideoWhereInput>
    NOT?: Enumerable<VideoWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    name?: StringFilter | string
    url?: StringFilter | string
    size?: IntNullableFilter | number | null
    source?: EnumVideoSourceFilter | VideoSource
    type?: EnumVideoTypeNullableFilter | VideoType | null
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: StringFilter | string
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    size?: SortOrder
    source?: SortOrder
    type?: SortOrder
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
  }

  export type VideoWhereUniqueInput = {
    id?: string
    url?: string
  }

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    size?: SortOrder
    source?: SortOrder
    type?: SortOrder
    movieId?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    kpId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    size?: IntNullableWithAggregatesFilter | number | null
    source?: EnumVideoSourceWithAggregatesFilter | VideoSource
    type?: EnumVideoTypeNullableWithAggregatesFilter | VideoType | null
    movieId?: StringWithAggregatesFilter | string
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    id?: StringFilter | string
    movieKpId?: IntFilter | number
    url?: StringFilter | string
    language?: StringNullableFilter | string | null
    previewUrl?: StringFilter | string
    kpMovieId?: IntFilter | number
    height?: IntNullableFilter | number | null
    width?: IntNullableFilter | number | null
    type?: EnumImageTypeFilter | ImageType
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: StringFilter | string
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    url?: SortOrder
    language?: SortOrder
    previewUrl?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
  }

  export type ImageWhereUniqueInput = {
    id?: string
    url?: string
    movieId?: string
  }

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    url?: SortOrder
    language?: SortOrder
    previewUrl?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    movieKpId?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    language?: StringNullableWithAggregatesFilter | string | null
    previewUrl?: StringWithAggregatesFilter | string
    kpMovieId?: IntWithAggregatesFilter | number
    height?: IntNullableWithAggregatesFilter | number | null
    width?: IntNullableWithAggregatesFilter | number | null
    type?: EnumImageTypeWithAggregatesFilter | ImageType
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    movieId?: StringWithAggregatesFilter | string
  }

  export type SeasonWhereInput = {
    AND?: Enumerable<SeasonWhereInput>
    OR?: Enumerable<SeasonWhereInput>
    NOT?: Enumerable<SeasonWhereInput>
    id?: StringFilter | string
    movieKpId?: IntFilter | number
    episodesCount?: IntFilter | number
    number?: IntFilter | number
    episodes?: XOR<SeasonEpisodeCompositeListFilter, Enumerable<SeasonEpisodeObjectEqualityInput>>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: StringFilter | string
  }

  export type SeasonOrderByWithRelationInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
    episodes?: SeasonEpisodeOrderByCompositeAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
  }

  export type SeasonWhereUniqueInput = {
    id?: string
  }

  export type SeasonOrderByWithAggregationInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    _count?: SeasonCountOrderByAggregateInput
    _avg?: SeasonAvgOrderByAggregateInput
    _max?: SeasonMaxOrderByAggregateInput
    _min?: SeasonMinOrderByAggregateInput
    _sum?: SeasonSumOrderByAggregateInput
  }

  export type SeasonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SeasonScalarWhereWithAggregatesInput>
    OR?: Enumerable<SeasonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SeasonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    movieKpId?: IntWithAggregatesFilter | number
    episodesCount?: IntWithAggregatesFilter | number
    number?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    movieId?: StringWithAggregatesFilter | string
  }

  export type ReviewWhereInput = {
    AND?: Enumerable<ReviewWhereInput>
    OR?: Enumerable<ReviewWhereInput>
    NOT?: Enumerable<ReviewWhereInput>
    id?: StringFilter | string
    kpMovieId?: IntFilter | number
    author?: StringFilter | string
    review?: StringFilter | string
    title?: StringNullableFilter | string | null
    reviewDislikes?: IntFilter | number
    reviewLikes?: IntFilter | number
    userRating?: IntFilter | number
    date?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: StringFilter | string
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    kpMovieId?: SortOrder
    author?: SortOrder
    review?: SortOrder
    title?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
  }

  export type ReviewWhereUniqueInput = {
    id?: string
  }

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    kpMovieId?: SortOrder
    author?: SortOrder
    review?: SortOrder
    title?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReviewScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    kpMovieId?: IntWithAggregatesFilter | number
    author?: StringWithAggregatesFilter | string
    review?: StringWithAggregatesFilter | string
    title?: StringNullableWithAggregatesFilter | string | null
    reviewDislikes?: IntWithAggregatesFilter | number
    reviewLikes?: IntWithAggregatesFilter | number
    userRating?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    movieId?: StringWithAggregatesFilter | string
  }

  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    enName?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    photo?: StringFilter | string
    sex?: EnumPersonSexNullableFilter | PersonSex | null
    birthPlace?: StringNullableListFilter
    deathPlace?: StringNullableListFilter
    age?: IntNullableFilter | number | null
    countAwards?: IntNullableFilter | number | null
    growth?: IntNullableFilter | number | null
    profession?: EnumProfessionTypeNullableListFilter
    spouses?: XOR<PersonSpousesCompositeListFilter, Enumerable<PersonSpousesObjectEqualityInput>>
    birthday?: DateTimeNullableFilter | Date | string | null
    death?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movies?: MovieOnPersonListRelationFilter
    facts?: PersonFactListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    kpId?: SortOrder
    enName?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    sex?: SortOrder
    birthPlace?: SortOrder
    deathPlace?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
    profession?: SortOrder
    spouses?: PersonSpousesOrderByCompositeAggregateInput
    birthday?: SortOrder
    death?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movies?: MovieOnPersonOrderByRelationAggregateInput
    facts?: PersonFactOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = {
    id?: string
    kpId?: number
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    kpId?: SortOrder
    enName?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    sex?: SortOrder
    birthPlace?: SortOrder
    deathPlace?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
    profession?: SortOrder
    birthday?: SortOrder
    death?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    kpId?: IntWithAggregatesFilter | number
    enName?: StringNullableWithAggregatesFilter | string | null
    name?: StringNullableWithAggregatesFilter | string | null
    photo?: StringWithAggregatesFilter | string
    sex?: EnumPersonSexNullableWithAggregatesFilter | PersonSex | null
    birthPlace?: StringNullableListFilter
    deathPlace?: StringNullableListFilter
    age?: IntNullableWithAggregatesFilter | number | null
    countAwards?: IntNullableWithAggregatesFilter | number | null
    growth?: IntNullableWithAggregatesFilter | number | null
    profession?: EnumProfessionTypeNullableListFilter
    birthday?: DateTimeNullableWithAggregatesFilter | Date | string | null
    death?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MovieOnPersonWhereInput = {
    AND?: Enumerable<MovieOnPersonWhereInput>
    OR?: Enumerable<MovieOnPersonWhereInput>
    NOT?: Enumerable<MovieOnPersonWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    kpMovieId?: IntFilter | number
    description?: StringFilter | string
    profession?: EnumProfessionTypeNullableListFilter
    assignedAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: StringFilter | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    personId?: StringFilter | string
  }

  export type MovieOnPersonOrderByWithRelationInput = {
    id?: SortOrder
    kpId?: SortOrder
    kpMovieId?: SortOrder
    description?: SortOrder
    profession?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
    person?: PersonOrderByWithRelationInput
    personId?: SortOrder
  }

  export type MovieOnPersonWhereUniqueInput = {
    id?: string
    kpId?: number
  }

  export type MovieOnPersonOrderByWithAggregationInput = {
    id?: SortOrder
    kpId?: SortOrder
    kpMovieId?: SortOrder
    description?: SortOrder
    profession?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    personId?: SortOrder
    _count?: MovieOnPersonCountOrderByAggregateInput
    _avg?: MovieOnPersonAvgOrderByAggregateInput
    _max?: MovieOnPersonMaxOrderByAggregateInput
    _min?: MovieOnPersonMinOrderByAggregateInput
    _sum?: MovieOnPersonSumOrderByAggregateInput
  }

  export type MovieOnPersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieOnPersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieOnPersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieOnPersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    kpId?: IntWithAggregatesFilter | number
    kpMovieId?: IntWithAggregatesFilter | number
    description?: StringWithAggregatesFilter | string
    profession?: EnumProfessionTypeNullableListFilter
    assignedAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    movieId?: StringWithAggregatesFilter | string
    personId?: StringWithAggregatesFilter | string
  }

  export type PersonFactWhereInput = {
    AND?: Enumerable<PersonFactWhereInput>
    OR?: Enumerable<PersonFactWhereInput>
    NOT?: Enumerable<PersonFactWhereInput>
    id?: StringFilter | string
    personKpId?: IntFilter | number
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    personId?: StringFilter | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type PersonFactOrderByWithRelationInput = {
    id?: SortOrder
    personKpId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type PersonFactWhereUniqueInput = {
    id?: string
  }

  export type PersonFactOrderByWithAggregationInput = {
    id?: SortOrder
    personKpId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
    _count?: PersonFactCountOrderByAggregateInput
    _avg?: PersonFactAvgOrderByAggregateInput
    _max?: PersonFactMaxOrderByAggregateInput
    _min?: PersonFactMinOrderByAggregateInput
    _sum?: PersonFactSumOrderByAggregateInput
  }

  export type PersonFactScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonFactScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonFactScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonFactScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    personKpId?: IntWithAggregatesFilter | number
    value?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    personId?: StringWithAggregatesFilter | string
  }

  export type MovieFactWhereInput = {
    AND?: Enumerable<MovieFactWhereInput>
    OR?: Enumerable<MovieFactWhereInput>
    NOT?: Enumerable<MovieFactWhereInput>
    id?: StringFilter | string
    movieKpId?: IntFilter | number
    spoiler?: BoolNullableFilter | boolean | null
    type?: StringNullableFilter | string | null
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: StringFilter | string
  }

  export type MovieFactOrderByWithRelationInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    spoiler?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
  }

  export type MovieFactWhereUniqueInput = {
    id?: string
  }

  export type MovieFactOrderByWithAggregationInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    spoiler?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    _count?: MovieFactCountOrderByAggregateInput
    _avg?: MovieFactAvgOrderByAggregateInput
    _max?: MovieFactMaxOrderByAggregateInput
    _min?: MovieFactMinOrderByAggregateInput
    _sum?: MovieFactSumOrderByAggregateInput
  }

  export type MovieFactScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieFactScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieFactScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieFactScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    movieKpId?: IntWithAggregatesFilter | number
    spoiler?: BoolNullableWithAggregatesFilter | boolean | null
    type?: StringNullableWithAggregatesFilter | string | null
    value?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    movieId?: StringWithAggregatesFilter | string
  }

  export type MovieWhereInput = {
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    externalId?: XOR<MovieExternalIdCompositeFilter, MovieExternalIdObjectEqualityInput>
    name?: StringNullableFilter | string | null
    names?: StringNullableListFilter
    enName?: StringNullableFilter | string | null
    alternativeName?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    ratingMpaa?: StringNullableFilter | string | null
    shortDescription?: StringNullableFilter | string | null
    slogan?: StringNullableFilter | string | null
    year?: IntNullableFilter | number | null
    movieLength?: IntNullableFilter | number | null
    ageRating?: IntNullableFilter | number | null
    top10?: IntNullableFilter | number | null
    top250?: IntNullableFilter | number | null
    type?: EnumMovieTypeNullableFilter | MovieType | null
    status?: EnumMovieStatusNullableFilter | MovieStatus | null
    genres?: XOR<MovieNameItemCompositeListFilter, Enumerable<MovieNameItemObjectEqualityInput>>
    countries?: XOR<MovieNameItemCompositeListFilter, Enumerable<MovieNameItemObjectEqualityInput>>
    rating?: XOR<MovieRatingCompositeFilter, MovieRatingObjectEqualityInput>
    budget?: XOR<MovieBudgetNullableCompositeFilter, MovieBudgetObjectEqualityInput> | null
    distributors?: XOR<MovieDistributorsNullableCompositeFilter, MovieDistributorsObjectEqualityInput> | null
    votes?: XOR<MovieVotesCompositeFilter, MovieVotesObjectEqualityInput>
    fees?: XOR<MovieFeesNullableCompositeFilter, MovieFeesObjectEqualityInput> | null
    premiere?: XOR<MoviePremiereNullableCompositeFilter, MoviePremiereObjectEqualityInput> | null
    technology?: XOR<MovieTechnologyNullableCompositeFilter, MovieTechnologyObjectEqualityInput> | null
    watchability?: XOR<MovieWatchabilityNullableCompositeFilter, MovieWatchabilityObjectEqualityInput> | null
    releaseYears?: XOR<MovieReleaseYearsCompositeListFilter, Enumerable<MovieReleaseYearsObjectEqualityInput>>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
    images?: ImageListRelationFilter
    videos?: VideoListRelationFilter
    seasons?: SeasonListRelationFilter
    persons?: MovieOnPersonListRelationFilter
    facts?: MovieFactListRelationFilter
    review?: ReviewListRelationFilter
    movieHavingSequelsAndPrequels?: XOR<MovieRelationFilter, MovieWhereInput>
    sequelsAndPrequels?: MovieListRelationFilter
    movieHavingSimilar?: XOR<MovieRelationFilter, MovieWhereInput>
    similarMovies?: MovieListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    kpId?: SortOrder
    externalId?: MovieExternalIdOrderByInput
    name?: SortOrder
    names?: SortOrder
    enName?: SortOrder
    alternativeName?: SortOrder
    description?: SortOrder
    ratingMpaa?: SortOrder
    shortDescription?: SortOrder
    slogan?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
    type?: SortOrder
    status?: SortOrder
    genres?: MovieNameItemOrderByCompositeAggregateInput
    countries?: MovieNameItemOrderByCompositeAggregateInput
    rating?: MovieRatingOrderByInput
    budget?: MovieBudgetOrderByInput
    distributors?: MovieDistributorsOrderByInput
    votes?: MovieVotesOrderByInput
    fees?: MovieFeesOrderByInput
    premiere?: MoviePremiereOrderByInput
    technology?: MovieTechnologyOrderByInput
    watchability?: MovieWatchabilityOrderByInput
    releaseYears?: MovieReleaseYearsOrderByCompositeAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    images?: ImageOrderByRelationAggregateInput
    videos?: VideoOrderByRelationAggregateInput
    seasons?: SeasonOrderByRelationAggregateInput
    persons?: MovieOnPersonOrderByRelationAggregateInput
    facts?: MovieFactOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
    movieHavingSequelsAndPrequels?: MovieOrderByWithRelationInput
    sequelsAndPrequels?: MovieOrderByRelationAggregateInput
    movieHavingSimilar?: MovieOrderByWithRelationInput
    similarMovies?: MovieOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = {
    id?: string
    kpId?: number
  }

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    names?: SortOrder
    enName?: SortOrder
    alternativeName?: SortOrder
    description?: SortOrder
    ratingMpaa?: SortOrder
    shortDescription?: SortOrder
    slogan?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    kpId?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    names?: StringNullableListFilter
    enName?: StringNullableWithAggregatesFilter | string | null
    alternativeName?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
    ratingMpaa?: StringNullableWithAggregatesFilter | string | null
    shortDescription?: StringNullableWithAggregatesFilter | string | null
    slogan?: StringNullableWithAggregatesFilter | string | null
    year?: IntNullableWithAggregatesFilter | number | null
    movieLength?: IntNullableWithAggregatesFilter | number | null
    ageRating?: IntNullableWithAggregatesFilter | number | null
    top10?: IntNullableWithAggregatesFilter | number | null
    top250?: IntNullableWithAggregatesFilter | number | null
    type?: EnumMovieTypeNullableWithAggregatesFilter | MovieType | null
    status?: EnumMovieStatusNullableWithAggregatesFilter | MovieStatus | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    movieId?: StringWithAggregatesFilter | string
  }

  export type VideoCreateInput = {
    id?: string
    kpId: number
    name: string
    url: string
    size?: number | null
    source: VideoSource
    type?: VideoType | null
    movie: MovieCreateNestedOneWithoutVideosInput
  }

  export type VideoUncheckedCreateInput = {
    id?: string
    kpId: number
    name: string
    url: string
    size?: number | null
    source: VideoSource
    type?: VideoType | null
    movieId: string
  }

  export type VideoUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
    movie?: MovieUpdateOneRequiredWithoutVideosNestedInput
  }

  export type VideoUncheckedUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type VideoCreateManyInput = {
    id?: string
    kpId: number
    name: string
    url: string
    size?: number | null
    source: VideoSource
    type?: VideoType | null
    movieId: string
  }

  export type VideoUpdateManyMutationInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
  }

  export type VideoUncheckedUpdateManyInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateInput = {
    id?: string
    movieKpId: number
    url: string
    language?: string | null
    previewUrl: string
    kpMovieId: number
    height?: number | null
    width?: number | null
    type: ImageType
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    movieKpId: number
    url: string
    language?: string | null
    previewUrl: string
    kpMovieId: number
    height?: number | null
    width?: number | null
    type: ImageType
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type ImageUpdateInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type ImageCreateManyInput = {
    id?: string
    movieKpId: number
    url: string
    language?: string | null
    previewUrl: string
    kpMovieId: number
    height?: number | null
    width?: number | null
    type: ImageType
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type ImageUpdateManyMutationInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type SeasonCreateInput = {
    id?: string
    movieKpId: number
    episodesCount: number
    number: number
    episodes?: XOR<SeasonEpisodeListCreateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutSeasonsInput
  }

  export type SeasonUncheckedCreateInput = {
    id?: string
    movieKpId: number
    episodesCount: number
    number: number
    episodes?: XOR<SeasonEpisodeListCreateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type SeasonUpdateInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutSeasonsNestedInput
  }

  export type SeasonUncheckedUpdateInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type SeasonCreateManyInput = {
    id?: string
    movieKpId: number
    episodesCount: number
    number: number
    episodes?: XOR<SeasonEpisodeListCreateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type SeasonUpdateManyMutationInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateManyInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    kpMovieId: number
    author: string
    review: string
    title?: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    kpMovieId: number
    author: string
    review: string
    title?: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type ReviewUpdateInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    kpMovieId: number
    author: string
    review: string
    title?: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type ReviewUpdateManyMutationInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieOnPersonCreateNestedManyWithoutPersonInput
    facts?: PersonFactCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieOnPersonUncheckedCreateNestedManyWithoutPersonInput
    facts?: PersonFactUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieOnPersonUpdateManyWithoutPersonNestedInput
    facts?: PersonFactUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieOnPersonUncheckedUpdateManyWithoutPersonNestedInput
    facts?: PersonFactUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieOnPersonCreateInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutPersonsInput
    person: PersonCreateNestedOneWithoutMoviesInput
  }

  export type MovieOnPersonUncheckedCreateInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    personId: string
  }

  export type MovieOnPersonUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutPersonsNestedInput
    person?: PersonUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieOnPersonUncheckedUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieOnPersonCreateManyInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    personId: string
  }

  export type MovieOnPersonUpdateManyMutationInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieOnPersonUncheckedUpdateManyInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonFactCreateInput = {
    id?: string
    personKpId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutFactsInput
  }

  export type PersonFactUncheckedCreateInput = {
    id?: string
    personKpId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personId: string
  }

  export type PersonFactUpdateInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutFactsNestedInput
  }

  export type PersonFactUncheckedUpdateInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonFactCreateManyInput = {
    id?: string
    personKpId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personId: string
  }

  export type PersonFactUpdateManyMutationInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonFactUncheckedUpdateManyInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieFactCreateInput = {
    id?: string
    movieKpId: number
    spoiler?: boolean | null
    type?: string | null
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutFactsInput
  }

  export type MovieFactUncheckedCreateInput = {
    id?: string
    movieKpId: number
    spoiler?: boolean | null
    type?: string | null
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type MovieFactUpdateInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutFactsNestedInput
  }

  export type MovieFactUncheckedUpdateInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieFactCreateManyInput = {
    id?: string
    movieKpId: number
    spoiler?: boolean | null
    type?: string | null
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type MovieFactUpdateManyMutationInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieFactUncheckedUpdateManyInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieCreateManyInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type MovieUpdateManyMutationInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type EnumVideoSourceFilter = {
    equals?: VideoSource
    in?: Enumerable<VideoSource>
    notIn?: Enumerable<VideoSource>
    not?: NestedEnumVideoSourceFilter | VideoSource
  }

  export type EnumVideoTypeNullableFilter = {
    equals?: VideoType | null
    in?: Enumerable<VideoType> | null
    notIn?: Enumerable<VideoType> | null
    not?: NestedEnumVideoTypeNullableFilter | VideoType | null
    isSet?: boolean
  }

  export type MovieRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    size?: SortOrder
    source?: SortOrder
    type?: SortOrder
    movieId?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    kpId?: SortOrder
    size?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    size?: SortOrder
    source?: SortOrder
    type?: SortOrder
    movieId?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    size?: SortOrder
    source?: SortOrder
    type?: SortOrder
    movieId?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    kpId?: SortOrder
    size?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type EnumVideoSourceWithAggregatesFilter = {
    equals?: VideoSource
    in?: Enumerable<VideoSource>
    notIn?: Enumerable<VideoSource>
    not?: NestedEnumVideoSourceWithAggregatesFilter | VideoSource
    _count?: NestedIntFilter
    _min?: NestedEnumVideoSourceFilter
    _max?: NestedEnumVideoSourceFilter
  }

  export type EnumVideoTypeNullableWithAggregatesFilter = {
    equals?: VideoType | null
    in?: Enumerable<VideoType> | null
    notIn?: Enumerable<VideoType> | null
    not?: NestedEnumVideoTypeNullableWithAggregatesFilter | VideoType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumVideoTypeNullableFilter
    _max?: NestedEnumVideoTypeNullableFilter
    isSet?: boolean
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type EnumImageTypeFilter = {
    equals?: ImageType
    in?: Enumerable<ImageType>
    notIn?: Enumerable<ImageType>
    not?: NestedEnumImageTypeFilter | ImageType
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    url?: SortOrder
    language?: SortOrder
    previewUrl?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    movieKpId?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    url?: SortOrder
    language?: SortOrder
    previewUrl?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    url?: SortOrder
    language?: SortOrder
    previewUrl?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    movieKpId?: SortOrder
    kpMovieId?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type EnumImageTypeWithAggregatesFilter = {
    equals?: ImageType
    in?: Enumerable<ImageType>
    notIn?: Enumerable<ImageType>
    not?: NestedEnumImageTypeWithAggregatesFilter | ImageType
    _count?: NestedIntFilter
    _min?: NestedEnumImageTypeFilter
    _max?: NestedEnumImageTypeFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SeasonEpisodeCompositeListFilter = {
    equals?: Enumerable<SeasonEpisodeObjectEqualityInput>
    every?: SeasonEpisodeWhereInput
    some?: SeasonEpisodeWhereInput
    none?: SeasonEpisodeWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type SeasonEpisodeObjectEqualityInput = {
    date?: Date | string | null
    description?: string | null
    enName?: string | null
    name?: string | null
    number: number
  }

  export type SeasonEpisodeOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonCountOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type SeasonAvgOrderByAggregateInput = {
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
  }

  export type SeasonMaxOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type SeasonMinOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type SeasonSumOrderByAggregateInput = {
    movieKpId?: SortOrder
    episodesCount?: SortOrder
    number?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    kpMovieId?: SortOrder
    author?: SortOrder
    review?: SortOrder
    title?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    kpMovieId?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    kpMovieId?: SortOrder
    author?: SortOrder
    review?: SortOrder
    title?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    kpMovieId?: SortOrder
    author?: SortOrder
    review?: SortOrder
    title?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    kpMovieId?: SortOrder
    reviewDislikes?: SortOrder
    reviewLikes?: SortOrder
    userRating?: SortOrder
  }

  export type EnumPersonSexNullableFilter = {
    equals?: PersonSex | null
    in?: Enumerable<PersonSex> | null
    notIn?: Enumerable<PersonSex> | null
    not?: NestedEnumPersonSexNullableFilter | PersonSex | null
    isSet?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type EnumProfessionTypeNullableListFilter = {
    equals?: Enumerable<ProfessionType> | null
    has?: ProfessionType | null
    hasEvery?: Enumerable<ProfessionType>
    hasSome?: Enumerable<ProfessionType>
    isEmpty?: boolean
  }

  export type PersonSpousesCompositeListFilter = {
    equals?: Enumerable<PersonSpousesObjectEqualityInput>
    every?: PersonSpousesWhereInput
    some?: PersonSpousesWhereInput
    none?: PersonSpousesWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type PersonSpousesObjectEqualityInput = {
    children: number
    divorced: boolean
    divorcedReason: DivorcedReason
    name: string
    relation: PersonRelation
    sex?: PersonSex | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type MovieOnPersonListRelationFilter = {
    every?: MovieOnPersonWhereInput
    some?: MovieOnPersonWhereInput
    none?: MovieOnPersonWhereInput
  }

  export type PersonFactListRelationFilter = {
    every?: PersonFactWhereInput
    some?: PersonFactWhereInput
    none?: PersonFactWhereInput
  }

  export type PersonSpousesOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOnPersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonFactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    enName?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    sex?: SortOrder
    birthPlace?: SortOrder
    deathPlace?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
    profession?: SortOrder
    birthday?: SortOrder
    death?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    kpId?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    enName?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
    birthday?: SortOrder
    death?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    enName?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    sex?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
    birthday?: SortOrder
    death?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    kpId?: SortOrder
    age?: SortOrder
    countAwards?: SortOrder
    growth?: SortOrder
  }

  export type EnumPersonSexNullableWithAggregatesFilter = {
    equals?: PersonSex | null
    in?: Enumerable<PersonSex> | null
    notIn?: Enumerable<PersonSex> | null
    not?: NestedEnumPersonSexNullableWithAggregatesFilter | PersonSex | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPersonSexNullableFilter
    _max?: NestedEnumPersonSexNullableFilter
    isSet?: boolean
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type MovieOnPersonCountOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    kpMovieId?: SortOrder
    description?: SortOrder
    profession?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    personId?: SortOrder
  }

  export type MovieOnPersonAvgOrderByAggregateInput = {
    kpId?: SortOrder
    kpMovieId?: SortOrder
  }

  export type MovieOnPersonMaxOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    kpMovieId?: SortOrder
    description?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    personId?: SortOrder
  }

  export type MovieOnPersonMinOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    kpMovieId?: SortOrder
    description?: SortOrder
    assignedAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
    personId?: SortOrder
  }

  export type MovieOnPersonSumOrderByAggregateInput = {
    kpId?: SortOrder
    kpMovieId?: SortOrder
  }

  export type PersonFactCountOrderByAggregateInput = {
    id?: SortOrder
    personKpId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
  }

  export type PersonFactAvgOrderByAggregateInput = {
    personKpId?: SortOrder
  }

  export type PersonFactMaxOrderByAggregateInput = {
    id?: SortOrder
    personKpId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
  }

  export type PersonFactMinOrderByAggregateInput = {
    id?: SortOrder
    personKpId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personId?: SortOrder
  }

  export type PersonFactSumOrderByAggregateInput = {
    personKpId?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
    isSet?: boolean
  }

  export type MovieFactCountOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    spoiler?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieFactAvgOrderByAggregateInput = {
    movieKpId?: SortOrder
  }

  export type MovieFactMaxOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    spoiler?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieFactMinOrderByAggregateInput = {
    id?: SortOrder
    movieKpId?: SortOrder
    spoiler?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieFactSumOrderByAggregateInput = {
    movieKpId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    isSet?: boolean
  }

  export type MovieExternalIdCompositeFilter = {
    equals?: MovieExternalIdObjectEqualityInput
    is?: MovieExternalIdWhereInput
    isNot?: MovieExternalIdWhereInput
  }

  export type MovieExternalIdObjectEqualityInput = {
    imdb?: string | null
    tmdb?: number | null
    kpHD?: string | null
  }

  export type EnumMovieTypeNullableFilter = {
    equals?: MovieType | null
    in?: Enumerable<MovieType> | null
    notIn?: Enumerable<MovieType> | null
    not?: NestedEnumMovieTypeNullableFilter | MovieType | null
    isSet?: boolean
  }

  export type EnumMovieStatusNullableFilter = {
    equals?: MovieStatus | null
    in?: Enumerable<MovieStatus> | null
    notIn?: Enumerable<MovieStatus> | null
    not?: NestedEnumMovieStatusNullableFilter | MovieStatus | null
    isSet?: boolean
  }

  export type MovieNameItemCompositeListFilter = {
    equals?: Enumerable<MovieNameItemObjectEqualityInput>
    every?: MovieNameItemWhereInput
    some?: MovieNameItemWhereInput
    none?: MovieNameItemWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type MovieNameItemObjectEqualityInput = {
    name: string
  }

  export type MovieRatingCompositeFilter = {
    equals?: MovieRatingObjectEqualityInput
    is?: MovieRatingWhereInput
    isNot?: MovieRatingWhereInput
  }

  export type MovieRatingObjectEqualityInput = {
    kp: number
    imdb: number
    await?: number | null
    filmCritics?: number | null
    russianFilmCritics?: number | null
    tmdb?: number | null
  }

  export type MovieBudgetNullableCompositeFilter = {
    equals?: MovieBudgetObjectEqualityInput | null
    is?: MovieBudgetWhereInput | null
    isNot?: MovieBudgetWhereInput | null
    isSet?: boolean
  }

  export type MovieBudgetObjectEqualityInput = {
    currency?: string | null
    value: string
  }

  export type MovieDistributorsNullableCompositeFilter = {
    equals?: MovieDistributorsObjectEqualityInput | null
    is?: MovieDistributorsWhereInput | null
    isNot?: MovieDistributorsWhereInput | null
    isSet?: boolean
  }

  export type MovieDistributorsObjectEqualityInput = {
    distributor?: string | null
    distributorRelease?: string | null
  }

  export type MovieVotesCompositeFilter = {
    equals?: MovieVotesObjectEqualityInput
    is?: MovieVotesWhereInput
    isNot?: MovieVotesWhereInput
  }

  export type MovieVotesObjectEqualityInput = {
    await?: number | null
    filmCritics?: number | null
    imdb: number
    kp: number
    russianFilmCritics?: number | null
    tmdb?: number | null
  }

  export type MovieFeesNullableCompositeFilter = {
    equals?: MovieFeesObjectEqualityInput | null
    is?: MovieFeesWhereInput | null
    isNot?: MovieFeesWhereInput | null
    isSet?: boolean
  }

  export type MovieFeesObjectEqualityInput = {
    usa?: MovieFeesItemObjectEqualityInput | null
    world?: MovieFeesItemObjectEqualityInput | null
    russia?: MovieFeesItemObjectEqualityInput | null
  }

  export type MoviePremiereNullableCompositeFilter = {
    equals?: MoviePremiereObjectEqualityInput | null
    is?: MoviePremiereWhereInput | null
    isNot?: MoviePremiereWhereInput | null
    isSet?: boolean
  }

  export type MoviePremiereObjectEqualityInput = {
    country?: string | null
    bluray?: Date | string | null
    cinema?: Date | string | null
    digital?: Date | string | null
    dvd?: Date | string | null
    russia?: Date | string | null
    world?: Date | string | null
  }

  export type MovieTechnologyNullableCompositeFilter = {
    equals?: MovieTechnologyObjectEqualityInput | null
    is?: MovieTechnologyWhereInput | null
    isNot?: MovieTechnologyWhereInput | null
    isSet?: boolean
  }

  export type MovieTechnologyObjectEqualityInput = {
    has3D: boolean
    hasImax: boolean
  }

  export type MovieWatchabilityNullableCompositeFilter = {
    equals?: MovieWatchabilityObjectEqualityInput | null
    is?: MovieWatchabilityWhereInput | null
    isNot?: MovieWatchabilityWhereInput | null
    isSet?: boolean
  }

  export type MovieWatchabilityObjectEqualityInput = {
    items?: Enumerable<MovieWatchabilityItemsObjectEqualityInput>
  }

  export type MovieReleaseYearsCompositeListFilter = {
    equals?: Enumerable<MovieReleaseYearsObjectEqualityInput>
    every?: MovieReleaseYearsWhereInput
    some?: MovieReleaseYearsWhereInput
    none?: MovieReleaseYearsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type MovieReleaseYearsObjectEqualityInput = {
    start: number
    end?: number | null
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type SeasonListRelationFilter = {
    every?: SeasonWhereInput
    some?: SeasonWhereInput
    none?: SeasonWhereInput
  }

  export type MovieFactListRelationFilter = {
    every?: MovieFactWhereInput
    some?: MovieFactWhereInput
    none?: MovieFactWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieExternalIdOrderByInput = {
    imdb?: SortOrder
    tmdb?: SortOrder
    kpHD?: SortOrder
  }

  export type MovieNameItemOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type MovieRatingOrderByInput = {
    kp?: SortOrder
    imdb?: SortOrder
    await?: SortOrder
    filmCritics?: SortOrder
    russianFilmCritics?: SortOrder
    tmdb?: SortOrder
  }

  export type MovieBudgetOrderByInput = {
    currency?: SortOrder
    value?: SortOrder
  }

  export type MovieDistributorsOrderByInput = {
    distributor?: SortOrder
    distributorRelease?: SortOrder
  }

  export type MovieVotesOrderByInput = {
    await?: SortOrder
    filmCritics?: SortOrder
    imdb?: SortOrder
    kp?: SortOrder
    russianFilmCritics?: SortOrder
    tmdb?: SortOrder
  }

  export type MovieFeesOrderByInput = {
    usa?: MovieFeesItemOrderByInput
    world?: MovieFeesItemOrderByInput
    russia?: MovieFeesItemOrderByInput
  }

  export type MoviePremiereOrderByInput = {
    country?: SortOrder
    bluray?: SortOrder
    cinema?: SortOrder
    digital?: SortOrder
    dvd?: SortOrder
    russia?: SortOrder
    world?: SortOrder
  }

  export type MovieTechnologyOrderByInput = {
    has3D?: SortOrder
    hasImax?: SortOrder
  }

  export type MovieWatchabilityOrderByInput = {
    items?: MovieWatchabilityItemsOrderByCompositeAggregateInput
  }

  export type MovieReleaseYearsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeasonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieFactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    names?: SortOrder
    enName?: SortOrder
    alternativeName?: SortOrder
    description?: SortOrder
    ratingMpaa?: SortOrder
    shortDescription?: SortOrder
    slogan?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    kpId?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    alternativeName?: SortOrder
    description?: SortOrder
    ratingMpaa?: SortOrder
    shortDescription?: SortOrder
    slogan?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    kpId?: SortOrder
    name?: SortOrder
    enName?: SortOrder
    alternativeName?: SortOrder
    description?: SortOrder
    ratingMpaa?: SortOrder
    shortDescription?: SortOrder
    slogan?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
    type?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    kpId?: SortOrder
    year?: SortOrder
    movieLength?: SortOrder
    ageRating?: SortOrder
    top10?: SortOrder
    top250?: SortOrder
  }

  export type EnumMovieTypeNullableWithAggregatesFilter = {
    equals?: MovieType | null
    in?: Enumerable<MovieType> | null
    notIn?: Enumerable<MovieType> | null
    not?: NestedEnumMovieTypeNullableWithAggregatesFilter | MovieType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMovieTypeNullableFilter
    _max?: NestedEnumMovieTypeNullableFilter
    isSet?: boolean
  }

  export type EnumMovieStatusNullableWithAggregatesFilter = {
    equals?: MovieStatus | null
    in?: Enumerable<MovieStatus> | null
    notIn?: Enumerable<MovieStatus> | null
    not?: NestedEnumMovieStatusNullableWithAggregatesFilter | MovieStatus | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMovieStatusNullableFilter
    _max?: NestedEnumMovieStatusNullableFilter
    isSet?: boolean
  }

  export type MovieCreateNestedOneWithoutVideosInput = {
    create?: XOR<MovieCreateWithoutVideosInput, MovieUncheckedCreateWithoutVideosInput>
    connectOrCreate?: MovieCreateOrConnectWithoutVideosInput
    connect?: MovieWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type EnumVideoSourceFieldUpdateOperationsInput = {
    set?: VideoSource
  }

  export type NullableEnumVideoTypeFieldUpdateOperationsInput = {
    set?: VideoType | null
    unset?: boolean
  }

  export type MovieUpdateOneRequiredWithoutVideosNestedInput = {
    create?: XOR<MovieCreateWithoutVideosInput, MovieUncheckedCreateWithoutVideosInput>
    connectOrCreate?: MovieCreateOrConnectWithoutVideosInput
    upsert?: MovieUpsertWithoutVideosInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutVideosInput, MovieUncheckedUpdateWithoutVideosInput>
  }

  export type MovieCreateNestedOneWithoutImagesInput = {
    create?: XOR<MovieCreateWithoutImagesInput, MovieUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutImagesInput
    connect?: MovieWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumImageTypeFieldUpdateOperationsInput = {
    set?: ImageType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MovieUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<MovieCreateWithoutImagesInput, MovieUncheckedCreateWithoutImagesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutImagesInput
    upsert?: MovieUpsertWithoutImagesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutImagesInput, MovieUncheckedUpdateWithoutImagesInput>
  }

  export type SeasonEpisodeListCreateEnvelopeInput = {
    set?: Enumerable<SeasonEpisodeCreateInput>
  }

  export type SeasonEpisodeCreateInput = {
    date?: Date | string | null
    description?: string | null
    enName?: string | null
    name?: string | null
    number: number
  }

  export type MovieCreateNestedOneWithoutSeasonsInput = {
    create?: XOR<MovieCreateWithoutSeasonsInput, MovieUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutSeasonsInput
    connect?: MovieWhereUniqueInput
  }

  export type SeasonEpisodeListUpdateEnvelopeInput = {
    set?: Enumerable<SeasonEpisodeCreateInput>
    push?: Enumerable<SeasonEpisodeCreateInput>
    updateMany?: SeasonEpisodeUpdateManyInput
    deleteMany?: SeasonEpisodeDeleteManyInput
  }

  export type MovieUpdateOneRequiredWithoutSeasonsNestedInput = {
    create?: XOR<MovieCreateWithoutSeasonsInput, MovieUncheckedCreateWithoutSeasonsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutSeasonsInput
    upsert?: MovieUpsertWithoutSeasonsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutSeasonsInput, MovieUncheckedUpdateWithoutSeasonsInput>
  }

  export type MovieCreateNestedOneWithoutReviewInput = {
    create?: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
    connectOrCreate?: MovieCreateOrConnectWithoutReviewInput
    upsert?: MovieUpsertWithoutReviewInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutReviewInput, MovieUncheckedUpdateWithoutReviewInput>
  }

  export type PersonCreatebirthPlaceInput = {
    set: Enumerable<string>
  }

  export type PersonCreatedeathPlaceInput = {
    set: Enumerable<string>
  }

  export type PersonCreateprofessionInput = {
    set: Enumerable<ProfessionType>
  }

  export type PersonSpousesListCreateEnvelopeInput = {
    set?: Enumerable<PersonSpousesCreateInput>
  }

  export type PersonSpousesCreateInput = {
    children: number
    divorced: boolean
    divorcedReason: DivorcedReason
    name: string
    relation: PersonRelation
    sex?: PersonSex | null
  }

  export type MovieOnPersonCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutPersonInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutPersonInput>
    createMany?: MovieOnPersonCreateManyPersonInputEnvelope
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
  }

  export type PersonFactCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<PersonFactCreateWithoutPersonInput>, Enumerable<PersonFactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<PersonFactCreateOrConnectWithoutPersonInput>
    createMany?: PersonFactCreateManyPersonInputEnvelope
    connect?: Enumerable<PersonFactWhereUniqueInput>
  }

  export type MovieOnPersonUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutPersonInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutPersonInput>
    createMany?: MovieOnPersonCreateManyPersonInputEnvelope
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
  }

  export type PersonFactUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<PersonFactCreateWithoutPersonInput>, Enumerable<PersonFactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<PersonFactCreateOrConnectWithoutPersonInput>
    createMany?: PersonFactCreateManyPersonInputEnvelope
    connect?: Enumerable<PersonFactWhereUniqueInput>
  }

  export type NullableEnumPersonSexFieldUpdateOperationsInput = {
    set?: PersonSex | null
    unset?: boolean
  }

  export type PersonUpdatebirthPlaceInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type PersonUpdatedeathPlaceInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type PersonUpdateprofessionInput = {
    set?: Enumerable<ProfessionType>
    push?: Enumerable<ProfessionType>
  }

  export type PersonSpousesListUpdateEnvelopeInput = {
    set?: Enumerable<PersonSpousesCreateInput>
    push?: Enumerable<PersonSpousesCreateInput>
    updateMany?: PersonSpousesUpdateManyInput
    deleteMany?: PersonSpousesDeleteManyInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type MovieOnPersonUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutPersonInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<MovieOnPersonUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: MovieOnPersonCreateManyPersonInputEnvelope
    set?: Enumerable<MovieOnPersonWhereUniqueInput>
    disconnect?: Enumerable<MovieOnPersonWhereUniqueInput>
    delete?: Enumerable<MovieOnPersonWhereUniqueInput>
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
    update?: Enumerable<MovieOnPersonUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<MovieOnPersonUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<MovieOnPersonScalarWhereInput>
  }

  export type PersonFactUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<PersonFactCreateWithoutPersonInput>, Enumerable<PersonFactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<PersonFactCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<PersonFactUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: PersonFactCreateManyPersonInputEnvelope
    set?: Enumerable<PersonFactWhereUniqueInput>
    disconnect?: Enumerable<PersonFactWhereUniqueInput>
    delete?: Enumerable<PersonFactWhereUniqueInput>
    connect?: Enumerable<PersonFactWhereUniqueInput>
    update?: Enumerable<PersonFactUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<PersonFactUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<PersonFactScalarWhereInput>
  }

  export type MovieOnPersonUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutPersonInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<MovieOnPersonUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: MovieOnPersonCreateManyPersonInputEnvelope
    set?: Enumerable<MovieOnPersonWhereUniqueInput>
    disconnect?: Enumerable<MovieOnPersonWhereUniqueInput>
    delete?: Enumerable<MovieOnPersonWhereUniqueInput>
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
    update?: Enumerable<MovieOnPersonUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<MovieOnPersonUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<MovieOnPersonScalarWhereInput>
  }

  export type PersonFactUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<PersonFactCreateWithoutPersonInput>, Enumerable<PersonFactUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<PersonFactCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<PersonFactUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: PersonFactCreateManyPersonInputEnvelope
    set?: Enumerable<PersonFactWhereUniqueInput>
    disconnect?: Enumerable<PersonFactWhereUniqueInput>
    delete?: Enumerable<PersonFactWhereUniqueInput>
    connect?: Enumerable<PersonFactWhereUniqueInput>
    update?: Enumerable<PersonFactUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<PersonFactUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<PersonFactScalarWhereInput>
  }

  export type MovieOnPersonCreateprofessionInput = {
    set: Enumerable<ProfessionType>
  }

  export type MovieCreateNestedOneWithoutPersonsInput = {
    create?: XOR<MovieCreateWithoutPersonsInput, MovieUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutPersonsInput
    connect?: MovieWhereUniqueInput
  }

  export type PersonCreateNestedOneWithoutMoviesInput = {
    create?: XOR<PersonCreateWithoutMoviesInput, PersonUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMoviesInput
    connect?: PersonWhereUniqueInput
  }

  export type MovieOnPersonUpdateprofessionInput = {
    set?: Enumerable<ProfessionType>
    push?: Enumerable<ProfessionType>
  }

  export type MovieUpdateOneRequiredWithoutPersonsNestedInput = {
    create?: XOR<MovieCreateWithoutPersonsInput, MovieUncheckedCreateWithoutPersonsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutPersonsInput
    upsert?: MovieUpsertWithoutPersonsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutPersonsInput, MovieUncheckedUpdateWithoutPersonsInput>
  }

  export type PersonUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<PersonCreateWithoutMoviesInput, PersonUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: PersonCreateOrConnectWithoutMoviesInput
    upsert?: PersonUpsertWithoutMoviesInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutMoviesInput, PersonUncheckedUpdateWithoutMoviesInput>
  }

  export type PersonCreateNestedOneWithoutFactsInput = {
    create?: XOR<PersonCreateWithoutFactsInput, PersonUncheckedCreateWithoutFactsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutFactsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutFactsNestedInput = {
    create?: XOR<PersonCreateWithoutFactsInput, PersonUncheckedCreateWithoutFactsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutFactsInput
    upsert?: PersonUpsertWithoutFactsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutFactsInput, PersonUncheckedUpdateWithoutFactsInput>
  }

  export type MovieCreateNestedOneWithoutFactsInput = {
    create?: XOR<MovieCreateWithoutFactsInput, MovieUncheckedCreateWithoutFactsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutFactsInput
    connect?: MovieWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
    unset?: boolean
  }

  export type MovieUpdateOneRequiredWithoutFactsNestedInput = {
    create?: XOR<MovieCreateWithoutFactsInput, MovieUncheckedCreateWithoutFactsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutFactsInput
    upsert?: MovieUpsertWithoutFactsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutFactsInput, MovieUncheckedUpdateWithoutFactsInput>
  }

  export type MovieExternalIdCreateEnvelopeInput = {
    set?: MovieExternalIdCreateInput
  }

  export type MovieExternalIdCreateInput = {
    imdb?: string | null
    tmdb?: number | null
    kpHD?: string | null
  }

  export type MovieCreatenamesInput = {
    set: Enumerable<string>
  }

  export type MovieNameItemListCreateEnvelopeInput = {
    set?: Enumerable<MovieNameItemCreateInput>
  }

  export type MovieNameItemCreateInput = {
    name: string
  }

  export type MovieRatingCreateEnvelopeInput = {
    set?: MovieRatingCreateInput
  }

  export type MovieRatingCreateInput = {
    kp: number
    imdb: number
    await?: number | null
    filmCritics?: number | null
    russianFilmCritics?: number | null
    tmdb?: number | null
  }

  export type MovieBudgetNullableCreateEnvelopeInput = {
    set?: MovieBudgetCreateInput | null
  }

  export type MovieBudgetCreateInput = {
    currency?: string | null
    value: string
  }

  export type MovieDistributorsNullableCreateEnvelopeInput = {
    set?: MovieDistributorsCreateInput | null
  }

  export type MovieDistributorsCreateInput = {
    distributor?: string | null
    distributorRelease?: string | null
  }

  export type MovieVotesCreateEnvelopeInput = {
    set?: MovieVotesCreateInput
  }

  export type MovieVotesCreateInput = {
    await?: number | null
    filmCritics?: number | null
    imdb: number
    kp: number
    russianFilmCritics?: number | null
    tmdb?: number | null
  }

  export type MovieFeesNullableCreateEnvelopeInput = {
    set?: MovieFeesCreateInput | null
  }

  export type MovieFeesCreateInput = {
    usa?: MovieFeesItemCreateInput | null
    world?: MovieFeesItemCreateInput | null
    russia?: MovieFeesItemCreateInput | null
  }

  export type MoviePremiereNullableCreateEnvelopeInput = {
    set?: MoviePremiereCreateInput | null
  }

  export type MoviePremiereCreateInput = {
    country?: string | null
    bluray?: Date | string | null
    cinema?: Date | string | null
    digital?: Date | string | null
    dvd?: Date | string | null
    russia?: Date | string | null
    world?: Date | string | null
  }

  export type MovieTechnologyNullableCreateEnvelopeInput = {
    set?: MovieTechnologyCreateInput | null
  }

  export type MovieTechnologyCreateInput = {
    has3D: boolean
    hasImax: boolean
  }

  export type MovieWatchabilityNullableCreateEnvelopeInput = {
    set?: MovieWatchabilityCreateInput | null
  }

  export type MovieWatchabilityCreateInput = {
    items?: Enumerable<MovieWatchabilityItemsCreateInput>
  }

  export type MovieReleaseYearsListCreateEnvelopeInput = {
    set?: Enumerable<MovieReleaseYearsCreateInput>
  }

  export type MovieReleaseYearsCreateInput = {
    start: number
    end?: number | null
  }

  export type ImageCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<ImageCreateWithoutMovieInput>, Enumerable<ImageUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutMovieInput>
    createMany?: ImageCreateManyMovieInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type VideoCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<VideoCreateWithoutMovieInput>, Enumerable<VideoUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutMovieInput>
    createMany?: VideoCreateManyMovieInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type SeasonCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<SeasonCreateWithoutMovieInput>, Enumerable<SeasonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<SeasonCreateOrConnectWithoutMovieInput>
    createMany?: SeasonCreateManyMovieInputEnvelope
    connect?: Enumerable<SeasonWhereUniqueInput>
  }

  export type MovieOnPersonCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutMovieInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutMovieInput>
    createMany?: MovieOnPersonCreateManyMovieInputEnvelope
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
  }

  export type MovieFactCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<MovieFactCreateWithoutMovieInput>, Enumerable<MovieFactUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieFactCreateOrConnectWithoutMovieInput>
    createMany?: MovieFactCreateManyMovieInputEnvelope
    connect?: Enumerable<MovieFactWhereUniqueInput>
  }

  export type ReviewCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutMovieInput>, Enumerable<ReviewUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutMovieInput>
    createMany?: ReviewCreateManyMovieInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type MovieCreateNestedOneWithoutSequelsAndPrequelsInput = {
    create?: XOR<MovieCreateWithoutSequelsAndPrequelsInput, MovieUncheckedCreateWithoutSequelsAndPrequelsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutSequelsAndPrequelsInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSequelsAndPrequelsInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSequelsAndPrequelsInput>
    createMany?: MovieCreateManyMovieHavingSequelsAndPrequelsInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieCreateNestedOneWithoutSimilarMoviesInput = {
    create?: XOR<MovieCreateWithoutSimilarMoviesInput, MovieUncheckedCreateWithoutSimilarMoviesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutSimilarMoviesInput
    connect?: MovieWhereUniqueInput
  }

  export type MovieCreateNestedManyWithoutMovieHavingSimilarInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSimilarInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSimilarInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSimilarInput>
    createMany?: MovieCreateManyMovieHavingSimilarInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type ImageUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<ImageCreateWithoutMovieInput>, Enumerable<ImageUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutMovieInput>
    createMany?: ImageCreateManyMovieInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type VideoUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<VideoCreateWithoutMovieInput>, Enumerable<VideoUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutMovieInput>
    createMany?: VideoCreateManyMovieInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type SeasonUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<SeasonCreateWithoutMovieInput>, Enumerable<SeasonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<SeasonCreateOrConnectWithoutMovieInput>
    createMany?: SeasonCreateManyMovieInputEnvelope
    connect?: Enumerable<SeasonWhereUniqueInput>
  }

  export type MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutMovieInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutMovieInput>
    createMany?: MovieOnPersonCreateManyMovieInputEnvelope
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
  }

  export type MovieFactUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<MovieFactCreateWithoutMovieInput>, Enumerable<MovieFactUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieFactCreateOrConnectWithoutMovieInput>
    createMany?: MovieFactCreateManyMovieInputEnvelope
    connect?: Enumerable<MovieFactWhereUniqueInput>
  }

  export type ReviewUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutMovieInput>, Enumerable<ReviewUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutMovieInput>
    createMany?: ReviewCreateManyMovieInputEnvelope
    connect?: Enumerable<ReviewWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSequelsAndPrequelsInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSequelsAndPrequelsInput>
    createMany?: MovieCreateManyMovieHavingSequelsAndPrequelsInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSimilarInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSimilarInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSimilarInput>
    createMany?: MovieCreateManyMovieHavingSimilarInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieExternalIdUpdateEnvelopeInput = {
    set?: MovieExternalIdCreateInput
    update?: MovieExternalIdUpdateInput
  }

  export type MovieUpdatenamesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type NullableEnumMovieTypeFieldUpdateOperationsInput = {
    set?: MovieType | null
    unset?: boolean
  }

  export type NullableEnumMovieStatusFieldUpdateOperationsInput = {
    set?: MovieStatus | null
    unset?: boolean
  }

  export type MovieNameItemListUpdateEnvelopeInput = {
    set?: Enumerable<MovieNameItemCreateInput>
    push?: Enumerable<MovieNameItemCreateInput>
    updateMany?: MovieNameItemUpdateManyInput
    deleteMany?: MovieNameItemDeleteManyInput
  }

  export type MovieRatingUpdateEnvelopeInput = {
    set?: MovieRatingCreateInput
    update?: MovieRatingUpdateInput
  }

  export type MovieBudgetNullableUpdateEnvelopeInput = {
    set?: MovieBudgetCreateInput | null
    upsert?: MovieBudgetUpsertInput
    unset?: boolean
  }

  export type MovieDistributorsNullableUpdateEnvelopeInput = {
    set?: MovieDistributorsCreateInput | null
    upsert?: MovieDistributorsUpsertInput
    unset?: boolean
  }

  export type MovieVotesUpdateEnvelopeInput = {
    set?: MovieVotesCreateInput
    update?: MovieVotesUpdateInput
  }

  export type MovieFeesNullableUpdateEnvelopeInput = {
    set?: MovieFeesCreateInput | null
    upsert?: MovieFeesUpsertInput
    unset?: boolean
  }

  export type MoviePremiereNullableUpdateEnvelopeInput = {
    set?: MoviePremiereCreateInput | null
    upsert?: MoviePremiereUpsertInput
    unset?: boolean
  }

  export type MovieTechnologyNullableUpdateEnvelopeInput = {
    set?: MovieTechnologyCreateInput | null
    upsert?: MovieTechnologyUpsertInput
    unset?: boolean
  }

  export type MovieWatchabilityNullableUpdateEnvelopeInput = {
    set?: MovieWatchabilityCreateInput | null
    upsert?: MovieWatchabilityUpsertInput
    unset?: boolean
  }

  export type MovieReleaseYearsListUpdateEnvelopeInput = {
    set?: Enumerable<MovieReleaseYearsCreateInput>
    push?: Enumerable<MovieReleaseYearsCreateInput>
    updateMany?: MovieReleaseYearsUpdateManyInput
    deleteMany?: MovieReleaseYearsDeleteManyInput
  }

  export type ImageUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutMovieInput>, Enumerable<ImageUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: ImageCreateManyMovieInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type VideoUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutMovieInput>, Enumerable<VideoUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: VideoCreateManyMovieInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type SeasonUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<SeasonCreateWithoutMovieInput>, Enumerable<SeasonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<SeasonCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<SeasonUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: SeasonCreateManyMovieInputEnvelope
    set?: Enumerable<SeasonWhereUniqueInput>
    disconnect?: Enumerable<SeasonWhereUniqueInput>
    delete?: Enumerable<SeasonWhereUniqueInput>
    connect?: Enumerable<SeasonWhereUniqueInput>
    update?: Enumerable<SeasonUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<SeasonUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<SeasonScalarWhereInput>
  }

  export type MovieOnPersonUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutMovieInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<MovieOnPersonUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: MovieOnPersonCreateManyMovieInputEnvelope
    set?: Enumerable<MovieOnPersonWhereUniqueInput>
    disconnect?: Enumerable<MovieOnPersonWhereUniqueInput>
    delete?: Enumerable<MovieOnPersonWhereUniqueInput>
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
    update?: Enumerable<MovieOnPersonUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<MovieOnPersonUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<MovieOnPersonScalarWhereInput>
  }

  export type MovieFactUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<MovieFactCreateWithoutMovieInput>, Enumerable<MovieFactUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieFactCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<MovieFactUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: MovieFactCreateManyMovieInputEnvelope
    set?: Enumerable<MovieFactWhereUniqueInput>
    disconnect?: Enumerable<MovieFactWhereUniqueInput>
    delete?: Enumerable<MovieFactWhereUniqueInput>
    connect?: Enumerable<MovieFactWhereUniqueInput>
    update?: Enumerable<MovieFactUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<MovieFactUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<MovieFactScalarWhereInput>
  }

  export type ReviewUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutMovieInput>, Enumerable<ReviewUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: ReviewCreateManyMovieInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput = {
    create?: XOR<MovieCreateWithoutSequelsAndPrequelsInput, MovieUncheckedCreateWithoutSequelsAndPrequelsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutSequelsAndPrequelsInput
    upsert?: MovieUpsertWithoutSequelsAndPrequelsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutSequelsAndPrequelsInput, MovieUncheckedUpdateWithoutSequelsAndPrequelsInput>
  }

  export type MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSequelsAndPrequelsInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSequelsAndPrequelsInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutMovieHavingSequelsAndPrequelsInput>
    createMany?: MovieCreateManyMovieHavingSequelsAndPrequelsInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutMovieHavingSequelsAndPrequelsInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutMovieHavingSequelsAndPrequelsInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput = {
    create?: XOR<MovieCreateWithoutSimilarMoviesInput, MovieUncheckedCreateWithoutSimilarMoviesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutSimilarMoviesInput
    upsert?: MovieUpsertWithoutSimilarMoviesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutSimilarMoviesInput, MovieUncheckedUpdateWithoutSimilarMoviesInput>
  }

  export type MovieUpdateManyWithoutMovieHavingSimilarNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSimilarInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSimilarInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSimilarInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutMovieHavingSimilarInput>
    createMany?: MovieCreateManyMovieHavingSimilarInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutMovieHavingSimilarInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutMovieHavingSimilarInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type ImageUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutMovieInput>, Enumerable<ImageUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: ImageCreateManyMovieInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type VideoUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutMovieInput>, Enumerable<VideoUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: VideoCreateManyMovieInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type SeasonUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<SeasonCreateWithoutMovieInput>, Enumerable<SeasonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<SeasonCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<SeasonUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: SeasonCreateManyMovieInputEnvelope
    set?: Enumerable<SeasonWhereUniqueInput>
    disconnect?: Enumerable<SeasonWhereUniqueInput>
    delete?: Enumerable<SeasonWhereUniqueInput>
    connect?: Enumerable<SeasonWhereUniqueInput>
    update?: Enumerable<SeasonUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<SeasonUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<SeasonScalarWhereInput>
  }

  export type MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<MovieOnPersonCreateWithoutMovieInput>, Enumerable<MovieOnPersonUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieOnPersonCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<MovieOnPersonUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: MovieOnPersonCreateManyMovieInputEnvelope
    set?: Enumerable<MovieOnPersonWhereUniqueInput>
    disconnect?: Enumerable<MovieOnPersonWhereUniqueInput>
    delete?: Enumerable<MovieOnPersonWhereUniqueInput>
    connect?: Enumerable<MovieOnPersonWhereUniqueInput>
    update?: Enumerable<MovieOnPersonUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<MovieOnPersonUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<MovieOnPersonScalarWhereInput>
  }

  export type MovieFactUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<MovieFactCreateWithoutMovieInput>, Enumerable<MovieFactUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieFactCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<MovieFactUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: MovieFactCreateManyMovieInputEnvelope
    set?: Enumerable<MovieFactWhereUniqueInput>
    disconnect?: Enumerable<MovieFactWhereUniqueInput>
    delete?: Enumerable<MovieFactWhereUniqueInput>
    connect?: Enumerable<MovieFactWhereUniqueInput>
    update?: Enumerable<MovieFactUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<MovieFactUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<MovieFactScalarWhereInput>
  }

  export type ReviewUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<ReviewCreateWithoutMovieInput>, Enumerable<ReviewUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<ReviewCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<ReviewUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: ReviewCreateManyMovieInputEnvelope
    set?: Enumerable<ReviewWhereUniqueInput>
    disconnect?: Enumerable<ReviewWhereUniqueInput>
    delete?: Enumerable<ReviewWhereUniqueInput>
    connect?: Enumerable<ReviewWhereUniqueInput>
    update?: Enumerable<ReviewUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<ReviewUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<ReviewScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSequelsAndPrequelsInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSequelsAndPrequelsInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutMovieHavingSequelsAndPrequelsInput>
    createMany?: MovieCreateManyMovieHavingSequelsAndPrequelsInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutMovieHavingSequelsAndPrequelsInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutMovieHavingSequelsAndPrequelsInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutMovieHavingSimilarInput>, Enumerable<MovieUncheckedCreateWithoutMovieHavingSimilarInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutMovieHavingSimilarInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutMovieHavingSimilarInput>
    createMany?: MovieCreateManyMovieHavingSimilarInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutMovieHavingSimilarInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutMovieHavingSimilarInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedEnumVideoSourceFilter = {
    equals?: VideoSource
    in?: Enumerable<VideoSource>
    notIn?: Enumerable<VideoSource>
    not?: NestedEnumVideoSourceFilter | VideoSource
  }

  export type NestedEnumVideoTypeNullableFilter = {
    equals?: VideoType | null
    in?: Enumerable<VideoType> | null
    notIn?: Enumerable<VideoType> | null
    not?: NestedEnumVideoTypeNullableFilter | VideoType | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    isSet?: boolean
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type NestedEnumVideoSourceWithAggregatesFilter = {
    equals?: VideoSource
    in?: Enumerable<VideoSource>
    notIn?: Enumerable<VideoSource>
    not?: NestedEnumVideoSourceWithAggregatesFilter | VideoSource
    _count?: NestedIntFilter
    _min?: NestedEnumVideoSourceFilter
    _max?: NestedEnumVideoSourceFilter
  }

  export type NestedEnumVideoTypeNullableWithAggregatesFilter = {
    equals?: VideoType | null
    in?: Enumerable<VideoType> | null
    notIn?: Enumerable<VideoType> | null
    not?: NestedEnumVideoTypeNullableWithAggregatesFilter | VideoType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumVideoTypeNullableFilter
    _max?: NestedEnumVideoTypeNullableFilter
    isSet?: boolean
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
    isSet?: boolean
  }

  export type NestedEnumImageTypeFilter = {
    equals?: ImageType
    in?: Enumerable<ImageType>
    notIn?: Enumerable<ImageType>
    not?: NestedEnumImageTypeFilter | ImageType
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    isSet?: boolean
  }

  export type NestedEnumImageTypeWithAggregatesFilter = {
    equals?: ImageType
    in?: Enumerable<ImageType>
    notIn?: Enumerable<ImageType>
    not?: NestedEnumImageTypeWithAggregatesFilter | ImageType
    _count?: NestedIntFilter
    _min?: NestedEnumImageTypeFilter
    _max?: NestedEnumImageTypeFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SeasonEpisodeWhereInput = {
    AND?: Enumerable<SeasonEpisodeWhereInput>
    OR?: Enumerable<SeasonEpisodeWhereInput>
    NOT?: Enumerable<SeasonEpisodeWhereInput>
    date?: DateTimeNullableFilter | Date | string | null
    description?: StringNullableFilter | string | null
    enName?: StringNullableFilter | string | null
    name?: StringNullableFilter | string | null
    number?: IntFilter | number
  }

  export type NestedEnumPersonSexNullableFilter = {
    equals?: PersonSex | null
    in?: Enumerable<PersonSex> | null
    notIn?: Enumerable<PersonSex> | null
    not?: NestedEnumPersonSexNullableFilter | PersonSex | null
    isSet?: boolean
  }

  export type PersonSpousesWhereInput = {
    AND?: Enumerable<PersonSpousesWhereInput>
    OR?: Enumerable<PersonSpousesWhereInput>
    NOT?: Enumerable<PersonSpousesWhereInput>
    children?: IntFilter | number
    divorced?: BoolFilter | boolean
    divorcedReason?: EnumDivorcedReasonFilter | DivorcedReason
    name?: StringFilter | string
    relation?: EnumPersonRelationFilter | PersonRelation
    sex?: EnumPersonSexNullableFilter | PersonSex | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
    isSet?: boolean
  }

  export type NestedEnumPersonSexNullableWithAggregatesFilter = {
    equals?: PersonSex | null
    in?: Enumerable<PersonSex> | null
    notIn?: Enumerable<PersonSex> | null
    not?: NestedEnumPersonSexNullableWithAggregatesFilter | PersonSex | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPersonSexNullableFilter
    _max?: NestedEnumPersonSexNullableFilter
    isSet?: boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    isSet?: boolean
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
    isSet?: boolean
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    isSet?: boolean
  }

  export type MovieExternalIdWhereInput = {
    AND?: Enumerable<MovieExternalIdWhereInput>
    OR?: Enumerable<MovieExternalIdWhereInput>
    NOT?: Enumerable<MovieExternalIdWhereInput>
    imdb?: StringNullableFilter | string | null
    tmdb?: IntNullableFilter | number | null
    kpHD?: StringNullableFilter | string | null
  }

  export type NestedEnumMovieTypeNullableFilter = {
    equals?: MovieType | null
    in?: Enumerable<MovieType> | null
    notIn?: Enumerable<MovieType> | null
    not?: NestedEnumMovieTypeNullableFilter | MovieType | null
    isSet?: boolean
  }

  export type NestedEnumMovieStatusNullableFilter = {
    equals?: MovieStatus | null
    in?: Enumerable<MovieStatus> | null
    notIn?: Enumerable<MovieStatus> | null
    not?: NestedEnumMovieStatusNullableFilter | MovieStatus | null
    isSet?: boolean
  }

  export type MovieNameItemWhereInput = {
    AND?: Enumerable<MovieNameItemWhereInput>
    OR?: Enumerable<MovieNameItemWhereInput>
    NOT?: Enumerable<MovieNameItemWhereInput>
    name?: StringFilter | string
  }

  export type MovieRatingWhereInput = {
    AND?: Enumerable<MovieRatingWhereInput>
    OR?: Enumerable<MovieRatingWhereInput>
    NOT?: Enumerable<MovieRatingWhereInput>
    kp?: FloatFilter | number
    imdb?: FloatFilter | number
    await?: FloatNullableFilter | number | null
    filmCritics?: FloatNullableFilter | number | null
    russianFilmCritics?: FloatNullableFilter | number | null
    tmdb?: FloatNullableFilter | number | null
  }

  export type MovieBudgetWhereInput = {
    AND?: Enumerable<MovieBudgetWhereInput>
    OR?: Enumerable<MovieBudgetWhereInput>
    NOT?: Enumerable<MovieBudgetWhereInput>
    currency?: StringNullableFilter | string | null
    value?: StringFilter | string
  }

  export type MovieDistributorsWhereInput = {
    AND?: Enumerable<MovieDistributorsWhereInput>
    OR?: Enumerable<MovieDistributorsWhereInput>
    NOT?: Enumerable<MovieDistributorsWhereInput>
    distributor?: StringNullableFilter | string | null
    distributorRelease?: StringNullableFilter | string | null
  }

  export type MovieVotesWhereInput = {
    AND?: Enumerable<MovieVotesWhereInput>
    OR?: Enumerable<MovieVotesWhereInput>
    NOT?: Enumerable<MovieVotesWhereInput>
    await?: IntNullableFilter | number | null
    filmCritics?: IntNullableFilter | number | null
    imdb?: IntFilter | number
    kp?: IntFilter | number
    russianFilmCritics?: IntNullableFilter | number | null
    tmdb?: IntNullableFilter | number | null
  }

  export type MovieFeesWhereInput = {
    AND?: Enumerable<MovieFeesWhereInput>
    OR?: Enumerable<MovieFeesWhereInput>
    NOT?: Enumerable<MovieFeesWhereInput>
    usa?: XOR<MovieFeesItemNullableCompositeFilter, MovieFeesItemObjectEqualityInput> | null
    world?: XOR<MovieFeesItemNullableCompositeFilter, MovieFeesItemObjectEqualityInput> | null
    russia?: XOR<MovieFeesItemNullableCompositeFilter, MovieFeesItemObjectEqualityInput> | null
  }

  export type MovieFeesItemObjectEqualityInput = {
    currency: string
    value: number
  }

  export type MoviePremiereWhereInput = {
    AND?: Enumerable<MoviePremiereWhereInput>
    OR?: Enumerable<MoviePremiereWhereInput>
    NOT?: Enumerable<MoviePremiereWhereInput>
    country?: StringNullableFilter | string | null
    bluray?: DateTimeNullableFilter | Date | string | null
    cinema?: DateTimeNullableFilter | Date | string | null
    digital?: DateTimeNullableFilter | Date | string | null
    dvd?: DateTimeNullableFilter | Date | string | null
    russia?: DateTimeNullableFilter | Date | string | null
    world?: DateTimeNullableFilter | Date | string | null
  }

  export type MovieTechnologyWhereInput = {
    AND?: Enumerable<MovieTechnologyWhereInput>
    OR?: Enumerable<MovieTechnologyWhereInput>
    NOT?: Enumerable<MovieTechnologyWhereInput>
    has3D?: BoolFilter | boolean
    hasImax?: BoolFilter | boolean
  }

  export type MovieWatchabilityWhereInput = {
    AND?: Enumerable<MovieWatchabilityWhereInput>
    OR?: Enumerable<MovieWatchabilityWhereInput>
    NOT?: Enumerable<MovieWatchabilityWhereInput>
    items?: XOR<MovieWatchabilityItemsCompositeListFilter, Enumerable<MovieWatchabilityItemsObjectEqualityInput>>
  }

  export type MovieWatchabilityItemsObjectEqualityInput = {
    logo: MovieLogoObjectEqualityInput
    name: string
    url: string
  }

  export type MovieReleaseYearsWhereInput = {
    AND?: Enumerable<MovieReleaseYearsWhereInput>
    OR?: Enumerable<MovieReleaseYearsWhereInput>
    NOT?: Enumerable<MovieReleaseYearsWhereInput>
    start?: IntFilter | number
    end?: IntNullableFilter | number | null
  }

  export type MovieFeesItemOrderByInput = {
    currency?: SortOrder
    value?: SortOrder
  }

  export type MovieWatchabilityItemsOrderByCompositeAggregateInput = {
    _count?: SortOrder
  }

  export type NestedEnumMovieTypeNullableWithAggregatesFilter = {
    equals?: MovieType | null
    in?: Enumerable<MovieType> | null
    notIn?: Enumerable<MovieType> | null
    not?: NestedEnumMovieTypeNullableWithAggregatesFilter | MovieType | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMovieTypeNullableFilter
    _max?: NestedEnumMovieTypeNullableFilter
    isSet?: boolean
  }

  export type NestedEnumMovieStatusNullableWithAggregatesFilter = {
    equals?: MovieStatus | null
    in?: Enumerable<MovieStatus> | null
    notIn?: Enumerable<MovieStatus> | null
    not?: NestedEnumMovieStatusNullableWithAggregatesFilter | MovieStatus | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumMovieStatusNullableFilter
    _max?: NestedEnumMovieStatusNullableFilter
    isSet?: boolean
  }

  export type MovieCreateWithoutVideosInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutVideosInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutVideosInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutVideosInput, MovieUncheckedCreateWithoutVideosInput>
  }

  export type MovieUpsertWithoutVideosInput = {
    update: XOR<MovieUpdateWithoutVideosInput, MovieUncheckedUpdateWithoutVideosInput>
    create: XOR<MovieCreateWithoutVideosInput, MovieUncheckedCreateWithoutVideosInput>
  }

  export type MovieUpdateWithoutVideosInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutVideosInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieCreateWithoutImagesInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutImagesInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutImagesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutImagesInput, MovieUncheckedCreateWithoutImagesInput>
  }

  export type MovieUpsertWithoutImagesInput = {
    update: XOR<MovieUpdateWithoutImagesInput, MovieUncheckedUpdateWithoutImagesInput>
    create: XOR<MovieCreateWithoutImagesInput, MovieUncheckedCreateWithoutImagesInput>
  }

  export type MovieUpdateWithoutImagesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutImagesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieCreateWithoutSeasonsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutSeasonsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutSeasonsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutSeasonsInput, MovieUncheckedCreateWithoutSeasonsInput>
  }

  export type SeasonEpisodeUpdateManyInput = {
    where: SeasonEpisodeWhereInput
    data: SeasonEpisodeUpdateInput
  }

  export type SeasonEpisodeDeleteManyInput = {
    where: SeasonEpisodeWhereInput
  }

  export type MovieUpsertWithoutSeasonsInput = {
    update: XOR<MovieUpdateWithoutSeasonsInput, MovieUncheckedUpdateWithoutSeasonsInput>
    create: XOR<MovieCreateWithoutSeasonsInput, MovieUncheckedCreateWithoutSeasonsInput>
  }

  export type MovieUpdateWithoutSeasonsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutSeasonsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieCreateWithoutReviewInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutReviewInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutReviewInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
  }

  export type MovieUpsertWithoutReviewInput = {
    update: XOR<MovieUpdateWithoutReviewInput, MovieUncheckedUpdateWithoutReviewInput>
    create: XOR<MovieCreateWithoutReviewInput, MovieUncheckedCreateWithoutReviewInput>
  }

  export type MovieUpdateWithoutReviewInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutReviewInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieOnPersonCreateWithoutPersonInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    movie: MovieCreateNestedOneWithoutPersonsInput
  }

  export type MovieOnPersonUncheckedCreateWithoutPersonInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type MovieOnPersonCreateOrConnectWithoutPersonInput = {
    where: MovieOnPersonWhereUniqueInput
    create: XOR<MovieOnPersonCreateWithoutPersonInput, MovieOnPersonUncheckedCreateWithoutPersonInput>
  }

  export type MovieOnPersonCreateManyPersonInputEnvelope = {
    data: Enumerable<MovieOnPersonCreateManyPersonInput>
  }

  export type PersonFactCreateWithoutPersonInput = {
    id?: string
    personKpId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonFactUncheckedCreateWithoutPersonInput = {
    id?: string
    personKpId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonFactCreateOrConnectWithoutPersonInput = {
    where: PersonFactWhereUniqueInput
    create: XOR<PersonFactCreateWithoutPersonInput, PersonFactUncheckedCreateWithoutPersonInput>
  }

  export type PersonFactCreateManyPersonInputEnvelope = {
    data: Enumerable<PersonFactCreateManyPersonInput>
  }

  export type PersonSpousesUpdateManyInput = {
    where: PersonSpousesWhereInput
    data: PersonSpousesUpdateInput
  }

  export type PersonSpousesDeleteManyInput = {
    where: PersonSpousesWhereInput
  }

  export type MovieOnPersonUpsertWithWhereUniqueWithoutPersonInput = {
    where: MovieOnPersonWhereUniqueInput
    update: XOR<MovieOnPersonUpdateWithoutPersonInput, MovieOnPersonUncheckedUpdateWithoutPersonInput>
    create: XOR<MovieOnPersonCreateWithoutPersonInput, MovieOnPersonUncheckedCreateWithoutPersonInput>
  }

  export type MovieOnPersonUpdateWithWhereUniqueWithoutPersonInput = {
    where: MovieOnPersonWhereUniqueInput
    data: XOR<MovieOnPersonUpdateWithoutPersonInput, MovieOnPersonUncheckedUpdateWithoutPersonInput>
  }

  export type MovieOnPersonUpdateManyWithWhereWithoutPersonInput = {
    where: MovieOnPersonScalarWhereInput
    data: XOR<MovieOnPersonUpdateManyMutationInput, MovieOnPersonUncheckedUpdateManyWithoutMoviesInput>
  }

  export type MovieOnPersonScalarWhereInput = {
    AND?: Enumerable<MovieOnPersonScalarWhereInput>
    OR?: Enumerable<MovieOnPersonScalarWhereInput>
    NOT?: Enumerable<MovieOnPersonScalarWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    kpMovieId?: IntFilter | number
    description?: StringFilter | string
    profession?: EnumProfessionTypeNullableListFilter
    assignedAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
    personId?: StringFilter | string
  }

  export type PersonFactUpsertWithWhereUniqueWithoutPersonInput = {
    where: PersonFactWhereUniqueInput
    update: XOR<PersonFactUpdateWithoutPersonInput, PersonFactUncheckedUpdateWithoutPersonInput>
    create: XOR<PersonFactCreateWithoutPersonInput, PersonFactUncheckedCreateWithoutPersonInput>
  }

  export type PersonFactUpdateWithWhereUniqueWithoutPersonInput = {
    where: PersonFactWhereUniqueInput
    data: XOR<PersonFactUpdateWithoutPersonInput, PersonFactUncheckedUpdateWithoutPersonInput>
  }

  export type PersonFactUpdateManyWithWhereWithoutPersonInput = {
    where: PersonFactScalarWhereInput
    data: XOR<PersonFactUpdateManyMutationInput, PersonFactUncheckedUpdateManyWithoutFactsInput>
  }

  export type PersonFactScalarWhereInput = {
    AND?: Enumerable<PersonFactScalarWhereInput>
    OR?: Enumerable<PersonFactScalarWhereInput>
    NOT?: Enumerable<PersonFactScalarWhereInput>
    id?: StringFilter | string
    personKpId?: IntFilter | number
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    personId?: StringFilter | string
  }

  export type MovieCreateWithoutPersonsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutPersonsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutPersonsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutPersonsInput, MovieUncheckedCreateWithoutPersonsInput>
  }

  export type PersonCreateWithoutMoviesInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facts?: PersonFactCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutMoviesInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    facts?: PersonFactUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutMoviesInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutMoviesInput, PersonUncheckedCreateWithoutMoviesInput>
  }

  export type MovieUpsertWithoutPersonsInput = {
    update: XOR<MovieUpdateWithoutPersonsInput, MovieUncheckedUpdateWithoutPersonsInput>
    create: XOR<MovieCreateWithoutPersonsInput, MovieUncheckedCreateWithoutPersonsInput>
  }

  export type MovieUpdateWithoutPersonsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutPersonsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type PersonUpsertWithoutMoviesInput = {
    update: XOR<PersonUpdateWithoutMoviesInput, PersonUncheckedUpdateWithoutMoviesInput>
    create: XOR<PersonCreateWithoutMoviesInput, PersonUncheckedCreateWithoutMoviesInput>
  }

  export type PersonUpdateWithoutMoviesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facts?: PersonFactUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutMoviesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    facts?: PersonFactUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutFactsInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieOnPersonCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutFactsInput = {
    id?: string
    kpId: number
    enName?: string | null
    name?: string | null
    photo: string
    sex?: PersonSex | null
    birthPlace?: PersonCreatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonCreatedeathPlaceInput | Enumerable<string>
    age?: number | null
    countAwards?: number | null
    growth?: number | null
    profession?: PersonCreateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListCreateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: Date | string | null
    death?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movies?: MovieOnPersonUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutFactsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutFactsInput, PersonUncheckedCreateWithoutFactsInput>
  }

  export type PersonUpsertWithoutFactsInput = {
    update: XOR<PersonUpdateWithoutFactsInput, PersonUncheckedUpdateWithoutFactsInput>
    create: XOR<PersonCreateWithoutFactsInput, PersonUncheckedCreateWithoutFactsInput>
  }

  export type PersonUpdateWithoutFactsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieOnPersonUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutFactsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: StringFieldUpdateOperationsInput | string
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
    birthPlace?: PersonUpdatebirthPlaceInput | Enumerable<string>
    deathPlace?: PersonUpdatedeathPlaceInput | Enumerable<string>
    age?: NullableIntFieldUpdateOperationsInput | number | null
    countAwards?: NullableIntFieldUpdateOperationsInput | number | null
    growth?: NullableIntFieldUpdateOperationsInput | number | null
    profession?: PersonUpdateprofessionInput | Enumerable<ProfessionType>
    spouses?: XOR<PersonSpousesListUpdateEnvelopeInput, Enumerable<PersonSpousesCreateInput>>
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    death?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieOnPersonUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type MovieCreateWithoutFactsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutFactsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutFactsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutFactsInput, MovieUncheckedCreateWithoutFactsInput>
  }

  export type MovieUpsertWithoutFactsInput = {
    update: XOR<MovieUpdateWithoutFactsInput, MovieUncheckedUpdateWithoutFactsInput>
    create: XOR<MovieCreateWithoutFactsInput, MovieUncheckedCreateWithoutFactsInput>
  }

  export type MovieUpdateWithoutFactsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutFactsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieFeesItemCreateInput = {
    currency: string
    value: number
  }

  export type MovieWatchabilityItemsCreateInput = {
    logo: MovieLogoCreateInput
    name: string
    url: string
  }

  export type ImageCreateWithoutMovieInput = {
    id?: string
    movieKpId: number
    url: string
    language?: string | null
    previewUrl: string
    kpMovieId: number
    height?: number | null
    width?: number | null
    type: ImageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutMovieInput = {
    id?: string
    movieKpId: number
    url: string
    language?: string | null
    previewUrl: string
    kpMovieId: number
    height?: number | null
    width?: number | null
    type: ImageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutMovieInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutMovieInput, ImageUncheckedCreateWithoutMovieInput>
  }

  export type ImageCreateManyMovieInputEnvelope = {
    data: Enumerable<ImageCreateManyMovieInput>
  }

  export type VideoCreateWithoutMovieInput = {
    id?: string
    kpId: number
    name: string
    url: string
    size?: number | null
    source: VideoSource
    type?: VideoType | null
  }

  export type VideoUncheckedCreateWithoutMovieInput = {
    id?: string
    kpId: number
    name: string
    url: string
    size?: number | null
    source: VideoSource
    type?: VideoType | null
  }

  export type VideoCreateOrConnectWithoutMovieInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutMovieInput, VideoUncheckedCreateWithoutMovieInput>
  }

  export type VideoCreateManyMovieInputEnvelope = {
    data: Enumerable<VideoCreateManyMovieInput>
  }

  export type SeasonCreateWithoutMovieInput = {
    id?: string
    movieKpId: number
    episodesCount: number
    number: number
    episodes?: XOR<SeasonEpisodeListCreateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeasonUncheckedCreateWithoutMovieInput = {
    id?: string
    movieKpId: number
    episodesCount: number
    number: number
    episodes?: XOR<SeasonEpisodeListCreateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeasonCreateOrConnectWithoutMovieInput = {
    where: SeasonWhereUniqueInput
    create: XOR<SeasonCreateWithoutMovieInput, SeasonUncheckedCreateWithoutMovieInput>
  }

  export type SeasonCreateManyMovieInputEnvelope = {
    data: Enumerable<SeasonCreateManyMovieInput>
  }

  export type MovieOnPersonCreateWithoutMovieInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutMoviesInput
  }

  export type MovieOnPersonUncheckedCreateWithoutMovieInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    personId: string
  }

  export type MovieOnPersonCreateOrConnectWithoutMovieInput = {
    where: MovieOnPersonWhereUniqueInput
    create: XOR<MovieOnPersonCreateWithoutMovieInput, MovieOnPersonUncheckedCreateWithoutMovieInput>
  }

  export type MovieOnPersonCreateManyMovieInputEnvelope = {
    data: Enumerable<MovieOnPersonCreateManyMovieInput>
  }

  export type MovieFactCreateWithoutMovieInput = {
    id?: string
    movieKpId: number
    spoiler?: boolean | null
    type?: string | null
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieFactUncheckedCreateWithoutMovieInput = {
    id?: string
    movieKpId: number
    spoiler?: boolean | null
    type?: string | null
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieFactCreateOrConnectWithoutMovieInput = {
    where: MovieFactWhereUniqueInput
    create: XOR<MovieFactCreateWithoutMovieInput, MovieFactUncheckedCreateWithoutMovieInput>
  }

  export type MovieFactCreateManyMovieInputEnvelope = {
    data: Enumerable<MovieFactCreateManyMovieInput>
  }

  export type ReviewCreateWithoutMovieInput = {
    id?: string
    kpMovieId: number
    author: string
    review: string
    title?: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUncheckedCreateWithoutMovieInput = {
    id?: string
    kpMovieId: number
    author: string
    review: string
    title?: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput>
  }

  export type ReviewCreateManyMovieInputEnvelope = {
    data: Enumerable<ReviewCreateManyMovieInput>
  }

  export type MovieCreateWithoutSequelsAndPrequelsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutSequelsAndPrequelsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutSequelsAndPrequelsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutSequelsAndPrequelsInput, MovieUncheckedCreateWithoutSequelsAndPrequelsInput>
  }

  export type MovieCreateWithoutMovieHavingSequelsAndPrequelsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutMovieHavingSequelsAndPrequelsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieHavingSequelsAndPrequelsInput, MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput>
  }

  export type MovieCreateManyMovieHavingSequelsAndPrequelsInputEnvelope = {
    data: Enumerable<MovieCreateManyMovieHavingSequelsAndPrequelsInput>
  }

  export type MovieCreateWithoutSimilarMoviesInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    movieHavingSimilar: MovieCreateNestedOneWithoutSimilarMoviesInput
  }

  export type MovieUncheckedCreateWithoutSimilarMoviesInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    movieId: string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
  }

  export type MovieCreateOrConnectWithoutSimilarMoviesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutSimilarMoviesInput, MovieUncheckedCreateWithoutSimilarMoviesInput>
  }

  export type MovieCreateWithoutMovieHavingSimilarInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageCreateNestedManyWithoutMovieInput
    videos?: VideoCreateNestedManyWithoutMovieInput
    seasons?: SeasonCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonCreateNestedManyWithoutMovieInput
    facts?: MovieFactCreateNestedManyWithoutMovieInput
    review?: ReviewCreateNestedManyWithoutMovieInput
    movieHavingSequelsAndPrequels: MovieCreateNestedOneWithoutSequelsAndPrequelsInput
    sequelsAndPrequels?: MovieCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieUncheckedCreateWithoutMovieHavingSimilarInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: ImageUncheckedCreateNestedManyWithoutMovieInput
    videos?: VideoUncheckedCreateNestedManyWithoutMovieInput
    seasons?: SeasonUncheckedCreateNestedManyWithoutMovieInput
    persons?: MovieOnPersonUncheckedCreateNestedManyWithoutMovieInput
    facts?: MovieFactUncheckedCreateNestedManyWithoutMovieInput
    review?: ReviewUncheckedCreateNestedManyWithoutMovieInput
    sequelsAndPrequels?: MovieUncheckedCreateNestedManyWithoutMovieHavingSequelsAndPrequelsInput
    similarMovies?: MovieUncheckedCreateNestedManyWithoutMovieHavingSimilarInput
  }

  export type MovieCreateOrConnectWithoutMovieHavingSimilarInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieHavingSimilarInput, MovieUncheckedCreateWithoutMovieHavingSimilarInput>
  }

  export type MovieCreateManyMovieHavingSimilarInputEnvelope = {
    data: Enumerable<MovieCreateManyMovieHavingSimilarInput>
  }

  export type MovieExternalIdUpdateInput = {
    imdb?: NullableStringFieldUpdateOperationsInput | string | null
    tmdb?: NullableIntFieldUpdateOperationsInput | number | null
    kpHD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieNameItemUpdateManyInput = {
    where: MovieNameItemWhereInput
    data: MovieNameItemUpdateInput
  }

  export type MovieNameItemDeleteManyInput = {
    where: MovieNameItemWhereInput
  }

  export type MovieRatingUpdateInput = {
    kp?: FloatFieldUpdateOperationsInput | number
    imdb?: FloatFieldUpdateOperationsInput | number
    await?: NullableFloatFieldUpdateOperationsInput | number | null
    filmCritics?: NullableFloatFieldUpdateOperationsInput | number | null
    russianFilmCritics?: NullableFloatFieldUpdateOperationsInput | number | null
    tmdb?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MovieBudgetUpsertInput = {
    set: MovieBudgetCreateInput | null
    update: MovieBudgetUpdateInput
  }

  export type MovieDistributorsUpsertInput = {
    set: MovieDistributorsCreateInput | null
    update: MovieDistributorsUpdateInput
  }

  export type MovieVotesUpdateInput = {
    await?: NullableIntFieldUpdateOperationsInput | number | null
    filmCritics?: NullableIntFieldUpdateOperationsInput | number | null
    imdb?: IntFieldUpdateOperationsInput | number
    kp?: IntFieldUpdateOperationsInput | number
    russianFilmCritics?: NullableIntFieldUpdateOperationsInput | number | null
    tmdb?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovieFeesUpsertInput = {
    set: MovieFeesCreateInput | null
    update: MovieFeesUpdateInput
  }

  export type MoviePremiereUpsertInput = {
    set: MoviePremiereCreateInput | null
    update: MoviePremiereUpdateInput
  }

  export type MovieTechnologyUpsertInput = {
    set: MovieTechnologyCreateInput | null
    update: MovieTechnologyUpdateInput
  }

  export type MovieWatchabilityUpsertInput = {
    set: MovieWatchabilityCreateInput | null
    update: MovieWatchabilityUpdateInput
  }

  export type MovieReleaseYearsUpdateManyInput = {
    where: MovieReleaseYearsWhereInput
    data: MovieReleaseYearsUpdateInput
  }

  export type MovieReleaseYearsDeleteManyInput = {
    where: MovieReleaseYearsWhereInput
  }

  export type ImageUpsertWithWhereUniqueWithoutMovieInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutMovieInput, ImageUncheckedUpdateWithoutMovieInput>
    create: XOR<ImageCreateWithoutMovieInput, ImageUncheckedCreateWithoutMovieInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutMovieInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutMovieInput, ImageUncheckedUpdateWithoutMovieInput>
  }

  export type ImageUpdateManyWithWhereWithoutMovieInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImagesInput>
  }

  export type ImageScalarWhereInput = {
    AND?: Enumerable<ImageScalarWhereInput>
    OR?: Enumerable<ImageScalarWhereInput>
    NOT?: Enumerable<ImageScalarWhereInput>
    id?: StringFilter | string
    movieKpId?: IntFilter | number
    url?: StringFilter | string
    language?: StringNullableFilter | string | null
    previewUrl?: StringFilter | string
    kpMovieId?: IntFilter | number
    height?: IntNullableFilter | number | null
    width?: IntNullableFilter | number | null
    type?: EnumImageTypeFilter | ImageType
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
  }

  export type VideoUpsertWithWhereUniqueWithoutMovieInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutMovieInput, VideoUncheckedUpdateWithoutMovieInput>
    create: XOR<VideoCreateWithoutMovieInput, VideoUncheckedCreateWithoutMovieInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutMovieInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutMovieInput, VideoUncheckedUpdateWithoutMovieInput>
  }

  export type VideoUpdateManyWithWhereWithoutMovieInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutVideosInput>
  }

  export type VideoScalarWhereInput = {
    AND?: Enumerable<VideoScalarWhereInput>
    OR?: Enumerable<VideoScalarWhereInput>
    NOT?: Enumerable<VideoScalarWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    name?: StringFilter | string
    url?: StringFilter | string
    size?: IntNullableFilter | number | null
    source?: EnumVideoSourceFilter | VideoSource
    type?: EnumVideoTypeNullableFilter | VideoType | null
    movieId?: StringFilter | string
  }

  export type SeasonUpsertWithWhereUniqueWithoutMovieInput = {
    where: SeasonWhereUniqueInput
    update: XOR<SeasonUpdateWithoutMovieInput, SeasonUncheckedUpdateWithoutMovieInput>
    create: XOR<SeasonCreateWithoutMovieInput, SeasonUncheckedCreateWithoutMovieInput>
  }

  export type SeasonUpdateWithWhereUniqueWithoutMovieInput = {
    where: SeasonWhereUniqueInput
    data: XOR<SeasonUpdateWithoutMovieInput, SeasonUncheckedUpdateWithoutMovieInput>
  }

  export type SeasonUpdateManyWithWhereWithoutMovieInput = {
    where: SeasonScalarWhereInput
    data: XOR<SeasonUpdateManyMutationInput, SeasonUncheckedUpdateManyWithoutSeasonsInput>
  }

  export type SeasonScalarWhereInput = {
    AND?: Enumerable<SeasonScalarWhereInput>
    OR?: Enumerable<SeasonScalarWhereInput>
    NOT?: Enumerable<SeasonScalarWhereInput>
    id?: StringFilter | string
    movieKpId?: IntFilter | number
    episodesCount?: IntFilter | number
    number?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
  }

  export type MovieOnPersonUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieOnPersonWhereUniqueInput
    update: XOR<MovieOnPersonUpdateWithoutMovieInput, MovieOnPersonUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieOnPersonCreateWithoutMovieInput, MovieOnPersonUncheckedCreateWithoutMovieInput>
  }

  export type MovieOnPersonUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieOnPersonWhereUniqueInput
    data: XOR<MovieOnPersonUpdateWithoutMovieInput, MovieOnPersonUncheckedUpdateWithoutMovieInput>
  }

  export type MovieOnPersonUpdateManyWithWhereWithoutMovieInput = {
    where: MovieOnPersonScalarWhereInput
    data: XOR<MovieOnPersonUpdateManyMutationInput, MovieOnPersonUncheckedUpdateManyWithoutPersonsInput>
  }

  export type MovieFactUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieFactWhereUniqueInput
    update: XOR<MovieFactUpdateWithoutMovieInput, MovieFactUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieFactCreateWithoutMovieInput, MovieFactUncheckedCreateWithoutMovieInput>
  }

  export type MovieFactUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieFactWhereUniqueInput
    data: XOR<MovieFactUpdateWithoutMovieInput, MovieFactUncheckedUpdateWithoutMovieInput>
  }

  export type MovieFactUpdateManyWithWhereWithoutMovieInput = {
    where: MovieFactScalarWhereInput
    data: XOR<MovieFactUpdateManyMutationInput, MovieFactUncheckedUpdateManyWithoutFactsInput>
  }

  export type MovieFactScalarWhereInput = {
    AND?: Enumerable<MovieFactScalarWhereInput>
    OR?: Enumerable<MovieFactScalarWhereInput>
    NOT?: Enumerable<MovieFactScalarWhereInput>
    id?: StringFilter | string
    movieKpId?: IntFilter | number
    spoiler?: BoolNullableFilter | boolean | null
    type?: StringNullableFilter | string | null
    value?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutMovieInput, ReviewUncheckedUpdateWithoutMovieInput>
    create: XOR<ReviewCreateWithoutMovieInput, ReviewUncheckedCreateWithoutMovieInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutMovieInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutMovieInput, ReviewUncheckedUpdateWithoutMovieInput>
  }

  export type ReviewUpdateManyWithWhereWithoutMovieInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: Enumerable<ReviewScalarWhereInput>
    OR?: Enumerable<ReviewScalarWhereInput>
    NOT?: Enumerable<ReviewScalarWhereInput>
    id?: StringFilter | string
    kpMovieId?: IntFilter | number
    author?: StringFilter | string
    review?: StringFilter | string
    title?: StringNullableFilter | string | null
    reviewDislikes?: IntFilter | number
    reviewLikes?: IntFilter | number
    userRating?: IntFilter | number
    date?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
  }

  export type MovieUpsertWithoutSequelsAndPrequelsInput = {
    update: XOR<MovieUpdateWithoutSequelsAndPrequelsInput, MovieUncheckedUpdateWithoutSequelsAndPrequelsInput>
    create: XOR<MovieCreateWithoutSequelsAndPrequelsInput, MovieUncheckedCreateWithoutSequelsAndPrequelsInput>
  }

  export type MovieUpdateWithoutSequelsAndPrequelsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutSequelsAndPrequelsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUpsertWithWhereUniqueWithoutMovieHavingSequelsAndPrequelsInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutMovieHavingSequelsAndPrequelsInput, MovieUncheckedUpdateWithoutMovieHavingSequelsAndPrequelsInput>
    create: XOR<MovieCreateWithoutMovieHavingSequelsAndPrequelsInput, MovieUncheckedCreateWithoutMovieHavingSequelsAndPrequelsInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutMovieHavingSequelsAndPrequelsInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutMovieHavingSequelsAndPrequelsInput, MovieUncheckedUpdateWithoutMovieHavingSequelsAndPrequelsInput>
  }

  export type MovieUpdateManyWithWhereWithoutMovieHavingSequelsAndPrequelsInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutSequelsAndPrequelsInput>
  }

  export type MovieScalarWhereInput = {
    AND?: Enumerable<MovieScalarWhereInput>
    OR?: Enumerable<MovieScalarWhereInput>
    NOT?: Enumerable<MovieScalarWhereInput>
    id?: StringFilter | string
    kpId?: IntFilter | number
    name?: StringNullableFilter | string | null
    names?: StringNullableListFilter
    enName?: StringNullableFilter | string | null
    alternativeName?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    ratingMpaa?: StringNullableFilter | string | null
    shortDescription?: StringNullableFilter | string | null
    slogan?: StringNullableFilter | string | null
    year?: IntNullableFilter | number | null
    movieLength?: IntNullableFilter | number | null
    ageRating?: IntNullableFilter | number | null
    top10?: IntNullableFilter | number | null
    top250?: IntNullableFilter | number | null
    type?: EnumMovieTypeNullableFilter | MovieType | null
    status?: EnumMovieStatusNullableFilter | MovieStatus | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    movieId?: StringFilter | string
  }

  export type MovieUpsertWithoutSimilarMoviesInput = {
    update: XOR<MovieUpdateWithoutSimilarMoviesInput, MovieUncheckedUpdateWithoutSimilarMoviesInput>
    create: XOR<MovieCreateWithoutSimilarMoviesInput, MovieUncheckedCreateWithoutSimilarMoviesInput>
  }

  export type MovieUpdateWithoutSimilarMoviesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutSimilarMoviesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
  }

  export type MovieUpsertWithWhereUniqueWithoutMovieHavingSimilarInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutMovieHavingSimilarInput, MovieUncheckedUpdateWithoutMovieHavingSimilarInput>
    create: XOR<MovieCreateWithoutMovieHavingSimilarInput, MovieUncheckedCreateWithoutMovieHavingSimilarInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutMovieHavingSimilarInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutMovieHavingSimilarInput, MovieUncheckedUpdateWithoutMovieHavingSimilarInput>
  }

  export type MovieUpdateManyWithWhereWithoutMovieHavingSimilarInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutSimilarMoviesInput>
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumDivorcedReasonFilter = {
    equals?: DivorcedReason
    in?: Enumerable<DivorcedReason>
    notIn?: Enumerable<DivorcedReason>
    not?: NestedEnumDivorcedReasonFilter | DivorcedReason
  }

  export type EnumPersonRelationFilter = {
    equals?: PersonRelation
    in?: Enumerable<PersonRelation>
    notIn?: Enumerable<PersonRelation>
    not?: NestedEnumPersonRelationFilter | PersonRelation
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
    isSet?: boolean
  }

  export type MovieFeesItemNullableCompositeFilter = {
    equals?: MovieFeesItemObjectEqualityInput | null
    is?: MovieFeesItemWhereInput | null
    isNot?: MovieFeesItemWhereInput | null
    isSet?: boolean
  }

  export type MovieWatchabilityItemsCompositeListFilter = {
    equals?: Enumerable<MovieWatchabilityItemsObjectEqualityInput>
    every?: MovieWatchabilityItemsWhereInput
    some?: MovieWatchabilityItemsWhereInput
    none?: MovieWatchabilityItemsWhereInput
    isEmpty?: boolean
    isSet?: boolean
  }

  export type MovieLogoObjectEqualityInput = {
    url?: string | null
  }

  export type SeasonEpisodeUpdateInput = {
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    number?: IntFieldUpdateOperationsInput | number
  }

  export type MovieOnPersonCreateManyPersonInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    movieId: string
  }

  export type PersonFactCreateManyPersonInput = {
    id?: string
    personKpId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonSpousesUpdateInput = {
    children?: IntFieldUpdateOperationsInput | number
    divorced?: BoolFieldUpdateOperationsInput | boolean
    divorcedReason?: EnumDivorcedReasonFieldUpdateOperationsInput | DivorcedReason
    name?: StringFieldUpdateOperationsInput | string
    relation?: EnumPersonRelationFieldUpdateOperationsInput | PersonRelation
    sex?: NullableEnumPersonSexFieldUpdateOperationsInput | PersonSex | null
  }

  export type MovieOnPersonUpdateWithoutPersonInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutPersonsNestedInput
  }

  export type MovieOnPersonUncheckedUpdateWithoutPersonInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieOnPersonUncheckedUpdateManyWithoutMoviesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type PersonFactUpdateWithoutPersonInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonFactUncheckedUpdateWithoutPersonInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonFactUncheckedUpdateManyWithoutFactsInput = {
    personKpId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieLogoCreateInput = {
    url?: string | null
  }

  export type ImageCreateManyMovieInput = {
    id?: string
    movieKpId: number
    url: string
    language?: string | null
    previewUrl: string
    kpMovieId: number
    height?: number | null
    width?: number | null
    type: ImageType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateManyMovieInput = {
    id?: string
    kpId: number
    name: string
    url: string
    size?: number | null
    source: VideoSource
    type?: VideoType | null
  }

  export type SeasonCreateManyMovieInput = {
    id?: string
    movieKpId: number
    episodesCount: number
    number: number
    episodes?: XOR<SeasonEpisodeListCreateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieOnPersonCreateManyMovieInput = {
    id?: string
    kpId: number
    kpMovieId: number
    description: string
    profession?: MovieOnPersonCreateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: Date | string
    updatedAt?: Date | string
    personId: string
  }

  export type MovieFactCreateManyMovieInput = {
    id?: string
    movieKpId: number
    spoiler?: boolean | null
    type?: string | null
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyMovieInput = {
    id?: string
    kpMovieId: number
    author: string
    review: string
    title?: string | null
    reviewDislikes: number
    reviewLikes: number
    userRating: number
    date: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCreateManyMovieHavingSequelsAndPrequelsInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCreateManyMovieHavingSimilarInput = {
    id?: string
    kpId: number
    externalId: XOR<MovieExternalIdCreateEnvelopeInput, MovieExternalIdCreateInput>
    name?: string | null
    names?: MovieCreatenamesInput | Enumerable<string>
    enName?: string | null
    alternativeName?: string | null
    description?: string | null
    ratingMpaa?: string | null
    shortDescription?: string | null
    slogan?: string | null
    year?: number | null
    movieLength?: number | null
    ageRating?: number | null
    top10?: number | null
    top250?: number | null
    type?: MovieType | null
    status?: MovieStatus | null
    genres?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListCreateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating: XOR<MovieRatingCreateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableCreateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableCreateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes: XOR<MovieVotesCreateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableCreateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableCreateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableCreateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableCreateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListCreateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieNameItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type MovieBudgetUpdateInput = {
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
  }

  export type MovieDistributorsUpdateInput = {
    distributor?: NullableStringFieldUpdateOperationsInput | string | null
    distributorRelease?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieFeesUpdateInput = {
    usa?: XOR<MovieFeesItemNullableUpdateEnvelopeInput, MovieFeesItemCreateInput> | null
    world?: XOR<MovieFeesItemNullableUpdateEnvelopeInput, MovieFeesItemCreateInput> | null
    russia?: XOR<MovieFeesItemNullableUpdateEnvelopeInput, MovieFeesItemCreateInput> | null
  }

  export type MoviePremiereUpdateInput = {
    country?: NullableStringFieldUpdateOperationsInput | string | null
    bluray?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cinema?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    digital?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dvd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    russia?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    world?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MovieTechnologyUpdateInput = {
    has3D?: BoolFieldUpdateOperationsInput | boolean
    hasImax?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieWatchabilityUpdateInput = {
    items?: XOR<MovieWatchabilityItemsListUpdateEnvelopeInput, Enumerable<MovieWatchabilityItemsCreateInput>>
  }

  export type MovieReleaseYearsUpdateInput = {
    start?: IntFieldUpdateOperationsInput | number
    end?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ImageUpdateWithoutMovieInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutMovieInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutImagesInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    previewUrl?: StringFieldUpdateOperationsInput | string
    kpMovieId?: IntFieldUpdateOperationsInput | number
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumImageTypeFieldUpdateOperationsInput | ImageType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutMovieInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
  }

  export type VideoUncheckedUpdateWithoutMovieInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
  }

  export type VideoUncheckedUpdateManyWithoutVideosInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    size?: NullableIntFieldUpdateOperationsInput | number | null
    source?: EnumVideoSourceFieldUpdateOperationsInput | VideoSource
    type?: NullableEnumVideoTypeFieldUpdateOperationsInput | VideoType | null
  }

  export type SeasonUpdateWithoutMovieInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateWithoutMovieInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeasonUncheckedUpdateManyWithoutSeasonsInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    episodesCount?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    episodes?: XOR<SeasonEpisodeListUpdateEnvelopeInput, Enumerable<SeasonEpisodeCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieOnPersonUpdateWithoutMovieInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieOnPersonUncheckedUpdateWithoutMovieInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieOnPersonUncheckedUpdateManyWithoutPersonsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    kpMovieId?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    profession?: MovieOnPersonUpdateprofessionInput | Enumerable<ProfessionType>
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieFactUpdateWithoutMovieInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieFactUncheckedUpdateWithoutMovieInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieFactUncheckedUpdateManyWithoutFactsInput = {
    movieKpId?: IntFieldUpdateOperationsInput | number
    spoiler?: NullableBoolFieldUpdateOperationsInput | boolean | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutMovieInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateWithoutMovieInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewInput = {
    kpMovieId?: IntFieldUpdateOperationsInput | number
    author?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    reviewDislikes?: IntFieldUpdateOperationsInput | number
    reviewLikes?: IntFieldUpdateOperationsInput | number
    userRating?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpdateWithoutMovieHavingSequelsAndPrequelsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    movieHavingSimilar?: MovieUpdateOneRequiredWithoutSimilarMoviesNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieHavingSequelsAndPrequelsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutSequelsAndPrequelsInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpdateWithoutMovieHavingSimilarInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUpdateManyWithoutMovieNestedInput
    videos?: VideoUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUpdateManyWithoutMovieNestedInput
    review?: ReviewUpdateManyWithoutMovieNestedInput
    movieHavingSequelsAndPrequels?: MovieUpdateOneRequiredWithoutSequelsAndPrequelsNestedInput
    sequelsAndPrequels?: MovieUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateWithoutMovieHavingSimilarInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: ImageUncheckedUpdateManyWithoutMovieNestedInput
    videos?: VideoUncheckedUpdateManyWithoutMovieNestedInput
    seasons?: SeasonUncheckedUpdateManyWithoutMovieNestedInput
    persons?: MovieOnPersonUncheckedUpdateManyWithoutMovieNestedInput
    facts?: MovieFactUncheckedUpdateManyWithoutMovieNestedInput
    review?: ReviewUncheckedUpdateManyWithoutMovieNestedInput
    sequelsAndPrequels?: MovieUncheckedUpdateManyWithoutMovieHavingSequelsAndPrequelsNestedInput
    similarMovies?: MovieUncheckedUpdateManyWithoutMovieHavingSimilarNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutSimilarMoviesInput = {
    kpId?: IntFieldUpdateOperationsInput | number
    externalId?: XOR<MovieExternalIdUpdateEnvelopeInput, MovieExternalIdCreateInput>
    name?: NullableStringFieldUpdateOperationsInput | string | null
    names?: MovieUpdatenamesInput | Enumerable<string>
    enName?: NullableStringFieldUpdateOperationsInput | string | null
    alternativeName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ratingMpaa?: NullableStringFieldUpdateOperationsInput | string | null
    shortDescription?: NullableStringFieldUpdateOperationsInput | string | null
    slogan?: NullableStringFieldUpdateOperationsInput | string | null
    year?: NullableIntFieldUpdateOperationsInput | number | null
    movieLength?: NullableIntFieldUpdateOperationsInput | number | null
    ageRating?: NullableIntFieldUpdateOperationsInput | number | null
    top10?: NullableIntFieldUpdateOperationsInput | number | null
    top250?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableEnumMovieTypeFieldUpdateOperationsInput | MovieType | null
    status?: NullableEnumMovieStatusFieldUpdateOperationsInput | MovieStatus | null
    genres?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    countries?: XOR<MovieNameItemListUpdateEnvelopeInput, Enumerable<MovieNameItemCreateInput>>
    rating?: XOR<MovieRatingUpdateEnvelopeInput, MovieRatingCreateInput>
    budget?: XOR<MovieBudgetNullableUpdateEnvelopeInput, MovieBudgetCreateInput> | null
    distributors?: XOR<MovieDistributorsNullableUpdateEnvelopeInput, MovieDistributorsCreateInput> | null
    votes?: XOR<MovieVotesUpdateEnvelopeInput, MovieVotesCreateInput>
    fees?: XOR<MovieFeesNullableUpdateEnvelopeInput, MovieFeesCreateInput> | null
    premiere?: XOR<MoviePremiereNullableUpdateEnvelopeInput, MoviePremiereCreateInput> | null
    technology?: XOR<MovieTechnologyNullableUpdateEnvelopeInput, MovieTechnologyCreateInput> | null
    watchability?: XOR<MovieWatchabilityNullableUpdateEnvelopeInput, MovieWatchabilityCreateInput> | null
    releaseYears?: XOR<MovieReleaseYearsListUpdateEnvelopeInput, Enumerable<MovieReleaseYearsCreateInput>>
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumDivorcedReasonFilter = {
    equals?: DivorcedReason
    in?: Enumerable<DivorcedReason>
    notIn?: Enumerable<DivorcedReason>
    not?: NestedEnumDivorcedReasonFilter | DivorcedReason
  }

  export type NestedEnumPersonRelationFilter = {
    equals?: PersonRelation
    in?: Enumerable<PersonRelation>
    notIn?: Enumerable<PersonRelation>
    not?: NestedEnumPersonRelationFilter | PersonRelation
  }

  export type MovieFeesItemWhereInput = {
    AND?: Enumerable<MovieFeesItemWhereInput>
    OR?: Enumerable<MovieFeesItemWhereInput>
    NOT?: Enumerable<MovieFeesItemWhereInput>
    currency?: StringFilter | string
    value?: IntFilter | number
  }

  export type MovieWatchabilityItemsWhereInput = {
    AND?: Enumerable<MovieWatchabilityItemsWhereInput>
    OR?: Enumerable<MovieWatchabilityItemsWhereInput>
    NOT?: Enumerable<MovieWatchabilityItemsWhereInput>
    logo?: XOR<MovieLogoCompositeFilter, MovieLogoObjectEqualityInput>
    name?: StringFilter | string
    url?: StringFilter | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumDivorcedReasonFieldUpdateOperationsInput = {
    set?: DivorcedReason
  }

  export type EnumPersonRelationFieldUpdateOperationsInput = {
    set?: PersonRelation
  }

  export type MovieFeesItemNullableUpdateEnvelopeInput = {
    set?: MovieFeesItemCreateInput | null
    upsert?: MovieFeesItemUpsertInput
    unset?: boolean
  }

  export type MovieWatchabilityItemsListUpdateEnvelopeInput = {
    set?: Enumerable<MovieWatchabilityItemsCreateInput>
    push?: Enumerable<MovieWatchabilityItemsCreateInput>
    updateMany?: MovieWatchabilityItemsUpdateManyInput
    deleteMany?: MovieWatchabilityItemsDeleteManyInput
  }

  export type MovieLogoCompositeFilter = {
    equals?: MovieLogoObjectEqualityInput
    is?: MovieLogoWhereInput
    isNot?: MovieLogoWhereInput
  }

  export type MovieFeesItemUpsertInput = {
    set: MovieFeesItemCreateInput | null
    update: MovieFeesItemUpdateInput
  }

  export type MovieWatchabilityItemsUpdateManyInput = {
    where: MovieWatchabilityItemsWhereInput
    data: MovieWatchabilityItemsUpdateInput
  }

  export type MovieWatchabilityItemsDeleteManyInput = {
    where: MovieWatchabilityItemsWhereInput
  }

  export type MovieLogoWhereInput = {
    AND?: Enumerable<MovieLogoWhereInput>
    OR?: Enumerable<MovieLogoWhereInput>
    NOT?: Enumerable<MovieLogoWhereInput>
    url?: StringNullableFilter | string | null
  }

  export type MovieFeesItemUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
  }

  export type MovieWatchabilityItemsUpdateInput = {
    logo?: XOR<MovieLogoUpdateEnvelopeInput, MovieLogoCreateInput>
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MovieLogoUpdateEnvelopeInput = {
    set?: MovieLogoCreateInput
    update?: MovieLogoUpdateInput
  }

  export type MovieLogoUpdateInput = {
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}