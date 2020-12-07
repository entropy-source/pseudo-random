export default function nextUint64(prng) {
	return [prng.next().value, prng.next().value];
}
