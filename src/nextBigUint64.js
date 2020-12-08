export default function nextBigUint64(prng) {
	const a = prng.next().value;
	const b = prng.next().value;
	return BigInt(a) * BigInt(2 ** 32) + BigInt(b);
}
