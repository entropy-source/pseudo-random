const _fill = (next, prng, array, i = 0, j = array.length) => {
	for (; i < j; ++i) {
		array[i] = next(prng);
	}
};

export default _fill;
