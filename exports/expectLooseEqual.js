import inspect from './inspect'

function expectLooseEqual(equal, value) {
	if (value == equal) return value
	throw new TypeError(`Expected ${inspect(value)} to loosely equal ${inspect(equal)}.`)
}

export default expectLooseEqual
