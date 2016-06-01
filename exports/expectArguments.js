import inspect from './inspect'
import isArguments from './isArguments'

function expectArguments(value) {
	if (isArguments(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Arguments object.`)
}

export default expectArguments
