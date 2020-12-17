import assert from 'assert';

/**
 * /!\ This generator yields numbers in range [1, 2^31 - 1[
 */
export default function* parkmiller(seed) {
	const m = 2147483647; // 2^31 - 1
	const a = 16807; // 7^5
	assert(Number.isInteger(seed));
	assert(seed >= 0 && seed < m);
	let state = seed;
	while (true) {
		state *= a;
		state %= m;
		yield state;
	}
}
