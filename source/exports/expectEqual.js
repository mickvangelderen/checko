const inspect = require('./inspect')

function expectEqual(equal, value) {
	if (value === equal) return value
	throw new RangeError(`Expected ${inspect(value)} to equal ${inspect(equal)}.`)
}

module.exports = expectEqual