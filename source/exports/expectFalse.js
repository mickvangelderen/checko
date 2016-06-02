import inspect from './inspect'

function expectFalse(value) {
	if (value === false) return value
	throw new RangeError(`Expected ${inspect(value)} to equal false.`)
}

export default expectFalse
