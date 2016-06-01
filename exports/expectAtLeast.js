import inspect from './inspect'

function expectAtLeast(least, value) {
	if (value >= least) return value
	throw new TypeError(`Expected ${inspect(value)} to be at least ${inspect(least)}.`)
}

export default expectAtLeast
