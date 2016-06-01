const inspect = require('./inspect')

function expectMoreThan(more, value) {
	if (value > more) return value
	throw new RangeError(`Expected ${inspect(value)} to be more than ${inspect(more)}.`)
}

module.exports = expectMoreThan
