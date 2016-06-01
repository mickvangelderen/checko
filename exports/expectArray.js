import inspect from './inspect'
import isArray from './isArray'

function expectArray(value) {
	if (isArray(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Array.`)
}

export default expectArray
