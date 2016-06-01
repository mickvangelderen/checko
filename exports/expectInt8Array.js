import inspect from './inspect'
import isInt8Array from './isInt8Array'

function expectInt8Array(value) {
	if (isInt8Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Int8Array.`)
}

export default expectInt8Array
