import inspect from './inspect'
import isUint32Array from './isUint32Array'

function expectUint32Array(value) {
	if (isUint32Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint32Array.`)
}

export default expectUint32Array
