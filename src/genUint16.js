export default function* genUint16(prng) {
	for (const x of prng) {
		yield (x >>> 0) & 0xff_ff;
		yield (x >>> 16) & 0xff_ff;
	}
}
