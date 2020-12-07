import genBit from './genBit';

export default function* genBoolean(prng) {
	for (const bit of genBit(prng)) yield Boolean(bit);
}
