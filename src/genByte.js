export default function* genByte(prng) {
	for (const x of prng) {
		yield (x >>> 0) & 0xff;
		yield (x >>> 8) & 0xff;
		yield (x >>> 16) & 0xff;
		yield (x >>> 24) & 0xff;
	}
}
