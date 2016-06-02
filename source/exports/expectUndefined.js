import inspect from './inspect'
import isUndefined from './isUndefined'

function expectUndefined(value) {
	if (isUndefined(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to equal undefined.`)
}

export default expectUndefined
