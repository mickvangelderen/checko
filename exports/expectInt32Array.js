import inspect from './inspect'
import isInt32Array from './isInt32Array'

function expectInt32Array(value) {
	if (isInt32Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Int32Array.`)
}

export default expectInt32Array
