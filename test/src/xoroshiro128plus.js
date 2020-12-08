import test from 'ava';

import {get64} from '@aureooms/js-uint64';

import {splitmix64, xoroshiro128plus, fill, nextUint64} from '../../src';

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L28', (t) => {
	const prng = xoroshiro128plus([0, 1, 0, 2], {a: 55, b: 14, c: 36});

	t.deepEqual(nextUint64(prng), get64(0x00000000, 0x00000003)); // 3
	t.deepEqual(nextUint64(prng), get64(0x00800030, 0x0000c003)); // 36029003177443331
	t.deepEqual(nextUint64(prng), get64(0x01184060, 0x38000363)); // 78883775479546723
	t.deepEqual(nextUint64(prng), get64(0xa080fe50, 0x30c4c366)); // 11565523463456473958
	t.deepEqual(nextUint64(prng), get64(0x3ae0e84f, 0x181c8404)); // 4242646275387589636
	t.deepEqual(nextUint64(prng), get64(0x03902839, 0x17940944)); // 256749404433942852
	t.deepEqual(nextUint64(prng), get64(0x98dcc1f0, 0x6360888c)); // 11014892026844973196
	t.deepEqual(nextUint64(prng), get64(0x7db94a02, 0x5d95c80f)); // 9059353499452950543
	t.deepEqual(nextUint64(prng), get64(0x77508804, 0x6d70b290)); // 8597521241247625872
	t.deepEqual(nextUint64(prng), get64(0x412422d9, 0x4084790d)); // 4693915028112570637
});

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L47', (t) => {
	const prng = xoroshiro128plus(
		[0x0916df85, 0x1e2aee44, 0x9ade0f09, 0xffca1bc4],
		{
			a: 55,
			b: 14,
			c: 36,
			JUMP: [0xeba5facb, 0xbeac0467, 0x86aa9922, 0xd86b048b],
		},
	);

	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x658bac67, 0x42f1cb34)); // 7317131579098254132
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x7ea22887, 0x3c5d2ad5)); // 9124900356304480981
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0xe794ec98, 0xaebcd8bc)); // 16687222659825326268
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x93e0f50d, 0x5d924d3a)); // 10655786156111842618
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x0555abbe, 0x490eb380)); // 384402176967881600
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x1e2935c4, 0x3d1ceffa)); // 2173327412138143738
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0xc94b9bd3, 0x583ae4dd)); // 14504858356897473757
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x426bc5ee, 0x5b3a4f93)); // 4786136656534720403
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x2ac1f1af, 0xddd342bf)); // 3081009357741310655
	prng.jump();
	t.deepEqual(nextUint64(prng), get64(0x3884d3ed, 0xd6ffd586)); // 4072612981517571462
});

test('Example found at https://github.com/dgryski/go-xoroshiro/blob/ea5ca0291510c1f8b16321d610ae73e1006d499f/xoro_test.go#L80', (t) => {
	const seeder = splitmix64([0x0ddc0ffe, 0xebadf00d]);
	const seed = new Int32Array(4);
	fill(seeder, seed);

	const prng = xoroshiro128plus(seed, {a: 55, b: 14, c: 36});

	t.deepEqual(nextUint64(prng), get64(0xa3f4ee8f, 0x1df50a08)); // 11814330020949985800
	t.deepEqual(nextUint64(prng), get64(0xa3febba4, 0x5a9ce9c5)); // 11817088786836023749
	t.deepEqual(nextUint64(prng), get64(0x16f4c81d, 0x130768eb)); // 1654166990350674155
	t.deepEqual(nextUint64(prng), get64(0xc3da8db5, 0x1d9cc8ea)); // 14112748191344281834
	t.deepEqual(nextUint64(prng), get64(0x3b8315d6, 0xf1f63305)); // 4288295283113472773
	t.deepEqual(nextUint64(prng), get64(0x747636fe, 0x553bb5ca)); // 8391955421631067594
	t.deepEqual(nextUint64(prng), get64(0x0255d516, 0xf81d9239)); // 168274855724945977
	t.deepEqual(nextUint64(prng), get64(0x27114eb0, 0xcdd2961f)); // 2815117763357611551
	t.deepEqual(nextUint64(prng), get64(0xa92195f5, 0x93148843)); // 12187186948608395331
	t.deepEqual(nextUint64(prng), get64(0x9381f38a, 0x6d63d35c)); // 10629044371437376348
});
