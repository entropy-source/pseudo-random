export default function nextUint32(prng) {
	return prng.next().value >>> 0;
}
