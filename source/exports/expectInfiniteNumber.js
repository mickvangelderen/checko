import inspect from './inspect'
import isInfiniteNumber from './isInfiniteNumber'

function expectInfiniteNumber(value) {
	if (isInfiniteNumber(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be an infinite number.`)
}

export default expectInfiniteNumber
