import test from 'ava';
import {range} from '@iterable-iterator/range';
import {map} from '@iterable-iterator/map';

import {get64} from '@arithmetic-type/uint64';
import {splitmix64, nextUint64, nextFloat64} from '../../src/index.js';

test('https://rosettacode.org/wiki/Pseudo-random_numbers/Splitmix64 #1', (t) => {
	/**
	 * Show the first five integers generated using the seed 1234567.
	 */
	const seed = [0, 1234567];
	const prng = splitmix64(seed);
	t.deepEqual(nextUint64(prng), [0x599ed017 | 0, 0xfb08fc85 | 0]); // 6457827717110365317
	t.deepEqual(nextUint64(prng), [0x2c73f084 | 0, 0x58540fa5 | 0]); // 3203168211198807973
	t.deepEqual(nextUint64(prng), [0x883ebce5 | 0, 0xa3f27c77 | 0]); // 9817491932198370423
	t.deepEqual(nextUint64(prng), [0x3fbef740 | 0, 0xe9177b3f | 0]); // 4593380528125082431
	t.deepEqual(nextUint64(prng), [0xe3b83467 | 0, 0x08cb5ecd | 0]); // 16408922859458223821
});

test('https://rosettacode.org/wiki/Pseudo-random_numbers/Splitmix64 #2', (t) => {
	/**
	 * Show that for an initial seed of 987654321, the counts of 100_000
	 * repetitions of floor next_float() * 5 is as follows:
	 *
	 * 0: 20027, 1: 19892, 2: 20073, 3: 19978, 4: 20030
	 */

	const seed = [0, 987654321];
	const prng = splitmix64(seed);
	const histogram = new Array(5).fill(0);
	for (const k of map(
		() => Math.floor(nextFloat64(prng) * 5) | 0,
		range(100000),
	)) {
		++histogram[k];
	}

	t.deepEqual(histogram, [20027, 19892, 20073, 19978, 20030]);
});

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L9', (t) => {
	const seed = [0, 0xdeadbeef];
	const prng = splitmix64(seed);
	t.deepEqual(nextUint64(prng), get64(0x4adfb90f, 0x68c9eb9b)); // 5395234354446855067
	t.deepEqual(nextUint64(prng), get64(0xde586a31, 0x41a10922)); // 16021672434157553954
	t.deepEqual(nextUint64(prng), get64(0x021fbc2f, 0x8e1cfc1d)); // 153047824787635229
	t.deepEqual(nextUint64(prng), get64(0x7466ce73, 0x7be16790)); // 8387618351419058064
	t.deepEqual(nextUint64(prng), get64(0x3bfa8764, 0xf685bd1c)); // 4321915660117851420
	t.deepEqual(nextUint64(prng), get64(0xab203e50, 0x3cb55b3f)); // 12330924294077242175
	t.deepEqual(nextUint64(prng), get64(0x5a2fdc2b, 0xf68cedb3)); // 6498654868697050547
	t.deepEqual(nextUint64(prng), get64(0xb30a4ccf, 0x430b1b5a)); // 12901208535622949722
	t.deepEqual(nextUint64(prng), get64(0x0a904150, 0x39bd5985)); // 761180149847513477
	t.deepEqual(nextUint64(prng), get64(0x26ae5084, 0x7745eb7e)); // 2787253749255891838
});
