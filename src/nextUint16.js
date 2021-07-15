export default function nextUint16(prng) {
	return (prng.next().value >>> 16) & 0xff_ff;
}
