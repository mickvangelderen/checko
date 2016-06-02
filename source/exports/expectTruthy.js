import inspect from './inspect'

function expectTruthy(value) {
	if (value) return value
	throw new RangeError(`Expected ${inspect(value)} to be truthy.`)
}

export default expectTruthy
