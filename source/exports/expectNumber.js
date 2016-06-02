import inspect from './inspect'
import isNumber from './isNumber'

function expectNumber(value) {
	if (isNumber(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a number.`)
}

export default expectNumber
