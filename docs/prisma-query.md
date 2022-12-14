# Синтаксис запросов к Prisma

## Синтаксис

Поля в Prisma это свойства объектов. Они могут быть простыми или составными. Простые поля содержат одно значение, а составные поля другие объекты или списки объектов.
Тип поля можно узнать в DSL prisma.

Вся основная информация об операторах находится в [документации](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#equals).
Информация в документации разделена на логичные пункты, что значительно поможет в составлении запроса.

Вот пример небольшой пример запроса, на получение всех фильмов на основе схемы этого проекта.

```ts
this.prisma.movie.findMany({
  where: {
    // Говорим, что kpId должен иметь значение 435
    kpId: 435,
    // тут что в extenalId должен быть
    externalId: {
      // объектом с полем imdb
      is: {
        // значение которого равно 'tt0120689'
        imdb: 'tt0120689',
      },
    },
    // rating должен
    rating: {
      // обьектом
      is: {
        // с полем kp
        kp: {
          // значение которого больше или равно 7
          gte: 7,
          // и меньше или равно 10
          lte: 10,
        },
      },
    },
    // type должен быть 'MOVIE'
    type: 'MOVIE',
    // premiere должен
    premiere: {
      // содержать поле с датой
      is: {
        // премьеры в мире
        world: {
          // которая больше или равна 1999-01-01
          gte: new Date('1999-01-01'),
          // и меньше или равна 2099-01-01
          lte: new Date('2099-01-01'),
        },
      },
    },
    // genres должен
    genres: {
      // содержать массив из составных типов
      some: {
        // с полем name и значением 'драма'
        name: 'драма',
      },
    },
    // names должен иметь
    names: {
      // хотябы одно совпадение со значениями в списке
      has: 'The Green Mile',
    },
    // watchability должен быть
    watchability: {
      // объектом с полем items
      is: {
        items: {
          // содержащим массив из составных типов
          some: {
            // с полем name и значением 'Okko'
            name: 'Okko',
          },
        },
      },
    },
  },
});
```
