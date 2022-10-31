

# 📽️ Неофициальное апи кинопоиска
<p style="text-align: center;"><img style="object-fit: cover; max-width: 1080px" src="./docs/images/cover.png" height="400px" width="100%"></p>

Цель этого репозитория решить проблемы уже существующей апи и предоставить возможность юзерам вносить свой вклад в разработку.  

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

---
**[Текущая схема базы данных](https://raw.githubusercontent.com/kinopoiskdev/kinopoiskdev/main/docs/images/ERD.svg)**
<p style="text-align: center;"><img src="./docs/images/ERD.svg"></p>

---
Данный проект никакого отношения не имеет к [kinopoisk.ru](https://kinopoisk.ru), а вся информация о фильмах и актерах взята с открытых интернет сайтов для поиска кино.
