:game_die: [@entropy-source/pseudo-random](https://entropy-source.github.io/pseudo-random)
==

<p align="center">
<a href="https://xkcd.com/221">
<img src="https://imgs.xkcd.com/comics/random_number.png" width="440">
</a><br/>
© <a href="https://xkcd.com">xkcd.com</a>
</p>

Pseudorandom number generators for JavaScript.
See [docs](https://entropy-source.github.io/pseudo-random/index.html).

> :warning: The code requires `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).
```js
import {
  splitmix64,
  nextFloat64,
  nextUint64,
} from '@entropy-source/pseudo-random';

const seed = [0, 0]; // Two 32-bit signed integers.
const prng = splitmix64(seed);
nextUint64(prng); // 64 random bits as two 32-bit signed integers (compatible with @arithmetic-type/uint64).
nextFloat64(prng); // A random double in the range [0, 1[.
```

[![License](https://img.shields.io/github/license/entropy-source/pseudo-random.svg)](https://raw.githubusercontent.com/entropy-source/pseudo-random/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@entropy-source/pseudo-random.svg)](https://www.npmjs.org/package/@entropy-source/pseudo-random)
[![Tests](https://img.shields.io/github/workflow/status/entropy-source/pseudo-random/ci:cover?event=push&label=tests)](https://github.com/entropy-source/pseudo-random/actions/workflows/ci:cover.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/entropy-source/pseudo-random.svg)](https://github.com/entropy-source/pseudo-random/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/entropy-source/pseudo-random.svg)](https://github.com/entropy-source/pseudo-random/issues)
[![Downloads](https://img.shields.io/npm/dm/@entropy-source/pseudo-random.svg)](https://www.npmjs.org/package/@entropy-source/pseudo-random)

[![Code issues](https://img.shields.io/codeclimate/issues/entropy-source/pseudo-random.svg)](https://codeclimate.com/github/entropy-source/pseudo-random/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/entropy-source/pseudo-random.svg)](https://codeclimate.com/github/entropy-source/pseudo-random/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/entropy-source/pseudo-random/main.svg)](https://codecov.io/gh/entropy-source/pseudo-random)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/entropy-source/pseudo-random.svg)](https://codeclimate.com/github/entropy-source/pseudo-random/trends/technical_debt)
[![Documentation](https://entropy-source.github.io/pseudo-random/badge.svg)](https://entropy-source.github.io/pseudo-random/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@entropy-source/pseudo-random)](https://bundlephobia.com/result?p=@entropy-source/pseudo-random)

## :scroll: References

  - [The Art of Computer Programming Volume 2: Seminumerical Algorithms](https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming#Volume_2_%E2%80%93_Seminumerical_Algorithms)
  - [The PRNG shootout](http://prng.di.unimi.it)
  - [Testing common random-number generators](https://github.com/lemire/testingRNG)
