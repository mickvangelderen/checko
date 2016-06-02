import inspect from './inspect'
import isGeneratorFunction from './isGeneratorFunction'

function expectGeneratorFunction(value) {
	if (isGeneratorFunction(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a GeneratorFunction.`)
}

export default expectGeneratorFunction
