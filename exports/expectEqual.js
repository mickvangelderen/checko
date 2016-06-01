import inspect from './inspect'

function expectEqual(equal, value) {
	if (value === equal) return value
	throw new TypeError(`Expected ${inspect(value)} to equal ${inspect(equal)}.`)
}

export default expectEqual