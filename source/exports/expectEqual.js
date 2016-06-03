import inspect from './inspect'

function expectEqual(expected, value) {
	if (value === expected) return value
	throw new RangeError(`Expected ${inspect(value)} to equal ${inspect(expected)}.`)
}

export default expectEqual