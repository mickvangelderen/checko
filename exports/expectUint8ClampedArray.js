import inspect from './inspect'
import isUint8ClampedArray from './isUint8ClampedArray'

function expectUint8ClampedArray(value) {
	if (isUint8ClampedArray(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint8ClampedArray.`)
}

export default expectUint8ClampedArray
