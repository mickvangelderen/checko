const inspect = require('./inspect')
const isInt16Array = require('./isInt16Array')

function expectInt16Array(value) {
	if (isInt16Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Int16Array.`)
}

module.exports = expectInt16Array
