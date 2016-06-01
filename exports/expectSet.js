import inspect from './inspect'
import isSet from './isSet'

function expectSet(value) {
	if (isSet(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Set.`)
}

export default expectSet
