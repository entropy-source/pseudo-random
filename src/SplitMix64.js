import {add64, mul64, xor64, shr64, get64} from '@aureooms/js-uint64';

export default class SplitMix64 {

	constructor ( seed ) {
		this.state = seed;
	}

	next () {
		this.state = add64(this.state, get64(0x9e3779b9, 0x7f4a7c15));
		let z = this.state;
		z = mul64(xor64(z, shr64(z, 30)), get64(0xbf58476d, 0x1ce4e5b9));
		z = mul64(xor64(z, shr64(z, 27)), get64(0x94d049bb, 0x133111eb));
		return xor64(z, shr64(z, 31));
	}

	nextFloat() {
		const [a, b] = this.next();
		return (a >>> 0) / 2 ** 32 + (b >>> 0) / 2 ** 64;
	}
}
