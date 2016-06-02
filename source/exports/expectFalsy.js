import inspect from './inspect'

function expectFalsy(value) {
	if (!value) return value
	throw new RangeError(`Expected ${inspect(value)} to be falsy.`)
}

export default expectFalsy
