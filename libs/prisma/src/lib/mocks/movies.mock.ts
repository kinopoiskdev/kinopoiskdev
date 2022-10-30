import { Movie, MovieStatus, MovieType } from '@prisma';

export const movies: Partial<Movie>[] = [
  {
    kpId: 435,
    fees: {
      russia: null,
      world: {
        value: 286801374,
        currency: '$',
      },
      usa: {
        value: 136801374,
        currency: '$',
      },
    },
    status: MovieStatus.COMPLETED,
    externalId: {
      imdb: 'tt0120689',
      kpHD: '42e511a460839b298d96effd8de60c68',
      tmdb: 2352355,
    },
    rating: {
      kp: 9.069,
      imdb: 8.6,
      filmCritics: 6.8,
      tmdb: 8.5,
      russianFilmCritics: 0,
      await: 0,
    },
    votes: {
      kp: 816074,
      imdb: 1290096,
      tmdb: 1690096,
      filmCritics: 136,
      russianFilmCritics: 1,
      await: 0,
    },
    movieLength: 189,
    type: MovieType.MOVIE,
    name: 'Зеленая миля',
    description:
      'Пол Эджкомб — начальник блока смертников в тюрьме «Холодная гора», каждый из узников которого однажды проходит «зеленую милю» по пути к месту казни. Пол повидал много заключённых и надзирателей за время работы. Однако гигант Джон Коффи, обвинённый в страшном преступлении, стал одним из самых необычных обитателей блока.',
    distributors: {
      distributor: 'West',
      distributorRelease: 'West Video',
    },
    premiere: {
      country: 'США',
      world: new Date(),
      russia: new Date(),
      cinema: new Date(),
      dvd: new Date(),
      bluray: null,
      digital: null,
    },
    slogan: 'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
    year: 1999,
    budget: {
      value: '60000000',
      currency: '$',
    },
    genres: [
      {
        name: 'драма',
      },
      {
        name: 'криминал',
      },
    ],
    countries: [
      {
        name: 'США',
      },
    ],
    alternativeName: 'The Green Mile',
    enName: null,
    names: ['Зеленая миля', 'The Green Mile'],
    ratingMpaa: 'r',
    shortDescription:
      'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга',
    technology: {
      hasImax: false,
      has3D: false,
    },
    ageRating: 16,
    watchability: {
      items: [
        {
          name: 'Okko',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig',
          },
          url: 'https://okko.tv/movie/the-green-mile?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed',
        },
        {
          name: 'Иви',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig',
          },
          url: 'https://www.ivi.ru/watch/90283?utm_source=yandex&utm_medium=wizard',
        },
        {
          name: 'PREMIER',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/239697/0f86e907-9531-47e9-87bd-5101a08d4e30/orig',
          },
          url: 'https://premier.one/show/16086?utm_source=yandex&utm_medium=yandex_feed_search&utm_campaign=yandex_feed',
        },
        {
          name: 'Wink',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig',
          },
          url: 'https://wink.ru/media_items/27314776?utm_source=yandex&utm_medium=koldunschick&utm_content=name',
        },
        {
          name: 'viju',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/224348/8b10c84b-e1bb-4493-9bc4-6ee56554403a/orig',
          },
          url: 'https://viju.ru/filmy/zelenaya-milya?utm_campaign=yandex_content_integration&utm_medium=affiliate&utm_source=yandex',
        },
        {
          name: 'Смотрёшка',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/236744/c88e652e-2eb1-472d-b636-a266364dbf58/orig',
          },
          url: 'https://smotreshka.tv/vod/vipplay/619c836bbb003f90030b40bd?utm_source=yandex_search&utm_campaign=yandex_feed&utm_term=viju',
        },
      ],
    },
  },
  {
    kpId: 666,
    alternativeName: 'The Fast and the Furious',
    budget: {
      value: '38000000',
      currency: '$',
    },
    countries: [
      {
        name: 'США',
      },
      {
        name: 'Германия',
      },
    ],
    description:
      'Его зовут Брайан, и он - фанатик турбин и нитроускорителей. Он пытается попасть в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Брайан также полицейский, и его задание - втереться в доверие к Торетто, подозреваемому в причастности к дерзким грабежам грузовиков, совершенным прямо на ходу.',
    enName: null,
    externalId: {
      imdb: 'tt0232500',
      kpHD: '48e8d0acb0f62d8585101798eaeceec5',
      tmdb: null,
    },
    fees: {
      world: {
        value: 207283925,
        currency: '$',
      },
      usa: {
        value: 144533925,
        currency: '$',
      },
      russia: null,
    },
    genres: [
      {
        name: 'боевик',
      },
      {
        name: 'триллер',
      },
      {
        name: 'криминал',
      },
      {
        name: 'приключения',
      },
    ],
    movieLength: 106,
    name: 'Форсаж',
    names: ['Форсаж', 'The Fast and the Furious'],
    premiere: {
      country: 'США',
      world: new Date(),
      russia: new Date(),
      cinema: new Date(),
      dvd: new Date(),
      bluray: new Date(),
      digital: null,
    },
    rating: {
      kp: 7.767,
      imdb: 6.8,
      tmdb: 6.8,
      filmCritics: 5.4,
      russianFilmCritics: 0,
      await: 0,
    },
    ratingMpaa: 'pg13',
    shortDescription:
      'Коп под прикрытием внедряется в банду стритрейсеров и становится одним из них. Первая часть гоночной франшизы',
    slogan: 'Если у тебя есть то, что нужно... ты можешь получить всё',
    technology: {
      hasImax: false,
      has3D: false,
    },
    type: MovieType.MOVIE,
    votes: {
      kp: 260748,
      imdb: 385367,
      tmdb: 385367,
      filmCritics: 152,
      russianFilmCritics: 0,
      await: 0,
    },
    year: 2001,
    ageRating: 16,
    watchability: {
      items: [
        {
          name: 'Okko',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig',
          },
          url: 'https://okko.tv/movie/the-fast-and-the-furious?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed',
        },
        {
          name: 'Иви',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig',
          },
          url: 'https://www.ivi.ru/watch/90291?utm_source=yandex&utm_medium=wizard',
        },
        {
          name: 'KION',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig',
          },
          url: 'https://kion.ru/video/movie/162353195?utm_source=yandex&utm_medium=organic&utm_campaign=wizard',
        },
      ],
    },
  },
  {
    kpId: 464963,
    alternativeName: 'Game of Thrones',
    countries: [
      {
        name: 'США',
      },
      {
        name: 'Великобритания',
      },
    ],
    description:
      'К концу подходит время благоденствия, и лето, длившееся почти десятилетие, угасает. Вокруг средоточия власти Семи королевств, Железного трона, зреет заговор, и в это непростое время король решает искать поддержки у друга юности Эддарда Старка. В мире, где все — от короля до наемника — рвутся к власти, плетут интриги и готовы вонзить нож в спину, есть место и благородству, состраданию и любви. Между тем, никто не замечает пробуждение тьмы из легенд далеко на Севере — и лишь Стена защищает живых к югу от нее.',
    enName: null,
    externalId: {
      kpHD: '47bab88d43ac0a82ad62bfbbaf302e07',
      tmdb: 3452345,
      imdb: 'tt0944947',
    },
    genres: [
      {
        name: 'фэнтези',
      },
      {
        name: 'драма',
      },
      {
        name: 'боевик',
      },
      {
        name: 'мелодрама',
      },
      {
        name: 'приключения',
      },
    ],
    movieLength: 55,
    name: 'Игра престолов',
    names: ['Игра престолов', 'Game of Thrones'],
    rating: {
      kp: 8.979,
      imdb: 9.2,
      tmdb: null,
      filmCritics: 0,
      russianFilmCritics: 90,
      await: 90.77,
    },
    ratingMpaa: null,
    shortDescription:
      'Рыцари, мертвецы и драконы — в эпической битве за судьбы мира. Сериал, который навсегда изменил телевидение',
    slogan: 'Победа или смерть',
    technology: {
      hasImax: false,
      has3D: false,
    },
    type: MovieType.TV_SERIES,
    votes: {
      kp: 786829,
      imdb: 2074926,
      tmdb: null,
      filmCritics: 0,
      russianFilmCritics: 20,
      await: 1970,
    },
    year: 2011,
    premiere: {
      country: 'Корея Южная',
      world: new Date(),
      russia: new Date(),
      cinema: new Date(),
      digital: new Date(),
      dvd: new Date(),
      bluray: new Date(),
    },
    fees: {
      world: null,
      russia: null,
      usa: null,
    },
    budget: null,
    ageRating: 18,
    watchability: {
      items: [
        {
          name: 'Okko',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig',
          },
          url: 'https://okko.tv/serial/game-of-thrones?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed',
        },
        {
          name: 'Иви',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig',
          },
          url: 'https://www.ivi.ru/watch/igra-prestolov-amedia?utm_source=yandex&utm_medium=wizard',
        },
        {
          name: 'KION',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig',
          },
          url: 'https://kion.ru/video/serial/127267213/season/127268028/episode/643084837?utm_source=yandex&utm_medium=organic&utm_campaign=wizard',
        },
        {
          name: 'AMEDIATEKA',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/1672343/eae327fe-4d7b-4ea2-899a-6aaa54300784/orig',
          },
          url: 'https://amediateka.ru/watch/series_11223_finaligra-prestolov?utm_medium=referral&utm_source=yandex_search&utm_campaign=yandex_feed',
        },
        {
          name: 'Кино1ТВ',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/1672343/4e5f7a8e-d5ac-4904-9fc0-208753ccf520/orig',
          },
          url: 'https://kino.1tv.ru/serials/igra-prestolov?utm_source=yandex&utm_medium=wizard',
        },
        {
          name: 'Wink',
          logo: {
            url: 'https//avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig',
          },
          url: 'https://wink.ru/media_items/23741628?utm_source=yandex&utm_medium=koldunschick&utm_content=name',
        },
      ],
    },
    releaseYears: [
      {
        start: 2011,
        end: 2019,
      },
    ],
  },
];
