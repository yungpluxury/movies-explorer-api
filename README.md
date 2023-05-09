## Проект "Movies-explorer-api"
___

### Описание:

Данный проект создан для поддержания работы сервиса **Movies-explorer** ([перейти](https://yungpluxury-explorer-backend.netlify.app/.netlify/functions/api)). Выполняет функции: регистрации, авторизации, редактирования профиля пользователя и добавления/удаления фильмов из избранного пользователя.

___

### Где найти:

Ссылка на сервис - https://yungpluxury-explorer-frontend.netlify.app/

Ссылка на API - https://yungpluxury-explorer-backend.netlify.app/.netlify/functions/api

Ссылка на репозиторий с фронтэндом - https://github.com/yungpluxury/movies-explorer-frontend

___

## Используемые технологии:

- ExpressJS
- Mongoose
- Git
- Body-parser
- Helmet
- CORS
- MongoDB
- PM2
- Nginx

___

## Эндпоинты

| Адрес | Тип запроса | Функционал | Запрос |
|-------|-------------|------------|--------|
| /signin | post | Авторизация | email - string; password - string |
| /signup | post | Регистрация | name - string; email - string; password - string |
| /users/me | get | Получение текущего пользователя | - |
| /users/me | patch | Обновление данных текущего пользователя | name - string; email - string |
| /movies | get | Получение списка фильмов пользователя | - |
| /movies | post | Обновление списка фильмов пользователя | country - string; director- string; duration: number; year - string; description - string; image - string; trailer - string; thumbnail - string; movieId - number; nameRU - string; nameEN - string |
| /movies/:movieId | delete | Удаление фильма из списка фильмов пользователя | movieId - string |

___

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  

___

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload

___

## Планы по доработке проекта:

- Добавить в свой API функционал хранения и предоставления каталога фильмов
- Использование Docker для удобства разворачивания проекта на сервере
- Использование DockerCompose для объединения frontend и backend частей приложения
