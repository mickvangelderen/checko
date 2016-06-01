import inspect from './inspect'

function expectTrue(value) {
	if (value === true) return value
	throw new TypeError(`Expected ${inspect(value)} to equal true.`)
}

export default expectTrue