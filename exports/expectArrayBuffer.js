const inspect = require('./inspect')
const isArrayBuffer = require('./isArrayBuffer')

function expectArrayBuffer(value) {
	if (isArrayBuffer(value)) return value
	throw new TypeError(`Expected ${inspect(value)} to be an ArrayBuffer.`)
}

module.exports = expectArrayBuffer
