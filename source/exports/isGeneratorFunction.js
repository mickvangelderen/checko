const objectToString = Object.prototype.toString

function isGeneratorFunction(value) {
	return objectToString.call(value) === '[object GeneratorFunction]'
}

module.exports = isGeneratorFunction
