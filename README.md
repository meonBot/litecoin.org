# litecoin.org

Official [litecoin.org](https://litecoin.org) website source code.

## Updating Download Urls

data/software

## Dev environment
Install bun (>= 1.0.0) from: https://bun.sh/
Install hugo (>= v0.69.2) from: https://gohugo.io/getting-started/quick-start/

```bash
$ bun i
$ bun start
$ hugo serve
```

Run hugo and bun start at the same time. Gulp compiles sass and Hugo renders and serves the page.

## Prod enviroment

```bash
$ bun i
$ bun run compile #recompile config.toml everytime you change i18n/strings
$ bun run build
```