const inspect = require('./inspect')
const isUint8Array = require('./isUint8Array')

function expectUint8Array(value) {
	if (isUint8Array(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an Uint8Array.`)
}

module.exports = expectUint8Array
