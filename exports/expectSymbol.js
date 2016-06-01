import inspect from './inspect'
import isSymbol from './isSymbol'

function expectSymbol(value) {
	if (isSymbol(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Symbol.`)
}

export default expectSymbol
