const inspect = require('./inspect')
const isString = require('./isString')

function expectString(value) {
	if (isString(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a String.`)
}

module.exports = expectString
