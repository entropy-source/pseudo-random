import assert from 'assert';

import {rotl64, get64, add64, xor64, shl64} from '@arithmetic-type/uint64';

export default function xoroshiro128plus(seed, options) {
	return new XoRoShiRo128Plus(seed, options);
}

class XoRoShiRo128Plus {
	constructor(seed, {a, b, c, JUMP}) {
		this.a = a || 24;
		this.b = b || 16;
		this.c = c || 37;
		this.JUMP = JUMP || [
			0xd8_f5_54_a5, 0xdf_90_02_94, 0x4b_32_01_fc, 0x17_08_65_df,
		];
		this.p = 0;
		this.z = 0;
		this.s0 = get64(seed[0], seed[1]);
		this.s1 = get64(seed[2], seed[3]);
	}

	next() {
		if (this.p === 0) {
			this.p = 1;
			const [value, z] = add64(this.s0, this.s1);
			this.z = z;
			return {value, done: false};
		}

		this.p = 0;
		const s0 = this.s0;
		const s1 = xor64(s0, this.s1);
		this.s0 = xor64(rotl64(s0, this.a), xor64(s1, shl64(s1, this.b)));
		this.s1 = rotl64(s1, this.c);
		return {value: this.z, done: false};
	}

	/**
	 * This is the jump function for the generator. It is equivalent
	 * to 2^64 calls to next(); it can be used to generate 2^64
	 * non-overlapping subsequences for parallel computations.
	 */
	jump() {
		assert(this.p === 0);

		let s0 = get64(0, 0);
		let s1 = get64(0, 0);

		for (const jump of this.JUMP) {
			for (let b = 0; b < 32; ++b) {
				if (jump & (1 << b)) {
					s0 = xor64(s0, this.s0);
					s1 = xor64(s1, this.s1);
				}

				this.next();
				this.next();
			}
		}

		this.s0 = s0;
		this.s1 = s1;
	}
}
