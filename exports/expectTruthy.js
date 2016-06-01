import inspect from './inspect'

function expectTruthy(value) {
	if (value) return value
	throw new TypeError(`Expected ${inspect(value)} to be truthy.`)
}

export default expectTruthy
