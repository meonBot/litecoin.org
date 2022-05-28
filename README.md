# litecoin.org

Official [litecoin.org](https://litecoin.org) website source code.

## Updating Download Urls

data/software

## Dev environment
Install hugo (>= v0.69.2) from: https://gohugo.io/getting-started/quick-start/

```bash
$ npm i
$ npm start
$ hugo serve
```

Run hugo and npm start at the same time. Gulp compiles sass and Hugo renders and serves the page.

## Prod enviroment

```bash
$ npm i
$ npm run compile #recompile config.toml everytime you change i18n/strings
$ npm run build
```