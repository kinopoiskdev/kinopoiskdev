
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.5.0
 * Query Engine version: 0362da9eebca54d94c8ef5edd3b2e90af99ba452
 */
Prisma.prismaVersion = {
  client: "4.5.0",
  engine: "0362da9eebca54d94c8ef5edd3b2e90af99ba452"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ImageScalarFieldEnum = makeEnum({
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
});

exports.Prisma.MovieFactScalarFieldEnum = makeEnum({
  id: 'id',
  movieKpId: 'movieKpId',
  spoiler: 'spoiler',
  type: 'type',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId'
});

exports.Prisma.MovieOnPersonScalarFieldEnum = makeEnum({
  id: 'id',
  kpId: 'kpId',
  kpMovieId: 'kpMovieId',
  description: 'description',
  profession: 'profession',
  assignedAt: 'assignedAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId',
  personId: 'personId'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
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
});

exports.Prisma.PersonFactScalarFieldEnum = makeEnum({
  id: 'id',
  personKpId: 'personKpId',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  personId: 'personId'
});

exports.Prisma.PersonScalarFieldEnum = makeEnum({
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
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ReviewScalarFieldEnum = makeEnum({
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
});

exports.Prisma.SeasonScalarFieldEnum = makeEnum({
  id: 'id',
  movieKpId: 'movieKpId',
  episodesCount: 'episodesCount',
  number: 'number',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.VideoScalarFieldEnum = makeEnum({
  id: 'id',
  kpId: 'kpId',
  name: 'name',
  url: 'url',
  size: 'size',
  source: 'source',
  type: 'type',
  movieId: 'movieId'
});
exports.DivorcedReason = makeEnum({
  ANNULLED: 'ANNULLED',
  DIVORCE: 'DIVORCE',
  DIED: 'DIED'
});

exports.ImageType = makeEnum({
  BACKDROP: 'BACKDROP',
  POSTER: 'POSTER',
  FRAME: 'FRAME',
  LOGO: 'LOGO',
  STILL: 'STILL',
  SHOOTING: 'SHOOTING',
  SCREENSHOT: 'SCREENSHOT'
});

exports.MovieStatus = makeEnum({
  FILMING: 'FILMING',
  PRE_PRODUCTION: 'PRE_PRODUCTION',
  COMPLETED: 'COMPLETED',
  ANNOUNCED: 'ANNOUNCED',
  UNKNOWN: 'UNKNOWN',
  POST_PRODUCTION: 'POST_PRODUCTION'
});

exports.MovieType = makeEnum({
  ANIMATED_SERIES: 'ANIMATED_SERIES',
  ANIME: 'ANIME',
  CARTOON: 'CARTOON',
  MINI_SERIES: 'MINI_SERIES',
  MOVIE: 'MOVIE',
  TV_SERIES: 'TV_SERIES',
  TV_SHOW: 'TV_SHOW',
  VIDEO: 'VIDEO'
});

exports.PersonRelation = makeEnum({
  HUSBAND: 'HUSBAND',
  WIFE: 'WIFE'
});

exports.PersonSex = makeEnum({
  Male: 'Male',
  Female: 'Female'
});

exports.ProfessionType = makeEnum({
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
});

exports.VideoSource = makeEnum({
  YOUTUBE: 'YOUTUBE',
  YANDEX: 'YANDEX'
});

exports.VideoType = makeEnum({
  TRAILER: 'TRAILER',
  TEASER: 'TEASER'
});

exports.Prisma.ModelName = makeEnum({
  Video: 'Video',
  Image: 'Image',
  Season: 'Season',
  Review: 'Review',
  Person: 'Person',
  MovieOnPerson: 'MovieOnPerson',
  PersonFact: 'PersonFact',
  MovieFact: 'MovieFact',
  Movie: 'Movie'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
