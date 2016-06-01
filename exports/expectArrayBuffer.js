import inspect from './inspect'
import isArrayBuffer from './isArrayBuffer'

function expectArrayBuffer(value) {
	if (isArrayBuffer(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an ArrayBuffer.`)
}

export default expectArrayBuffer
