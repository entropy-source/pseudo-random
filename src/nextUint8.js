export default function nextUint8(prng) {
	return (prng.next().value >>> 24) & 0xff;
}
