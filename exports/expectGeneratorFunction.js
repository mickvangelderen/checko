const inspect = require('./inspect')
const isGeneratorFunction = require('./isGeneratorFunction')

function expectGeneratorFunction(value) {
	if (isGeneratorFunction(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a GeneratorFunction.`)
}

module.exports = expectGeneratorFunction
