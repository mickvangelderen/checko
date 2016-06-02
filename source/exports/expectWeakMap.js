import inspect from './inspect'
import isWeakMap from './isWeakMap'

function expectWeakMap(value) {
	if (isWeakMap(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a WeakMap.`)
}

export default expectWeakMap
