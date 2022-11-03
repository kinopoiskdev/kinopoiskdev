

# 📽️ Неофициальное апи кинопоиска
<p style="text-align: center;"><img style="object-fit: cover; max-width: 1080px" src="./docs/images/cover.png" height="400px" width="100%"></p>

Цель этого репозитория решить проблемы уже существующей апи и предоставить возможность юзерам вносить свой вклад в разработку.  

## TODO 
### Задачи обратной совместимости

**Глобальные задачи**
1. [ ] Генератор запросов к базе данных из старого синтаксиса query запросов
2. [ ] Структура ответа с пагинацией
3. [ ] Сериализация ответа и его приведение к старому виду

**Сущности**  
Перенести все сущности из старой базы в новую
1. [x] Movie
2. [x] Person
3. [x] Season
4. [x] Image
5. [x] Review

**Endpoints**  
Для всех поинтов ниже, необходимо реализовать модули с контроллерами и автоматической генерацией документации. 
1. [ ] /movie
2. [ ] /person
3. [ ] /season
4. [ ] /image
5. [ ] /review

### Разработка нового функционала
**Документация**
1. [x] Добавить swagger
2. [ ] Генератор запросов с использование deep-object в GET методах  
3. [ ] Автоматическая публикация контракта

**Логирование и телеметрия**
1. [ ] Выбрать стек для централизованного логирования
2. [ ] Выбрать стек для телеметрии и построению графа запроса


## Известные проблемы старой версии
### Архитектура
Приложение построено на JS и фреймворке expressjs, в качестве базы данных использует MongoDB.   
В целом стек не плохой, но в течении 3х лет API регулярно обновлялось и дорабатывалось.  
А отсутствие типов и внутренней документации добавили свою ложку дегтя в это дело.  
Рефакторинг не проводился. Все это усугубило ее состояние и привело в неизлечимую стадию.

Само приложение строилось по стандартам экспресса того времени, и за долгое время показало, что такая архитектура не жизнеспособна и была ошибочно выбрана.
Из-за всех этих проблем через время я столкнулся с дублированием кода, на данных момент приходится редактировать модели сразу в 5х местах при добавлении одного поля.
При этом модель базы в апи, не гарантирует соблюдение типов их безопасность и не предоставляет общий контракт.

### Стабильность
Стабильность этому проекту обеспечивал сервер с 40 ядрами. И только благодаря кластеру она не падала у всех сразу. По моей статистике за 5 дней приложение крашилось до 600 раз. 
Некоторые пользователи составляли запросы, которые приводили к провисанию ядра на несколько минут, а иногда часов. База данных с этим справлялась, но длительные процессорные операции в перспективе сжирали 60 гигов оперативы.

### Ошибки
Отсутствие общих контрактов привели к тому, что парсеры могли складывать в базу не совсем валидные данные, а иногда затирать их значения.
В основном все ошибки связаны с данными. Небольшая часть - ошибки из-за невалидных запросов, которые приводили к зависанию.  
Контроль ошибок отсутствовал, мониторинг запросов и построение графа запроса тоже отсутствовал. 

### Документация
Документация велась вручную [kinopoiskdev.docs.apiary.io](https://kinopoiskdev.docs.apiary.io/), до ее автогенерации мои руки так и не добрались. 
За все время она сильно устарела. А apiary.io вообще заблокировал Россиян.

### Производительность
Для большинства пользователей api работало быстро и стабильно, но достигалось это за счет кеширования на уровне реверспрокси. Это приводило к проблемам из-за отсутствия инвалидации кеша. Если бы кеш был внутри апи, то он был бы более эффективным.
Так как в качестве http фреймворка был выбран express, он конечно же порезал потенциальную перформанс до уровня питона.

<details>
<summary>Сравнение производительности в бенчмарках</summary>
Текущая реализация, с 40 ядрами и 60gb RAM и кешем. Но в этом тесте сильно порезал запросы cloudflare.

```shell
$ wrk -t10 -c400 -d30s  https://api.kinopoisk.dev/movie\?token\=\&search\=427631\&field\=id
Running 30s test @ https://api.kinopoisk.dev/movie?token=&search=427631&field=id
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   158.26ms   93.65ms   1.26s    89.85%
    Req/Sec   104.39     82.41   560.00     90.79%
  30350 requests in 30.06s, 168.53MB read
  Socket errors: connect 6, read 2, write 0, timeout 0
  Non-2xx or 3xx responses: 22206
Requests/sec:   1009.71
Transfer/sec:      5.61MB
```

Чтож, запущу локально эту же версии без кластерного режима
```shell
$ wrk -t10 -c400 -d30s  http://localhost:3000/movie\?token\=\&search\=427631\&field\=id
Running 30s test @ http://localhost:3000/movie?token=&search=427631&field=id
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec    16.95     12.73    60.00     61.38%
  800 requests in 30.03s, 5.31MB read
  Socket errors: connect 0, read 409, write 0, timeout 800
Requests/sec:     26.64
Transfer/sec:    181.12KB
```

А теперь запущу аналогично новую версию из этого репозитория, которая использует fastify 
```shell
$ wrk -t10 -c400 -d30s  http://localhost:3333/v1/movie/666   
Running 30s test @ http://localhost:3333/v1/movie/666
  10 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    65.36ms  191.19ms   1.99s    95.14%
    Req/Sec     1.31k   345.95     6.25k    85.50%
  385723 requests in 30.05s, 1.14GB readrm
  Socket errors: connect 0, read 812, write 0, timeout 444
Requests/sec:  12834.22
Transfer/sec:     38.78MB
```
Результаты уже приятные :)
</details>

### Деплоймент
Еще одна боль. Развертывание всей инфраструктуры приложений происходит через pm2, база данных, кеш, реверс прокси.   
Все это было установлено и запущено локально на выделенном сервере.  
Dev/Stage/Prod версий api не было. По факту все это было продом.

---
**[Текущая схема базы данных](https://raw.githubusercontent.com/kinopoiskdev/kinopoiskdev/main/docs/images/ERD.svg)**
<p style="text-align: center;"><img src="./docs/images/ERD.svg"></p>

---
Данный проект никакого отношения не имеет к [kinopoisk.ru](https://kinopoisk.ru), а вся информация о фильмах и актерах взята с открытых интернет сайтов для поиска кино.
