import inspect from './inspect'
import isFloat64Array from './isFloat64Array'

function expectFloat64Array(value) {
	if (isFloat64Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Float64Array.`)
}

export default expectFloat64Array
