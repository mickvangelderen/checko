import inspect from './inspect'
import isNaN from './isNaN'

function expectNaN(value) {
	if (isNaN(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be NaN.`)
}

export default expectNaN
