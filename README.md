# @tadashi/graylog

[![NPM version][npm-img]][npm]
[![Node.js CI][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/graylog.svg
[npm]:             https://www.npmjs.com/package/@tadashi/graylog
[ci-img]:          https://github.com/lagden/graylog/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/graylog/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/graylog/badge.svg?branch=main
[coveralls]:       https://coveralls.io/github/lagden/graylog?branch=main


Publishing application logs to Graylog.


## Install

```
$ npm i -S @tadashi/graylog
```

## API

### Environment variables available

- TADASHI_CONSOLE_LOG = 1


### createLogger(name, \[options\]): Logger

> Type: Logger


#### name 

> Type: string

The log's name.


#### options 

> Type: object  
> Default: {}

See the options here:  
https://github.com/deepal/node-gelfy#gelfycreateoptions


## Usage

```js
import createLogger from '@tadashi/graylog'

const logger = createLogger('example', {
  host: '127.0.0.1'
})

logger.info({
  message: 'Show the info',
  custom_prop: '...'
})
```


## License

MIT © [Thiago Lagden](https://github.com/lagden)
