# is-dst [![Build Status](https://travis-ci.org/brandon93s/is-dst.svg?branch=master)](https://travis-ci.org/brandon93s/is-dst)

> Checks if local clocks are currently adjusted for [daylight saving time](https://en.wikipedia.org/wiki/Daylight_saving_time "Daylight Saving Time").  :sunny:


## Install

Install with yarn:
```shell
$ yarn add is-dst
```
Or with npm:
```shell
$ npm install --save is-dst
```

## Usage

```js
const isDST = require('is-dst')

// examples invoked in US/Eastern timezone

isDST(new Date('January 1, 2017'))
//=> false

isDST(new Date('July 1, 2017'))
//=> true

// invoked on February 5, 2017
isDST()
//=> false
```

## API

### isDST([,date])

#### date

Type: `Date`<br>
Default: `new Date()`

The date to check for DST.


## Assumptions

- Returns false for time zones that do not observe DST.

- Assumes that January 1st and July 1st will never both be DST or not DST in a given year. This is currently true for all time zones that observe DST.

## License

MIT © [Brandon Smith](https://github.com/brandon93s)
