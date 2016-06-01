const inspect = require('./inspect')
const isNegativeInfinity = require('./isNegativeInfinity')

function expectNegativeInfinity(value) {
	if (isNegativeInfinity(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be negative infinity.`)
}

module.exports = expectNegativeInfinity
