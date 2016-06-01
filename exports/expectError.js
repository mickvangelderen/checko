import inspect from './inspect'
import isError from './isError'

function expectError(value) {
	if (isError(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Error.`)
}

export default expectError
