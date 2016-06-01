import inspect from './inspect'
import isFloat32Array from './isFloat32Array'

function expectFloat32Array(value) {
	if (isFloat32Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Float32Array.`)
}

export default expectFloat32Array
