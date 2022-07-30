# GSES BTC Application
Технічне завдання та опис API [тут](https://drive.google.com/file/d/1yTam6PdjgAY9l8IhqyYMC3I_LAe7OOCL/view)

Цей проект був завантажений за допомогою [Fastify-CLI](https://www.npmjs.com/package/fastify-cli).
<!-- This project was bootstrapped with  -->

Цей проект був побудований з [Fastify](https://fastify.io) та [TypeScript](https://typescriptlang.org).
 <!-- This project was buld using and -->
***
## Available Scripts
В директорії проекту можна запускати:
<!-- In the project directory, you can run: -->

### `npm run start`
Запускає попередньо скомпільований проект у JS у папці **/dist/** в production mode.
<!-- Run already precompiled project into JS in **/dist/**  in production mode. -->

### `npm run start:ts`
Компілює і запускає сервер в production mode.
<!-- To compile and run server in production mode. -->

### `npm run build:ts`
Компілює проект в JS
<!-- Compiles project into JS in **/dist/** folder. -->

### `npm run watch:ts`
Компілює проект в JS у watch mode.
<!-- To compile project into JS in watch mode. -->

### `npm run dev`
Запускає прект в development mode (в watch mode).
<!-- Running project in development mode (in watch mode). -->

### `npm run dev:start`
Запускає прект в development mode (без watch mode).
<!-- To start the app in dev mode (without watching for changes in .ts files). -->

Запустіть [http://localhost:5000](http://localhost:5000) щоб побачити чи протестувати

<!-- Open [http://localhost:5000](http://localhost:5000) to view it in the browser. -->

***
## Docker
Припустимо що ви перебуваєте в корені проекту, запустіть наступне у вашому терміналі:
<!-- Assuming you are in the project directory run the following lines in your terminal: -->

```bash
$ docker build -t fastify_gses_btc_app .
$ docker run -p 5000:5000 fastify_gses_btc_app
```
**Важливо:** Потрібно обов'язково указувати параметр `-p 5000:5000` щоб API ендпоінтами можна було користуватися.

<!-- **Important:** you should specify port option `-p 5000:5000` for app's API endpoints to be reachable. -->

***

## Learn More

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).
