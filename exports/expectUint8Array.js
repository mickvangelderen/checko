import inspect from './inspect'
import isUint8Array from './isUint8Array'

function expectUint8Array(value) {
	if (isUint8Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint8Array.`)
}

export default expectUint8Array
