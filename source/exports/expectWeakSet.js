import inspect from './inspect'
import isWeakSet from './isWeakSet'

function expectWeakSet(value) {
	if (isWeakSet(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a WeakSet.`)
}

export default expectWeakSet
