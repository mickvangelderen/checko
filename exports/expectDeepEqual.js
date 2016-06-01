import inspect from './inspect'
import isDeepEqual from './isDeepEqual'

function expectDeepEqual(equal, value) {
	if (isDeepEqual(equal, value)) return value
	throw new TypeError(`Expected ${inspect(value)} to recursively equal ${inspect(equal)}.`)
}

export default expectDeepEqual
