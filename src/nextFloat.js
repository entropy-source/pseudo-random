export default function nextFloat(prng) {
	const a = prng.next().value;
	const b = prng.next().value;
	return (a >>> 0) / 2 ** 32 + (b >>> 0) / 2 ** 64;
}
