export default function nextFloat32(prng) {
	const x = prng.next().value;
	return (x >>> 9) / 2 ** 23;
}
