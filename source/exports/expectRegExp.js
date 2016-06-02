import inspect from './inspect'
import isRegExp from './isRegExp'

function expectRegExp(value) {
	if (isRegExp(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a RegExp.`)
}

export default expectRegExp
