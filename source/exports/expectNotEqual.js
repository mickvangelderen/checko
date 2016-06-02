import inspect from './inspect'

function expectNotEqual(equal, value) {
	if (value !== equal) return value
	throw new RangeError(`Expected ${inspect(value)} to not equal ${inspect(equal)}.`)
}

export default expectNotEqual
