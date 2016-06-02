const inspect = require('./inspect')
const isBoolean = require('./isBoolean')

function expectBoolean(value) {
	if (isBoolean(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be a Boolean.`)
}

module.exports = expectBoolean
