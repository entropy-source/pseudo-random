:game_die: [@aureooms/js-pseudo-random](https://make-github-pseudonymous-again.github.io/js-pseudo-random)
==

<p align="center">
<a href="https://xkcd.com/221">
<img src="https://imgs.xkcd.com/comics/random_number.png" width="440">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Pseudorandom number generators for JavaScript.
See [docs](https://make-github-pseudonymous-again.github.io/js-pseudo-random/index.html).

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

[![License](https://img.shields.io/github/license/make-github-pseudonymous-again/js-pseudo-random.svg)](https://raw.githubusercontent.com/make-github-pseudonymous-again/js-pseudo-random/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@aureooms/js-pseudo-random.svg)](https://www.npmjs.org/package/@aureooms/js-pseudo-random)
[![Tests](https://img.shields.io/github/workflow/status/make-github-pseudonymous-again/js-pseudo-random/ci:test?event=push&label=tests)](https://github.com/make-github-pseudonymous-again/js-pseudo-random/actions/workflows/ci:test.yml?query=branch:main)
[![Dependencies](https://img.shields.io/david/make-github-pseudonymous-again/js-pseudo-random.svg)](https://david-dm.org/make-github-pseudonymous-again/js-pseudo-random)
[![Dev dependencies](https://img.shields.io/david/dev/make-github-pseudonymous-again/js-pseudo-random.svg)](https://david-dm.org/make-github-pseudonymous-again/js-pseudo-random?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/make-github-pseudonymous-again/js-pseudo-random.svg)](https://github.com/make-github-pseudonymous-again/js-pseudo-random/issues)
[![Downloads](https://img.shields.io/npm/dm/@aureooms/js-pseudo-random.svg)](https://www.npmjs.org/package/@aureooms/js-pseudo-random)

[![Code issues](https://img.shields.io/codeclimate/issues/make-github-pseudonymous-again/js-pseudo-random.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-pseudo-random/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/make-github-pseudonymous-again/js-pseudo-random.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-pseudo-random/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/make-github-pseudonymous-again/js-pseudo-random/main.svg)](https://codecov.io/gh/make-github-pseudonymous-again/js-pseudo-random)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/make-github-pseudonymous-again/js-pseudo-random.svg)](https://codeclimate.com/github/make-github-pseudonymous-again/js-pseudo-random/trends/technical_debt)
[![Documentation](https://make-github-pseudonymous-again.github.io/js-pseudo-random/badge.svg)](https://make-github-pseudonymous-again.github.io/js-pseudo-random/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@aureooms/js-pseudo-random)](https://bundlephobia.com/result?p=@aureooms/js-pseudo-random)

## :scroll: References

  - [The Art of Computer Programming Volume 2: Seminumerical Algorithms](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming#Volume_2_%E2%80%93_Seminumerical_Algorithms)
  - [The PRNG shootout](http://prng.di.unimi.it)
  - [Testing common random-number generators](https://github.com/lemire/testingRNG)
