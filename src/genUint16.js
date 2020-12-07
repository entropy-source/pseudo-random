export default function* genUint16(prng) {
	for (const x of prng) {
		yield (x >>> 0) & 0xffff;
		yield (x >>> 16) & 0xffff;
	}
}
