const inspect = require('./inspect')
const isInfiniteNumber = require('./isInfiniteNumber')

function expectInfiniteNumber(value) {
	if (isInfiniteNumber(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be an infinite number.`)
}

module.exports = expectInfiniteNumber
