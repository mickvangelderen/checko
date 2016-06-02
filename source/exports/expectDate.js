import inspect from './inspect'
import isDate from './isDate'

function expectDate(value) {
	if (isDate(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Date.`)
}

export default expectDate
