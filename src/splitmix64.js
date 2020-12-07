import {add64, mul64, xor64, shr64, get64} from '@aureooms/js-uint64';

export default function* splitmix64(seed) {
	let state = get64(...seed);
	while (true) {
		state = add64(state, get64(0x9e3779b9, 0x7f4a7c15));
		let z = state;
		z = mul64(xor64(z, shr64(z, 30)), get64(0xbf58476d, 0x1ce4e5b9));
		z = mul64(xor64(z, shr64(z, 27)), get64(0x94d049bb, 0x133111eb));
		yield* xor64(z, shr64(z, 31));
	}
}
