const inspect = require('./inspect')
const isArguments = require('./isArguments')

function expectArguments(value) {
	if (isArguments(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Arguments object.`)
}

module.exports = expectArguments
