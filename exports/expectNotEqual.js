const inspect = require('./inspect')

function expectNotEqual(equal, value) {
	if (value !== equal) return value
	throw new RangeError(`Expected ${inspect(value)} to not equal ${inspect(equal)}.`)
}

module.exports = expectNotEqual
