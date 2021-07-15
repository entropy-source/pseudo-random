import {add64, mul64, xor64, shr64, get64} from '@arithmetic-type/uint64';

export default function* splitmix64(seed) {
	let state = get64(...seed);
	while (true) {
		state = add64(state, get64(0x9e_37_79_b9, 0x7f_4a_7c_15));
		let z = state;
		z = mul64(xor64(z, shr64(z, 30)), get64(0xbf_58_47_6d, 0x1c_e4_e5_b9));
		z = mul64(xor64(z, shr64(z, 27)), get64(0x94_d0_49_bb, 0x13_31_11_eb));
		yield* xor64(z, shr64(z, 31));
	}
}
