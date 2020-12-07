export default function* genUint64(prng) {
	while (true) {
		yield [prng.next().value, prng.next().value];
	}
}
