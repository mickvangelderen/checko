import inspect from './inspect'
import isUint16Array from './isUint16Array'

function expectUint16Array(value) {
	if (isUint16Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint16Array.`)
}

export default expectUint16Array
