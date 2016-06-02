const inspect = require('./inspect')
const isFiniteNumber = require('./isFiniteNumber')

function expectFiniteNumber(value) {
	if (isFiniteNumber(value)) return value
	throw new RangeError(`Expected ${inspect(value)} to be a finite number.`)
}

module.exports = expectFiniteNumber
