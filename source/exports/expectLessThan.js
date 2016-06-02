import inspect from './inspect'

function expectLessThan(less, value) {
	if (value < less) return value
	throw new RangeError(`Expected ${inspect(value)} to be less than ${inspect(less)}.`)
}

export default expectLessThan
