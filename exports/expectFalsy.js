import inspect from './inspect'

function expectFalsy(value) {
	if (!value) return value
	throw new TypeError(`Expected ${inspect(value)} to be falsy.`)
}

export default expectFalsy
