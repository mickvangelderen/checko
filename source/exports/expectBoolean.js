import inspect from './inspect'
import isBoolean from './isBoolean'

function expectBoolean(value) {
	if (isBoolean(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Boolean.`)
}

export default expectBoolean
