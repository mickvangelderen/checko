import inspect from './inspect'
import isNegativeInfinity from './isNegativeInfinity'

function expectNegativeInfinity(value) {
	if (isNegativeInfinity(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be negative infinity.`)
}

export default expectNegativeInfinity
