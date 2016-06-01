import inspect from './inspect'
import isFunction from './isFunction'

function expectFunction(value) {
	if (isFunction(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Function.`)
}

export default expectFunction
