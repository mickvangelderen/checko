import inspect from './inspect'
import isObject from './isObject'

function expectObject(value) {
	if (isObject(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an object.`)
}

export default expectObject
