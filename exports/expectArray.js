const inspect = require('./inspect')
const isArray = require('./isArray')

function expectArray(value) {
	if (isArray(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Array.`)
}

module.exports = expectArray
