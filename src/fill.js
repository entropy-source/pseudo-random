import _fill from './_fill';
import nextUint8 from './nextUint8';
import nextUint16 from './nextUint16';
import nextInt32 from './nextInt32';
import nextFloat32 from './nextFloat32';
import nextFloat64 from './nextFloat64';
import nextBigInt64 from './nextBigInt64';
import nextBigUint64 from './nextBigUint64';

const fill = (prng, array, i, j) => {
	switch (array.constructor) {
		case ArrayBuffer:
			return _fill(nextUint8, new Uint8Array(array), i, j);

		case Int8Array:
		case Uint8Array:
		case Uint8ClampedArray:
			return _fill(
				nextUint8,
				prng,
				new Uint8Array(array.buffer, array.byteOffset, array.byteLength),
				i,
				j,
			);

		case Int16Array:
		case Uint16Array:
			return _fill(
				nextUint16,
				prng,
				new Uint16Array(array.buffer, array.byteOffset, array.length),
				i,
				j,
			);

		case Int32Array:
		case Uint32Array:
			return _fill(
				nextInt32,
				prng,
				new Int32Array(array.buffer, array.byteOffset, array.length),
				i,
				j,
			);

		case Float32Array:
			return _fill(nextFloat32, prng, array, i, j);

		case Float64Array:
			return _fill(nextFloat64, prng, array, i, j);

		case BigInt64Array:
			return _fill(nextBigInt64, prng, array, i, j);

		case BigUint64Array:
			return _fill(nextBigUint64, prng, array, i, j);

		default:
			throw new Error(
				`fill(prng, array, ...): array with constructor '${array.constructor.name}' not implemented`,
			);
	}
};

export default fill;
