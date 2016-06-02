import inspect from './inspect'
import isFiniteNumber from './isFiniteNumber'

function expectFiniteNumber(value) {
	if (isFiniteNumber(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be a finite number.`)
}

export default expectFiniteNumber
