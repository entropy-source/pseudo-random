import test from 'ava';
import {range} from '@iterable-iterator/range';
import {map} from '@iterable-iterator/map';

import {get64} from '@arithmetic-type/uint64';
import {splitmix64, nextUint64, nextFloat64} from '../../src/index.js';

test('https://rosettacode.org/wiki/Pseudo-random_numbers/Splitmix64 #1', (t) => {
	/**
	 * Show the first five integers generated using the seed 1234567.
	 */
	const seed = [0, 1_234_567];
	const prng = splitmix64(seed);
	t.deepEqual(nextUint64(prng), [0x59_9e_d0_17 | 0, 0xfb_08_fc_85 | 0]); // 6457827717110365317
	t.deepEqual(nextUint64(prng), [0x2c_73_f0_84 | 0, 0x58_54_0f_a5 | 0]); // 3203168211198807973
	t.deepEqual(nextUint64(prng), [0x88_3e_bc_e5 | 0, 0xa3_f2_7c_77 | 0]); // 9817491932198370423
	t.deepEqual(nextUint64(prng), [0x3f_be_f7_40 | 0, 0xe9_17_7b_3f | 0]); // 4593380528125082431
	t.deepEqual(nextUint64(prng), [0xe3_b8_34_67 | 0, 0x08_cb_5e_cd | 0]); // 16408922859458223821
});

test('https://rosettacode.org/wiki/Pseudo-random_numbers/Splitmix64 #2', (t) => {
	/**
	 * Show that for an initial seed of 987654321, the counts of 100_000
	 * repetitions of floor next_float() * 5 is as follows:
	 *
	 * 0: 20027, 1: 19892, 2: 20073, 3: 19978, 4: 20030
	 */

	const seed = [0, 987_654_321];
	const prng = splitmix64(seed);
	const histogram = Array.from({length: 5}).fill(0);
	for (const k of map(
		() => Math.floor(nextFloat64(prng) * 5) | 0,
		range(100_000),
	)) {
		++histogram[k];
	}

	t.deepEqual(histogram, [20_027, 19_892, 20_073, 19_978, 20_030]);
});

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L9', (t) => {
	const seed = [0, 0xde_ad_be_ef];
	const prng = splitmix64(seed);
	t.deepEqual(nextUint64(prng), get64(0x4a_df_b9_0f, 0x68_c9_eb_9b)); // 5395234354446855067
	t.deepEqual(nextUint64(prng), get64(0xde_58_6a_31, 0x41_a1_09_22)); // 16021672434157553954
	t.deepEqual(nextUint64(prng), get64(0x02_1f_bc_2f, 0x8e_1c_fc_1d)); // 153047824787635229
	t.deepEqual(nextUint64(prng), get64(0x74_66_ce_73, 0x7b_e1_67_90)); // 8387618351419058064
	t.deepEqual(nextUint64(prng), get64(0x3b_fa_87_64, 0xf6_85_bd_1c)); // 4321915660117851420
	t.deepEqual(nextUint64(prng), get64(0xab_20_3e_50, 0x3c_b5_5b_3f)); // 12330924294077242175
	t.deepEqual(nextUint64(prng), get64(0x5a_2f_dc_2b, 0xf6_8c_ed_b3)); // 6498654868697050547
	t.deepEqual(nextUint64(prng), get64(0xb3_0a_4c_cf, 0x43_0b_1b_5a)); // 12901208535622949722
	t.deepEqual(nextUint64(prng), get64(0x0a_90_41_50, 0x39_bd_59_85)); // 761180149847513477
	t.deepEqual(nextUint64(prng), get64(0x26_ae_50_84, 0x77_45_eb_7e)); // 2787253749255891838
});
