import inspect from './inspect'
import isMap from './isMap'

function expectMap(value) {
	if (isMap(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Map.`)
}

export default expectMap
