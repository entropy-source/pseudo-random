import fill from './fill';
import nextFloat64 from './nextFloat64';
import nextInt32 from './nextInt32';
import nextUint64 from './nextUint64';
import splitmix64 from './splitmix64';
import xoroshiro128plus from './xoroshiro128plus';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	fill,
	nextFloat64,
	nextInt32,
	nextUint64,
	splitmix64,
	xoroshiro128plus,
};

export {fill, nextFloat64, nextInt32, nextUint64, splitmix64, xoroshiro128plus};
