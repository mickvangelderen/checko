const inspect = require('./inspect')
const isInt8Array = require('./isInt8Array')

function expectInt8Array(value) {
	if (isInt8Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Int8Array.`)
}

module.exports = expectInt8Array
