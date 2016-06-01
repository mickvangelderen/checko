import inspect from './inspect'
import isInt16Array from './isInt16Array'

function expectInt16Array(value) {
	if (isInt16Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Int16Array.`)
}

export default expectInt16Array
