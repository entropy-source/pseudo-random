import test from 'ava';
import {range, map} from '@aureooms/js-itertools';

import {splitmix64, nextUint64, nextFloat} from '../../src';

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
		() => Math.floor(nextFloat(prng) * 5) | 0,
		range(100000),
	)) {
		++histogram[k];
	}

	t.deepEqual(histogram, [20027, 19892, 20073, 19978, 20030]);
});
