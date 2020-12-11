:game_die: [@aureooms/js-pseudo-random](https://aureooms.github.io/js-pseudo-random)
==

<p align="center">
<a href="https://xkcd.com/221">
<img src="https://imgs.xkcd.com/comics/random_number.png" width="440">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Pseudorandom number generators for JavaScript.
See [docs](https://aureooms.github.io/js-pseudo-random/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).
```js
import {
  splitmix64,
  nextFloat64,
  nextUint64,
} from '@aureooms/js-pseudo-random';

const seed = [0, 0]; // Two 32-bit signed integers.
const prng = splitmix64(seed);
nextUint64(prng); // 64 random bits as two 32-bit signed integers (compatible with @aureooms/js-uint64).
nextFloat64(prng); // A random double in the range [0, 1[.
```

[![License](https://img.shields.io/github/license/aureooms/js-pseudo-random.svg)](https://raw.githubusercontent.com/aureooms/js-pseudo-random/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-pseudo-random.svg)](https://www.npmjs.org/package/@aureooms/js-pseudo-random)
[![Build](https://img.shields.io/travis/aureooms/js-pseudo-random/main.svg)](https://travis-ci.org/aureooms/js-pseudo-random/branches)
[![Dependencies](https://img.shields.io/david/aureooms/js-pseudo-random.svg)](https://david-dm.org/aureooms/js-pseudo-random)
[![Dev dependencies](https://img.shields.io/david/dev/aureooms/js-pseudo-random.svg)](https://david-dm.org/aureooms/js-pseudo-random?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/aureooms/js-pseudo-random.svg)](https://github.com/aureooms/js-pseudo-random/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-pseudo-random.svg)](https://www.npmjs.org/package/@aureooms/js-pseudo-random)

[![Code issues](https://img.shields.io/codeclimate/issues/aureooms/js-pseudo-random.svg)](https://codeclimate.com/github/aureooms/js-pseudo-random/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/aureooms/js-pseudo-random.svg)](https://codeclimate.com/github/aureooms/js-pseudo-random/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/aureooms/js-pseudo-random/main.svg)](https://codecov.io/gh/aureooms/js-pseudo-random)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/aureooms/js-pseudo-random.svg)](https://codeclimate.com/github/aureooms/js-pseudo-random/trends/technical_debt)
[![Documentation](https://aureooms.github.io/js-pseudo-random/badge.svg)](https://aureooms.github.io/js-pseudo-random/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-pseudo-random)](https://bundlephobia.com/result?p=@aureooms/js-pseudo-random)

## :scroll: References

  - [The PRNG shootout](http://prng.di.unimi.it)
  - [Testing common random-number generators](https://github.com/lemire/testingRNG)
