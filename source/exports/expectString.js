import inspect from './inspect'
import isString from './isString'

function expectString(value) {
	if (isString(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a String.`)
}

export default expectString
