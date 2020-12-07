import nextFloat from './nextFloat';
import nextInt32 from './nextInt32';
import nextUint64 from './nextUint64';
import splitmix64 from './splitmix64';
import xoroshiro128plus from './xoroshiro128plus';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
	nextFloat,
	nextInt32,
	nextUint64,
	splitmix64,
	xoroshiro128plus,
};

export {nextFloat, nextInt32, nextUint64, splitmix64, xoroshiro128plus};
