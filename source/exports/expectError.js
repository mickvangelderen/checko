const inspect = require('./inspect')
const isError = require('./isError')

function expectError(value) {
	if (isError(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Error.`)
}

module.exports = expectError
