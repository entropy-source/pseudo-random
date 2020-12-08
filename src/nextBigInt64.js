import nextBigUint64 from './nextBigUint64';

export default function nextBigInt64(prng) {
	return nextBigUint64(prng) - BigInt(2 ** 63);
}
