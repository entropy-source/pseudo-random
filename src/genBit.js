export default function* genBit(prng) {
	for (const x of prng) {
		yield (x >>> 0) & 1;
		yield (x >>> 1) & 1;
		yield (x >>> 2) & 1;
		yield (x >>> 3) & 1;
		yield (x >>> 4) & 1;
		yield (x >>> 5) & 1;
		yield (x >>> 6) & 1;
		yield (x >>> 7) & 1;
		yield (x >>> 8) & 1;
		yield (x >>> 9) & 1;
		yield (x >>> 10) & 1;
		yield (x >>> 11) & 1;
		yield (x >>> 12) & 1;
		yield (x >>> 13) & 1;
		yield (x >>> 14) & 1;
		yield (x >>> 15) & 1;
		yield (x >>> 16) & 1;
		yield (x >>> 17) & 1;
		yield (x >>> 18) & 1;
		yield (x >>> 19) & 1;
		yield (x >>> 20) & 1;
		yield (x >>> 21) & 1;
		yield (x >>> 22) & 1;
		yield (x >>> 23) & 1;
		yield (x >>> 24) & 1;
		yield (x >>> 25) & 1;
		yield (x >>> 26) & 1;
		yield (x >>> 27) & 1;
		yield (x >>> 28) & 1;
		yield (x >>> 29) & 1;
		yield (x >>> 30) & 1;
		yield (x >>> 31) & 1;
	}
}
