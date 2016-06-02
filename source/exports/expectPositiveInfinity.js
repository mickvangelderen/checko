import inspect from './inspect'
import isPositiveInfinity from './isPositiveInfinity'

function expectPositiveInfinity(value) {
	if (isPositiveInfinity(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be positive infinity.`)
}

export default expectPositiveInfinity
