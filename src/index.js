import fill from './fill.js';
import nextFloat64 from './nextFloat64.js';
import nextInt32 from './nextInt32.js';
import nextUint64 from './nextUint64.js';
import splitmix64 from './splitmix64.js';
import xoroshiro128plus from './xoroshiro128plus.js';

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
