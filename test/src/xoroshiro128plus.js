import test from 'ava';

import {get64} from '@arithmetic-type/uint64';

import {
	splitmix64,
	xoroshiro128plus,
	fill,
	nextUint64,
} from '../../src/index.js';

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L28', (t) => {
	const prng = xoroshiro128plus([0, 1, 0, 2], {a: 55, b: 14, c: 36});

	t.deepEqual(nextUint64(prng), get64(0x00_00_00_00, 0x00_00_00_03)); // 3
	t.deepEqual(nextUint64(prng), get64(0x00_80_00_30, 0x00_00_c0_03)); // 36029003177443331
	t.deepEqual(nextUint64(prng), get64(0x01_18_40_60, 0x38_00_03_63)); // 78883775479546723
	t.deepEqual(nextUint64(prng), get64(0xa0_80_fe_50, 0x30_c4_c3_66)); // 11565523463456473958
	t.deepEqual(nextUint64(prng), get64(0x3a_e0_e8_4f, 0x18_1c_84_04)); // 4242646275387589636
	t.deepEqual(nextUint64(prng), get64(0x03_90_28_39, 0x17_94_09_44)); // 256749404433942852
	t.deepEqual(nextUint64(prng), get64(0x98_dc_c1_f0, 0x63_60_88_8c)); // 11014892026844973196
	t.deepEqual(nextUint64(prng), get64(0x7d_b9_4a_02, 0x5d_95_c8_0f)); // 9059353499452950543
	t.deepEqual(nextUint64(prng), get64(0x77_50_88_04, 0x6d_70_b2_90)); // 8597521241247625872
	t.deepEqual(nextUint64(prng), get64(0x41_24_22_d9, 0x40_84_79_0d)); // 4693915028112570637
});

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L47', (t) => {
	const prng = xoroshiro128plus(
		[0x09_16_df_85, 0x1e_2a_ee_44, 0x9a_de_0f_09, 0xff_ca_1b_c4],
		{
			a: 55,
			b: 14,
			c: 36,
			JUMP: [0xeb_a5_fa_cb, 0xbe_ac_04_67, 0x86_aa_99_22, 0xd8_6b_04_8b],
		},
	);

	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x65_8b_ac_67, 0x42_f1_cb_34)); // 7317131579098254132
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x7e_a2_28_87, 0x3c_5d_2a_d5)); // 9124900356304480981
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0xe7_94_ec_98, 0xae_bc_d8_bc)); // 16687222659825326268
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x93_e0_f5_0d, 0x5d_92_4d_3a)); // 10655786156111842618
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x05_55_ab_be, 0x49_0e_b3_80)); // 384402176967881600
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x1e_29_35_c4, 0x3d_1c_ef_fa)); // 2173327412138143738
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0xc9_4b_9b_d3, 0x58_3a_e4_dd)); // 14504858356897473757
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x42_6b_c5_ee, 0x5b_3a_4f_93)); // 4786136656534720403
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x2a_c1_f1_af, 0xdd_d3_42_bf)); // 3081009357741310655
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x38_84_d3_ed, 0xd6_ff_d5_86)); // 4072612981517571462
});

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L80', (t) => {
	const seeder = splitmix64([0x0d_dc_0f_fe, 0xeb_ad_f0_0d]);
	const seed = new Int32Array(4);
	fill(seeder, seed);

	const prng = xoroshiro128plus(seed, {a: 55, b: 14, c: 36});

	t.deepEqual(nextUint64(prng), get64(0xa3_f4_ee_8f, 0x1d_f5_0a_08)); // 11814330020949985800
	t.deepEqual(nextUint64(prng), get64(0xa3_fe_bb_a4, 0x5a_9c_e9_c5)); // 11817088786836023749
	t.deepEqual(nextUint64(prng), get64(0x16_f4_c8_1d, 0x13_07_68_eb)); // 1654166990350674155
	t.deepEqual(nextUint64(prng), get64(0xc3_da_8d_b5, 0x1d_9c_c8_ea)); // 14112748191344281834
	t.deepEqual(nextUint64(prng), get64(0x3b_83_15_d6, 0xf1_f6_33_05)); // 4288295283113472773
	t.deepEqual(nextUint64(prng), get64(0x74_76_36_fe, 0x55_3b_b5_ca)); // 8391955421631067594
	t.deepEqual(nextUint64(prng), get64(0x02_55_d5_16, 0xf8_1d_92_39)); // 168274855724945977
	t.deepEqual(nextUint64(prng), get64(0x27_11_4e_b0, 0xcd_d2_96_1f)); // 2815117763357611551
	t.deepEqual(nextUint64(prng), get64(0xa9_21_95_f5, 0x93_14_88_43)); // 12187186948608395331
	t.deepEqual(nextUint64(prng), get64(0x93_81_f3_8a, 0x6d_63_d3_5c)); // 10629044371437376348
});
