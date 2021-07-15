import genBit from './genBit.js';

export default function* genBoolean(prng) {
	for (const bit of genBit(prng)) yield Boolean(bit);
}
